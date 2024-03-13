/**
 * Модуль экспортирует интерфейс универсального компонента плитки с нажатием.
 *
 * @author gjmazai
 */

import type { Graphics, Container } from 'pixi.js';

export interface ITile extends Container {
	/** Универсальный идентификатор плитки. */
	readonly id: number;

	/** Экземпляр класса графики. */
	graphics: Graphics;

	/** Флаг указывающий на выбор тайла. */
	showSelected: boolean;

	/** Флаг указывающий на наведение. */
	showHover: boolean;

	/** Позиция по X. */
	posX: number;

	/** Позиция по Y. */
	posY: number;

	/** Ширина ячейки. */
	cellWidth: number;

	/** Высота ячейки. */
	cellHeight: number;

	/** Флаг указывающий, что тайл выбран. */
	isSelected: boolean;

	/** Метод обрабатывает нажатие на тайл. */
	handleClick(): void;

	/** Метод обрабатывает навведение курсора на тайл. */
	handleMouseOver(): void;

	/** Метод обрабатывает выведение курсора из тайла.  */
	handleMouseOut(): void;
}

/** Тип описывающий конфигурацию цветов. */
export type TColor = {
	regular: number;
	active: number;
	hover: number;
};

/** Набор курсоров. */
export enum ECursor {
	pointer = 'pointer',
	notAllowed = 'not-allowed',
	initial = 'initial'
}
