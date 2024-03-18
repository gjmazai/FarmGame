/**
 * Модуль экспортирует интерфейс описывающий загрузчик данных приложения.
 *
 * @author gjmazai
 */

import { type Assets, type Spritesheet } from 'pixi.js';

export type TSettings = {
	grid: {
		'width-tiles': number;
		'height-tiles': number;
	};
};

export interface IGameLoader {
	/** Загрузчик ассетов. */
	loader: typeof Assets;
	/** Настрйоки. */
	settings: TSettings;
	/** Сконфигурированный спрайтлист. */
	spritesheet: Spritesheet;
	/** Метод активирует общую загрузку. */
	loadAll(): Promise<void>;
	/** Метод активирует загрузку настроек. */
	loadSettings(): Promise<void>;
	/** метод активирует загрузку ресурсов. */
	loadResources(): Promise<void>;
}
