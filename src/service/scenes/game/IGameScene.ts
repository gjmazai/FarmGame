/**
 * Модуль экспортирует интерфейс описывающий игровую сцену.
 * 
 * @author gjmazai
 */

import { TValueSetter } from "../../../commontypes";


/** Интерфейс описывающий сцену игры. Исключая методы предоставляющие Phaser.Scene */
export interface IGameScene extends Phaser.Scene {
	/** Количество fps. */
	readonly fps: number;

	/** Версия Phaser. */
	readonly phaserVersion: string;

	/** Метод устанавливает значение fps. */
	setFps: TValueSetter<number>;

	/** Метод устанавливает версию Phaser. */
	setVersion: TValueSetter<string>;
}