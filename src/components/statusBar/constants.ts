/**
 * Константы для статус бара.
 *
 * @author gjmazai
 */

import { type Texture } from 'pixi.js';

import { EStatusType } from '../statusBarTile';

const { Eggs, Milks, Money, Corns } = EStatusType;

/**
 * Коллекция соотношения типа тайла и текстуры.
 * @constant
 */
export const TYPE_TO_TEXTURE: Map<EStatusType, Texture> = new Map<EStatusType, Texture>([
	[Eggs, egg],
	[Money, money],
	[Milks, milk],
	[Corns, corn]
]);

/**
 * Коллекция соотношения типа тайла и текстуры.
 * @constant
 */
export const TYPE_TO_HOVER: Map<EStatusType, boolean> = new Map<EStatusType, boolean>([
	[Eggs, false],
	[Money, true],
	[Milks, true],
	[Corns, true]
]);

/**
 * Коллекция соотношения типа тайла и текстуры.
 * @constant
 */
export const TYPE_TO_SELECTED: Map<EStatusType, boolean> = new Map<EStatusType, boolean>([
	[Eggs, false],
	[Money, true],
	[Milks, false],
	[Corns, false]
]);
