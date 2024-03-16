/**
 * Класс реализующий компонент статус бара.
 *
 * @author gjmazai
 */

import { Inject } from 'typedi';
import { Container } from 'pixi.js';

import { getId } from '../../utils';

import { type ITile } from '../tile';
import {
	type IStatusBarTile,
	type TStatusBartileFactoryParams,
	EStatusType,
	StatusBarTileFactory
} from '../statusBarTile';

import { TYPE_TO_HOVER, TYPE_TO_SELECTED } from './constants';
import { type IStatusBar } from './IStatusBar';

export class StatusBar extends Container<IStatusBarTile> implements IStatusBar {
	readonly eggCost: number = 2;

	readonly milkCost: number = 5;

	get totalWidth (): number {
		return this.cellWidth * 4;
	};

	get totalHeight (): number {
		return this.cellHeight;
	};

	get money (): number {
		return this.getChildByType(EStatusType.Money).value;
	}

	get corn (): number {
		return this.getChildByType(EStatusType.Corns).value;
	}

	constructor ({ onTileClick }: TStatusBarParams) {
		super();
		this.onTileClick = onTileClick;
		this.setup();
	}

	addValue (value: number, type: EStatusType): void {
		this.getChildByType(type).add(value);
	}

	subValue (value: number, type: EStatusType): void {
		this.getChildByType(type).sub(value);
	}

	sellEggs (): void {
		const money = this.getChildByType(EStatusType.Money);
		const egg = this.getChildByType(EStatusType.Eggs);
		money.add(egg.value * this.eggCost);
		egg.updateValue(0);
	}

	sellMilk (): void {
		const money = this.getChildByType(EStatusType.Money);
		const egg = this.getChildByType(EStatusType.Eggs);
		money.add(egg.value * this.milkCost);
		egg.updateValue(0);
	}

	allDeselect (): void {
		this.children.forEach(child => child.deselect());
	}

	onTileClick? (tile: IStatusBarTile, shopBar: IStatusBar): void;

	/** Метод делает установку компонента. */
	private setup (): void {
		for (const [key, tileType] of Object(EStatusType).values()) {
			const x = key * this.cellWidth;
			const y = this.cellHeight;

			const tile = this.statusBarTileFactory.createStatusBarTile(this.buildParams(x, y, tileType as EStatusType));
			this.addChild(tile);
		}
	}

	/** Строит параметры для создания тайлов статус бара. */
	private buildParams (x: number, y: number, type: EStatusType): TStatusBartileFactoryParams {
		const params: TStatusBartileFactoryParams = {
			id: getId(),
			cellHeight: this.cellHeight,
			cellWidth: this.cellWidth,
			isSelected: false,
			posX: x,
			posY: y,
			statusType: type,
			onClick: this.handleTileClick as ITile['onClick'],
			showHover: TYPE_TO_HOVER.get(type) ?? false,
			showSelected: TYPE_TO_SELECTED.get(type) ?? false,
			value: this.idToInitValue.get(type) ?? 0
		};
		return params;
	}

	/** Возвращает тайл записанный в статус бар по его типу. */
	private getChildByType (type: EStatusType): IStatusBarTile {
		const tile = this.children.find(tile => tile.statusType === type);
		return tile ?? this.children[0];
	}

	/** Метод обрабатывает клик по тайлу и вызывает переданный в конструктор обработчик. */
	private handleTileClick (tile: IStatusBarTile): void {
		this.children.forEach(child => {
			if (child !== tile) {
				child.deselect();
			}
		});
		if (typeof this.onTileClick === 'function') {
			this.onTileClick(tile, this);
		}
	};

	/** Дефолтные значения сущностей. */
	private readonly initMoney: number = 100;
	private readonly initCorns: number = 0;
	private readonly initMilk: number = 0;
	private readonly initEgg: number = 0;
	private readonly idToInitValue = new Map<EStatusType, number>([
		[EStatusType.Money, this.initMoney],
		[EStatusType.Corns, this.initCorns],
		[EStatusType.Milks, this.initMilk],
		[EStatusType.Eggs, this.initEgg]
	]);

	/** Ширина ячейки. */
	private readonly cellWidth: number = 80;

	/** Высота ячейки. */
	private readonly cellHeight: number = 40;

	@Inject('StatusBarTileFactory')
	private readonly statusBarTileFactory: StatusBarTileFactory;
}

export type TStatusBarParams = {
	/** Метод обработчик для клика по тайлу. */
	onTileClick(tile: IStatusBarTile, shopBar: IStatusBar): void;
};
