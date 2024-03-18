/**
 * Интерфейс описывающий магазин фермы.
 *
 * @author gjmazai
 */

import { type Container } from 'pixi.js';

import { type IShopTile } from '../../components/shopTile';

export interface IShop extends Container<IShopTile> {
	/** Общая ширина магазина. */
	readonly totalWidth: number;
	/** Общая высота магазина. */
	readonly totalHeight: number;

	/** Метод обрабатывающий клик по тайлу. */
	onTileClick?(tile: IShopTile, shop: IShop): void;
}
