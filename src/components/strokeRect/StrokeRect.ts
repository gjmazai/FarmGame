/**
 * Компонент реализующий прямоугольник для показа статуса.
 *
 * @author gjmazai
 */

import { Graphics } from 'pixi.js';
import { type IStrokeRect } from './IStrokeRect';

export class StrokeRect extends Graphics implements IStrokeRect {
	constructor ({ x, y, strokeWidth, widht, height, color }: StrokerectParams) {
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
export type StrokerectParams = {
	x: number;
	y: number;
	strokeWidth: number;
	widht: number;
	height: number;
	color: number;
};
