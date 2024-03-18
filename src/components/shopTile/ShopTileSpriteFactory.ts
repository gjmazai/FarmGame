/**
 * Абстрактная фабрика для создания спрайтов магазина.
 * Тут тестирую, что будет лучше: передавать текстуру в конструктор от родителя
 * или создавать в зависимости от типа.
 *
 * @author gjmazai
 */

import { Sprite, type Texture } from 'pixi.js';
import { Inject, Service } from 'typedi';

import { IGameLoader } from '../../engine/gameLoader';

import { EShopType } from './IShopTile';

/** Интерфейс описывающий абстрактную фабрику спрайтов для магазина. */
export interface IShopTileSpriteFactory {
	/**
	 * Фабричный метод для создания экземпляра иконки ресурса.
	 * @param params - параметры текстуры для иконки.
	 * @param type - тип плитки.
	 * @returns экземпляр иконки ресурса.
	 */
	createResourseIcon(params: TIconParam, type: EShopType): Sprite;

	/**
	 * Фабричный метод для создания экземпляра иконки денег.
	 * @param params - параметры текстуры для иконки.
	 * @returns экземпляр иконки денег.
	 */
	createMoneyIcon(params: TIconParam): Sprite;
}

@Service('SpriteFactory')
export class ShopTileSpriteFactory implements IShopTileSpriteFactory {
	createMoneyIcon (params: TIconParam): Sprite {
		const moneyTexture = new Sprite(this.gameLoader.spritesheet.textures['icon-money.png']);
		this.setGeometry(moneyTexture, params);
		return moneyTexture;
	}

	createResourseIcon (params: TIconParam, type: EShopType): Sprite {
		const texture = this.getTextureByType(type);
		const sprite = new Sprite(texture);
		this.setGeometry(sprite, params);
		return sprite;
	}

	/**
	 * Метод устанавливает параметры геометрии для текстуры.
	 * @param texture - текстура для которой необходимо установить значения.
	 * @param param1 - параметры геометрии.
	 */
	private setGeometry (texture: Sprite, { width, height, posX, posY }: TIconParam): void {
		texture.width = width;
		texture.height = height;
		texture.position.x = posX;
		texture.position.y = posY;
	}

	/**
 	 * Метод возвращает текструру из гейм-лоадера по типу тайла.
 	 * @param type - тип тайла.
 	 * @returns необходимая текстура.
 	 */
	private getTextureByType (type: EShopType): Texture {
		const { textures } = this.gameLoader.spritesheet;
		switch (type) {
			case EShopType.Chicken:
				return textures['chiken04.png'];
			case EShopType.Corn:
				return textures['corn00.png'];
			case EShopType.Cow:
				return textures['cow12.png'];
		}
	}

	@Inject('GameLoader')
	private readonly gameLoader: IGameLoader;
}

/** Тип параметров иконки. */
export type TIconParam = {
	width: number;
	height: number;
	posX: number;
	posY: number;
};
