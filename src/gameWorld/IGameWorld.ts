/**
 * Модуль кспортирует интерфейс описывающий сущность игрового мира.
 *
 * @author gjmazai
 */

import { type Application } from 'pixi.js'

export class World {
	public app: Application<HTMLCanvasElement>
	constructor({ app }: { app: Application<HTMLCanvasElement> }) {
		this.app = app
		this.app.ticker.add(this.handleAppTick)
		this.container.on('pointertap', this.handleClick)
	}

	handleAppTick = (): void => { }
	handleClick = (): void => { }
}