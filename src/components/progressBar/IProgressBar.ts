/**
 * Интерфейс описывающий прогресс-бар.
 *
 * @author gjmzai
 */

import { type Graphics } from 'pixi.js';

export interface IProgressBar extends Graphics {
	/** Максимальное значение цвета в графике. */
	readonly maxColor: number;
	/** Минимальное значение цвета в графике. */
	readonly minColor: number;
	/** Максимальный цвет в RGB. */
	readonly maxRgb: [number, number, number];
	/** Минимальный цвет в RGB. */
	readonly minRgb: [number, number, number];

	/**
	 * Метод преобразует цвет из числа в хекс.
	 * @param color - цвет в виде цифры.
	 */
	toHex(color: number): string;
	/**
	 * Метод преобразует цвет в формат rgb.
	 * @param color - цвет в виде цифры.
	 */
	numColorToArray(color: number): [number, number, number];
	/**
	 * Метод интерполирует цвета.
	 * @param num - указатель интерполяции.
	 */
	interpolateColors(num: number): string;
	/**
	 * Метод обновления графики.
	 * @param value - показатель интерполяцуии цвета в графике.
	 */
	update(value: number): void;
}
