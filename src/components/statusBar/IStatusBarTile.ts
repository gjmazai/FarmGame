/**
 * Интерфейс плитки для статус бара.
 *
 *
 */

import { type Texture } from 'pixi.js';
import { type ITile } from '../tile';

export interface IStatusBarTile extends ITile {
	/** Тип ячейки для в статус баре. */
	readonly statusType: EStatusType;
	/** Значение сущностей. */
	readonly value: number;
	/** Текстура для тайла. */
	readonly iconTextureResource: Texture;

	/** Метод добавляет переданное кол-во ресурсов к основному значению. */
	add (value: number): void;
	/** Метод отнимает от основного значения кол-во ресурса. */
	sub (value: number): void;
}

/** Тип ячейки для в статус баре. */
export enum EStatusType {
	Money,
	Corns,
	Eggs,
	Milks
}
