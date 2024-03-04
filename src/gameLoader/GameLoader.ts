/**
 * Модуль экспортирует класс игрового загрузчика.
 * 
 * @author gjmazai
 */

import { Assets, Spritesheet } from "pixi.js";

import { IGameLoader, TSettings } from "./IGameLoader";
import { LoaderUrls } from "./Urls";
import { LoaderKeys } from "./Keys";


export class GameLoader implements IGameLoader {
	loader: typeof Assets;

	settings: TSettings;

	spritesheet!: Spritesheet;

	constructor() {
		this.loader = Assets;
	}

	async loadAll(): Promise<void> {
		await this.loadSettings();
		await this.loadResources();
	}

	async loadSettings(): Promise<void> {
		this.settings = await fetch(LoaderUrls.Settings).then(async res => await res.json());
	}

	async loadResources(): Promise<void> {
		this.loader.add(
			LoaderKeys.Tileset,
			LoaderUrls.Spritesheet
		);
		this.spritesheet = await this.loader.load(LoaderKeys.Tileset);
	}
}