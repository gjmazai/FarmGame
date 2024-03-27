/**
 * Абсрактная фабрика прфмоугольников.
 *
 * @author gjmazai
 */

import { Service } from 'typedi';

import { type IStrokeRect } from './IStrokeRect';
import { StrokeRect, type StrokeRectParams } from './StrokeRect';

export interface IStrokeRectFactory {
	/**
	 * Метод создает экземпляр прямоугольника.
	 * @param params параметры создания.
	 * @returns экземпляр прямоугольника.
	 */
	createStrokeRect(params: StrokeRectParams): IStrokeRect;
}

@Service('StrokeRectFactory')
export class StrokeRectFactory implements IStrokeRectFactory {
	createStrokeRect (params: StrokeRectParams): IStrokeRect {
		return new StrokeRect(params);
	}
}
