/**
 * Фабрика для тайлов статус-бара.
 *
 * @author gjmazai
 */

import { Service } from 'typedi';

import { type IStatusBarTile } from './IStatusBarTile';
import { StatusBarTile, type TStatusBarTileParams } from './StatusBarTile';

@Service('StatusBarTileFactory')
export class StatusBarTileFactory {
	/**
	 * Абстрактный метод для создания тайлов статус бара.
	 * @param params - параметры для создания тайла статус бара.
	 * @returns экземпляр класса тайла статус бара.
	 */
	createStatusBarTile (params: TStatusBarTileParams): IStatusBarTile {
		return new StatusBarTile(params);
	}
}
