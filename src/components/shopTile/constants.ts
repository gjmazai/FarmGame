/**
 * Константы для сущносстей плиток магазина.
 *
 * @author gjmazai
 */

import { EShopType } from './IShopTile';

const { Corn, Cow, Chicken } = EShopType;

/**
 * Коллекция соотношения типа товара к стоимости товара.
 * @constant
 */
export const TYPE_TO_COST: ReadonlyMap<EShopType, number> = new Map<EShopType, number>([
	[Corn, 5],
	[Chicken, 15],
	[Cow, 30]
]);
