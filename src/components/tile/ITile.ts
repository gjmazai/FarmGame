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
	readonly graphics: Graphics;

	/** Флаг указывающий на выбор тайла. */
	readonly showSelected: boolean;

	/** Флаг указывающий на наведение. */
	readonly showHover: boolean;

	/** Позиция по X. */
	readonly posX: number;

	/** Позиция по Y. */
	readonly posY: number;

	/** Ширина ячейки. */
	readonly cellWidth: number;

	/** Высота ячейки. */
	readonly cellHeight: number;

	/** Флаг указывающий, что тайл выбран. */
	readonly isSelected: boolean;

	/** Опции для иконки. */
	readonly iconOption?: TIconOption;

	/** Опции для текста. */
	readonly textOptions?: TTextOptions;

	/** Метод обрабатывает нажатие на тайл. */
	handleClick(): void;

	/** Метод обрабатывает навведение курсора на тайл. */
	handleMouseOver(): void;

	/** Метод обрабатывает выведение курсора из тайла.  */
	handleMouseOut(): void;

	/** Метод выбирает тайл. */
	select(): void;

	/** Метод снимает выбор с тайла. */
	deselect(): void;

	/** Метод изменяет выбор тайла. */
	toggle(): void;

	/** Пользовательский метод для обработки клика. Передается в конструктор. */
	onClick<T extends ITile>(tile: T): void;
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

/** Опции для иконки. */
export type TIconOption = {
	width: number;
	height: number;
	marginLeft: number;
	marginTop: number;
};

/** тип опций текста. */
export type TTextOptions = {
	fontSize: number;
	marginLeft: number;
	marginTop: number;
};
