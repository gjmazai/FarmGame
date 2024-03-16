/**
 * Интерфейс описывающий плитки для магазина.
 *
 * @author gjmazai
 */

import { type TIconOption, type ITile, type TTextOptions } from '../tile';

export interface IShopTile extends ITile {
	/** Тип ячейки в магазине. */
	readonly shopType: EShopType;
	/** Стоимость сущности. */
	readonly cost: number;
	/** Когфигурация размера иконки денег. */
	readonly moneyOptions: TIconOption;
	/** Конфигурация текста. */
	readonly textOptions: TTextOptions;
	/** конфигурация иконки ресурса. */
	readonly iconOption: TIconOption;
}

/** Типы ячеек в магазине. */
export enum EShopType {
	Corn,
	Chicken,
	Cow
}
