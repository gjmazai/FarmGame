/**
 * Фабрика для плиток.
 *
 * @author gjmazai
 */

import { Service } from 'typedi';

import { type ITile, type TTileConstructorParams, Tile } from '.';

@Service('TileFactory')
export class TileFactory {
	/** Абстрактный метод для дефолтного создания тайла. */
	createTile (params: TTileConstructorParams): ITile {
		return new Tile(params);
	}
}
