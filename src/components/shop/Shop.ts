/**
 * Класс реализующий магазин фермы.
 *
 * @author gjmazai
 */

import { Container } from 'pixi.js';
import { type IShop } from './IShop';
import { EShopType, type TShopTileParams, type IShopTile } from '../shopTile';
import { Inject } from 'typedi';
import { IShopTileFactory } from '../shopTile/ShopTileFactory';
import { getId } from '../../utils';
import { type ITile } from '../tile';

export class Shop extends Container<IShopTile> implements IShop {
	get totalWidth (): number {
		return this.cellWidth * 3;
	}

	get totalHeight (): number {
		return this.cellHeight;
	}

	onTileClick? (tile: IShopTile, shop: IShop): void;

	constructor ({ onTileClick }: TShopParams) {
		super();
		this.onTileClick = onTileClick;
		this.setup();
	}

	/** Метод делает установку компонента. */
	private setup (): void {
		this.shopTypes.forEach((type, index) => {
			const x = index * this.cellWidth + index * 10;
			const y = this.cellHeight;

			const tile = this.shopTileFactory.createShopTile(this.buildParams(x, y, type));
			this.addChild(tile);
		});
	}

	/** Метод строит параметры для создания дочерней плитки. */
	private buildParams (x: number, y: number, type: EShopType): TShopTileParams {
		return {
			id: getId(),
			cellHeight: this.cellHeight,
			cellWidth: this.width,
			onClick: this.handleClickTile as ITile['onClick'],
			posX: x,
			posY: y,
			shopType: type
		};
	}

	/** Инкапсулированный метод обрабатывающий клик по тайлу. */
	private handleClickTile (tile: IShopTile): void {
		this.children.forEach(child => {
			if (child !== tile) {
				child.deselect();
			}
		});
		this.onTileClick?.(tile, this);
	}

	/** Размеры одной ячейки в магазине. */
	private readonly cellWidth: number = 100;
	private readonly cellHeight: number = 40;

	/** Кортеж типов ячеек магазина. */
	private readonly shopTypes: readonly EShopType[] = [EShopType.Corn, EShopType.Chicken, EShopType.Cow];

	@Inject('ShopTileFactory')
	private readonly shopTileFactory: IShopTileFactory;
}

/** Тип описывающий параметры, передающиеся в конструктор. */
export type TShopParams = {
	onTileClick: IShop['onTileClick'];
};
