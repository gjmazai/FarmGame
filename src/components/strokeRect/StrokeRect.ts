/**
 * Компонент реализующий прямоугольник для показа статуса.
 *
 * @author gjmazai
 */

import { Graphics } from 'pixi.js';
import { type IStrokeRect } from './IStrokeRect';

export class StrokeRect extends Graphics implements IStrokeRect {
	constructor ({ x, y, strokeWidth, widht, height, color }: StrokeRectParams) {
		super();
		this.clear()
			.beginFill(color)
			.drawRect(x, y, widht, height)
			.endFill()
			.beginHole()
			.drawRect(x + strokeWidth, y + strokeWidth, widht - strokeWidth * 2, height - strokeWidth * 2)
			.endHole();
	}
}

/** Тип для параметров конструктора прямоугольника статуса. */
export type StrokeRectParams = {
	x: number;
	y: number;
	strokeWidth: number;
	width: number;
	height: number;
	color: number;
};
