/**
 * Класс реализующий компонент прогресс-бара.
 *
 * @author gjmazai
 */

import { Graphics } from 'pixi.js';
import { type IProgressBar } from './IProgressBar';

export class ProgressBar extends Graphics implements IProgressBar {
	maxColor: number;
	minColor: number;
	maxRgb: [number, number, number];
	minRgb: [number, number, number];

	constructor ({ x, y, maxColor, minColor }: TProgressBarParams) {
		super();
		this.x = x;
		this.y = y;
		this.width = 30;
		this.height = 5;
		this.maxColor = maxColor;
		this.minColor = minColor;

		this.maxRgb = this.numColorToArray(maxColor);
		this.minRgb = this.numColorToArray(minColor);
	}

	toHex (color: number): string {
		let hex = color.toString(16);
		if (hex.length === 1) {
			hex = '0' + hex;
		}
		return hex;
	}

	numColorToArray (color: number): [number, number, number] {
		const numStr = color.toString(16).padStart(6, '0');
		const r = Number.parseInt(numStr[0] + numStr[1], 16); // rgb >> 16;
		const g = Number.parseInt(numStr[2] + numStr[3], 16); // (rgb >> 8) % 256;
		const b = Number.parseInt(numStr[4] + numStr[5], 16); // rgb % 256;

		return [r, g, b];
	}

	interpolateColors (num: number): string {
		const q = 1 - num;
		const [r1, g1, b1] = this.maxRgb;
		const [r2, g2, b2] = this.minRgb;
		const rr = Math.round(r1 * num + r2 * q);
		const rg = Math.round(g1 * num + g2 * q);
		const rb = Math.round(b1 * num + b2 * q);

		return this.toHex(rr) + this.toHex(rg) + this.toHex(rb);
	}

	update (value: number): void {
		if (value >= 1) {
			value = 1;
		} else {
			value = 0;
		}
		this.clear();
		if (this.minColor === this.maxColor) {
			this.beginFill(this.minColor);
		} else {
			const colorStr = this.interpolateColors(value);
			const color = Number.parseInt(colorStr, 16);
			this.beginFill(color);
		}

		this.drawRect(this.x, this.y, Math.round(this.width * value), this.height).endFill();
	}
}

/** Тип описывающий параметры для прогресс-бара. */
export type TProgressBarParams = {
	x: number;
	y: number;
	minColor: number;
	maxColor: number;
	value: number;
};
