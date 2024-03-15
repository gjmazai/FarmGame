/**
 * Класс реализующий компонент статус бара.
 *
 * @author gjmazai
 */

import { Container, Texture } from 'pixi.js';

import { type IStatusBarTile, EStatusType } from '../statusBarTile';

import { type IStatusBar } from './IStatusBar';
import { Inject } from 'typedi';
import { StatusBarTileFactory } from '../statusBarTile/StatusBarTileFactory';

export class StatusBar extends Container<IStatusBarTile> implements IStatusBar {
	readonly eggCost: number = 2;

	readonly milkCost: number = 5;

	get totalWidth (): number {
		return this.cellWidth * 4;
	};

	get totalHeight (): number {
		return this.cellHeight;
	};

	get money(): number {
		return this.
	}

	get corns(): number {
		return this.
	}

	constructor(params: TStatusBarParams){
		super();
		this.onTileClick = params.onTileClick;
		this.setup(params);
	}

	onTileClick?: (tile: IStatusBarTile, shopBar: IStatusBar) => void;

	/** Метод делает установку компонента. */
	private setup({
		textures: {
			money,
			corn,
			egg,
			milk
		}
	}: TStatusBarParams): void {
		const { Money, Eggs, Milks, Corns } = EStatusType;
		
		for (let rowIndex = 0; rowIndex < this.tileCountInWidth; rowIndex++) {
			const x = rowIndex * this.cellWidth;
			const y = this.cellHeight;
			const tile = this.statusBarTileFactory.createStatusBarTile()
		}
	}

	private buildParams( )

	/** Дефолтные значения сущностей. */
	private readonly initMoney: number = 100;
	private readonly initCorns: number = 0;
	private readonly initMilk: number = 0;
	private readonly initEgg: number = 0;
	private readonly idToInitValue: Map<EStatusType, number> = new Map([
		[EStatusType.Money, this.initMoney],
		[EStatusType.Corns, this.initCorns],
		[EStatusType.Milks, this.initMilk],
		[EStatusType.Eggs, this.initEgg],
	]);

	/** Количество ячеек в ширину. */
	private readonly tileCountInWidth: number = 4;

	/** Количество ячеек в высоту. */
	private readonly tileCountInHeight: number = 1;

	/** Ширина ячейки. */
	private readonly cellWidth: number = 80;

	/** Высота ячейки. */
	private readonly cellHeight: number = 40;

	@Inject('StatusBarTileFactory')
	private statusBarTileFactory: StatusBarTileFactory;
}

export type TStatusBarParams = {
	/** Передаваемые текстуры. */
	textures: {
		money: Texture,
		corn: Texture,
		egg: Texture,
		milk: Texture,
	};
	/** Метод обработчик для клика по тайлу. */
	onTileClick: IStatusBar['onTileClick'];
}