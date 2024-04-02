/**
 * Абстрактная фабрика прогресс баров.
 *
 * @author gjmazai
 */

import { Service } from 'typedi';

import { type IProgressBar } from './IProgressBar';
import { ProgressBar, type TProgressBarParams } from './ProgressBar';

export interface IProgressBarFactory {
	/**
	 * Фабричный метод создающий экземпляр прогресс бара.
	 * @param param - параметры для создания.
	 * @returns экземпляр класса прогресс бара.
	 */
	createProgressBar(param: TProgressBarParams): IProgressBar;
}

@Service('ProgressBarFactory')
export class ProgressBarFactory implements IProgressBarFactory {
	createProgressBar (param: TProgressBarParams): IProgressBar {
		return new ProgressBar(param);
	}
}
