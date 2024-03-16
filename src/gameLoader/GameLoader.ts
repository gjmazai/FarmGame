/**
 * Модуль экспортирует класс игрового загрузчика.
 *
 * @author gjmazai
 */

import { Assets, type Spritesheet } from 'pixi.js';
import { Service } from 'typedi';

import { type IGameLoader, type TSettings } from './IGameLoader';
import { LoaderUrls } from './Urls';
import { LoaderKeys } from './Keys';

@Service('GameLoader')
export class GameLoader implements IGameLoader {
	loader: typeof Assets;

	settings: TSettings;

	spritesheet!: Spritesheet;

	constructor () {
		this.loader = Assets;
	}

	async loadAll (): Promise<void> {
		await this.loadSettings();
		await this.loadResources();
	}

	async loadSettings (): Promise<void> {
		this.settings = await fetch(LoaderUrls.Settings).then(async res => await res.json());
	}

	async loadResources (): Promise<void> {
		this.loader.add(
			LoaderKeys.Tileset,
			LoaderUrls.Spritesheet
		);
		this.spritesheet = await this.loader.load(LoaderKeys.Tileset);
	}
}
