/**
 * Абстрактная фабрика для плитки освного грида.
 *
 * @author gjmazai
 */

import { Inject, Service } from 'typedi';
import { AnimatedSprite, Sprite, type Texture } from 'pixi.js';

import { IGameLoader } from '../../engine';

import { type TGridTileOption } from './GridTileOptions';
import { EGridType } from './IGridTile';

export interface IGridTileFactory {
	/**
	 * Фабричный метод создающий спрайты для плиток основного грида.
	 * @param params - параметры для создания спрайта.
	 * @returns спрайт для плиток основного грида.
	 */
	createGridtileSprite(params: TGridtileFactoryMethodParams): Sprite | AnimatedSprite;
}

@Service('GridTileFactory')
export class GridTileFactory implements IGridTileFactory {
	createGridtileSprite (params: TGridtileFactoryMethodParams): Sprite | AnimatedSprite {
		const texture = this.getTextureResource(EGridType.PossibleCorn);
		const isTextuteArray = Array.isArray(texture);

		const sprite = isTextuteArray ? new AnimatedSprite(texture) : new Sprite(texture);
		sprite.width = params.width;
		sprite.height = params.height;
		sprite.position.x = params.marginLeft;
		sprite.position.y = params.marginTop;

		if (sprite instanceof AnimatedSprite && params.animationSpeed) {
			sprite.animationSpeed = params.animationSpeed * Math.random();
		}

		return sprite;
	}

	/** Метод возвращает  */
	private getTextureResource (type: EGridType): Texture | Texture[] {
		const { textures, animations } = this.gameLoader.spritesheet;
		switch (type) {
			case EGridType.Grass:
				return textures['grass.png'];
			case EGridType.Chicken:
				return animations.chicken;
			case EGridType.Cow:
				return animations.cow;
			case EGridType.Corn:
				return animations.corn;
			case EGridType.PossibleCorn:
				return textures['corn-mask.png'];
			case EGridType.PossibleChicken:
				return textures['chicken-mask.png'];
			case EGridType.PossibleCow:
				return textures['cow-mask.png'];
		}
		return textures['grass.png'];
	}

	@Inject('GameLoader')
	private readonly gameLoader: IGameLoader;
}

/** Тип для параметров фабричного метода. */
export type TGridtileFactoryMethodParams = TGridTileOption & { type: EGridType };
