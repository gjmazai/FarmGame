/**
 * Константы для статус бара.
 *
 * @author gjmazai
 */

import { EStatusType } from '../statusBarTile';

const { Eggs, Milks, Money, Corns } = EStatusType;

/**
 * Коллекция соотношения типа тайла и текстуры.
 * @constant
 */
export const TYPE_TO_HOVER: ReadonlyMap<EStatusType, boolean> = new Map<EStatusType, boolean>([
	[Eggs, false],
	[Money, true],
	[Milks, true],
	[Corns, true]
]);

/**
 * Коллекция соотношения типа тайла и текстуры.
 * @constant
 */
export const TYPE_TO_SELECTED: ReadonlyMap<EStatusType, boolean> = new Map<EStatusType, boolean>([
	[Eggs, false],
	[Money, true],
	[Milks, false],
	[Corns, false]
]);
