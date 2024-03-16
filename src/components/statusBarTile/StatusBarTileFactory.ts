/**
 * Фабрика для тайлов статус-бара.
 *
 * @author gjmazai
 */

import { Inject, Service } from 'typedi';

import { IGameLoader } from '../../gameLoader';

import { EStatusType, type IStatusBarTile } from './IStatusBarTile';
import { StatusBarTile, type TStatusBarTileParams } from './StatusBarTile';
import { type Texture } from 'pixi.js';

@Service('StatusBarTileFactory')
export class StatusBarTileFactory {
	/**
	 * Абстрактный метод для создания тайлов статус бара.
	 * @param params - параметры для создания тайла статус бара.
	 * @returns экземпляр класса тайла статус бара.
	 */
	createStatusBarTile (params: TStatusBartileFactoryParams): IStatusBarTile {
		const factoryData: TStatusBarTileParams = {
			iconTextureResource: this.getTextureByType(params.statusType),
			...params
		};

		return new StatusBarTile(factoryData);
	}

	/**
	 * Метод возвращает текструру из гейм-лоадера по типу тайла.
	 * @param type - тип тайла.
	 * @returns необходимая текстура.
	 */
	private getTextureByType (type: EStatusType): Texture {
		const { textures } = this.gameLoader.spritesheet;
		switch (type) {
			case EStatusType.Eggs:
				return textures['icon-egg.png'];
			case EStatusType.Milks:
				return textures['icon-milk.png'];
			case EStatusType.Money:
				return textures['icon-money.png'];
			case EStatusType.Corns:
				return textures['icon-corn.png'];
		}
	}

	@Inject('GameLoader')
	private readonly gameLoader: IGameLoader;
}

export type TStatusBartileFactoryParams = Omit<TStatusBarTileParams, 'iconTextureResource'>;
