/**
 * Функция инициализирует экземпляр Application, подгружает данные и запускает движок игры.
 *
 * @author gjmazai
 */

import { Application } from 'pixi.js';

import { GameLoader } from './gameLoader';

async function start (): Promise<void> {
	const gameLoader = new GameLoader();
	await gameLoader.loadAll();
	const app = new Application({
		width: window.innerWidth,
		height: window.innerHeight,
		backgroundColor: 0xe6e7ea,
		resizeTo: window
	});
}
