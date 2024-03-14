/**
 * Модуль кспортирует интерфейс описывающий сущность игрового мира.
 *
 * @author gjmazai
 */

import { type Application } from 'pixi.js';

export interface IWorld {
	app: Application<HTMLCanvasElement>;
	statusBar: IStatusBar;
	farmGrid: IFarmGrid;
	shopBar: IShopBar;

	handleAppTick(): void;
	handleClick(): void;
}
