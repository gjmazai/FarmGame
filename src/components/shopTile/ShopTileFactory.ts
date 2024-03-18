/**
 * Абстрактная фабрик компонентов магазина.
 *
 * @author gjmazai
 */

import { Service } from 'typedi';
import { type IShopTile } from './IShopTile';
import { ShopTile, type TShopTileParams } from './ShopTile';

/** Интерфейс описывающий абстрактную фабрику компонентов магазина. */
export interface IShopTileFactory {
	/**
	 * Фабричный метод пораждающий плитки магазина.
	 * @param params - параметры для создания плитки.
	 * @returns экземпляр плитки магазина.
	 */
	createShopTile(params: TShopTileParams): IShopTile;
}

@Service('ShopTileFactory')
export class ShopTileFactory {
	createShopTile (params: TShopTileParams): IShopTile {
		return new ShopTile(params);
	}
}
