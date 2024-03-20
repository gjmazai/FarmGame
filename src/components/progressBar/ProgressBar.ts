/**
 * Класс реализующий компонент прогресс-бара.
 *
 * @author gjmazai
 */

import { Graphics } from 'pixi.js';
import { type IProgressBar } from './IProgressBar';

export class ProgressBar extends Graphics implements IProgressBar {
	readonly maxColor: number;
	readonly minColor: number;

	constructor ({ x, y, maxColor, minColor }: TProgressBarParams) {
		super();
		this.x = x;
		this.y = y;
		this.width = 30;
		this.height = 5;
		this.maxColor = maxColor;
		this.minColor = minColor;
	}

	toHex (color: number): string;

	numColorToArray (color: number): [number, number, number];

	interpolateColors (num: number): string;

	update (value: number): void;
}

/** Тип описывающий параметры для прогресс-бара. */
export type TProgressBarParams = {
	x: number;
	y: number;
	minColor: number;
	maxColor: number;
};
