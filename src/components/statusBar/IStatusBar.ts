/**
 * Интерфейс описывающий компонент статус бара.
 *
 * @author gjmazai
 */

import { type Container } from 'pixi.js';

import { type EStatusType, type IStatusBarTile } from '../statusBarTile';

export interface IStatusBar extends Container<IStatusBarTile> {
	/** Общая ширина статус бара. */
	readonly totalWidth: number;
	/** Общая высота статус бара. */
	readonly totalHeight: number;
	/** Стоимость одного яйца. */
	readonly eggCost: number;
	/** Стоимость одного молока. */
	readonly milkCost: number;
	/** Количество денег. */
	readonly money: number;
	/** Количество пшена. */
	readonly corn: number;

	/** Обрабатывающий метод клика по тайлу. */
	onTileClick?(tile: IStatusBarTile, shopBar: IStatusBar): void;
	/** Добавить значение к ячейке. */
	addValue(value: number, type: EStatusType): void;
	/** Отнять значение от ячейки. */
	subValue(value: number, type: EStatusType): void;
	/** Продать яйцо. */
	sellEggs(): void;
	/** Продать молоко. */
	sellMilk(): void;
	/** Отменить выбор всех ячеек. */
	allDeselect(): void;
}
