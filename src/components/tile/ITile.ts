/**
 * Модуль экспортирует интерфейс универсального компонента плитки с нажатием.
 *
 * @author gjmazai
 */

import type { Graphics, Container } from 'pixi.js';

export interface ITile extends Container {
	/** Экземпляр класса графики. */
	graphics: Graphics;

	/** Метод обрабатывает нажатие на тайл. */
	handleClick(): void;

	/** Метод обрабатывает введение курсора на тайла. */
	handleMouseOver(): void;

	/** Метод обрабатывает выведение курсора из тайла.  */
	handleMouseOut(): void;
}
