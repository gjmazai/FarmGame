/**
 * Компонент основной плитки приложения.
 *
 * @author gjmazai
 */

import { AnimatedSprite, Sprite } from 'pixi.js';
import { Inject } from 'typedi';

import { Tile, type TTileConstructorParams } from '../tile';
import { IStrokeRectFactory, type IStrokeRect } from '../strokeRect';
import { type IProgressBar } from '../progressBar';

import { IGridTileFactory, type TGridtileFactoryMethodParams } from './GridTileFactory';
import { EGridType, type IGridTile } from './IGridTile';
import { gridTilesType, rectOptions } from './constants';

export class GridTile extends Tile implements IGridTile {
	gridType: EGridType;
	isFree: boolean = true;
	isOccupied: boolean;
	isFeeding: boolean;

	cornBuildableSprite: Sprite;
	chickenBuildableSprite: Sprite;
	cowBuildableSprite: Sprite;

	cornAnimatedSprite: AnimatedSprite;
	chickenAnimatedSprite: AnimatedSprite;
	cowAnimatedSprite: AnimatedSprite;

	foodProgress?: IProgressBar;
	geretatedProgress?: IProgressBar;
	deathProgress?: IProgressBar;
	rectGraphics: IStrokeRect;
	progressBar: IProgressBar;

	constructor (params: TTileConstructorParams) {
		super(params);
		this.setup();
		this.setType(EGridType.Grass);
	}

	setType (type: EGridType): void {
		this.gridType = type;
		this.hideAllSprites();

		switch (type) {
			case EGridType.Chicken:
				this.chickenAnimatedSprite.visible = true;
				this.isOccupied = true;
				return;
			case EGridType.Corn:
				this.cornAnimatedSprite.visible = true;
				this.isOccupied = true;
				return;
			case EGridType.Cow:
				this.cowAnimatedSprite.visible = true;
				this.isOccupied = true;
				return;
			case EGridType.PossibleChicken:
				this.chickenBuildableSprite.visible = true;
				return;
			case EGridType.PossibleCorn:
				this.cornBuildableSprite.visible = true;
				return;
			case EGridType.PossibleCow:
				this.cowBuildableSprite.visible = true;
				return;
			case EGridType.PossibleFeedChicken:
			case EGridType.PossibleFeedCow:
				this.rectGraphics.visible = true;
		}
	}

	/** Метод установки плитки. */
	private setup (): void {
		const x = this.posX + Math.round(this.x);
		const y = this.posY + Math.round(this.y);

		gridTilesType.forEach((option, type) => {
			const params: TGridtileFactoryMethodParams = {
				type,
				height: option.height,
				width: option.width,
				marginLeft: x + option.marginLeft,
				marginTop: y + option.marginTop,
				animationSpeed: option.animationSpeed
			};
			const sprite = this.gridTileFactory.createGridtileSprite(params);
			if (type === EGridType.Grass) {
				sprite.alpha = 0.5;
			}
			this.addChild(sprite);
			this.setSprite(type, sprite);
		});

		const rectGraphics = this.strokeRectParams.createStrokeRect({ ...rectOptions });
		this.addChild(rectGraphics);
		this.rectGraphics = rectGraphics;
	}

	/** Метод устанавливает поля в зависимости от типа. */
	private setSprite (type: EGridType, sprite: Sprite | AnimatedSprite): void {
		switch (type) {
			case EGridType.Chicken:
				// Глупый TS не позволяет вынести проверку типа в функцию, поэтому приходится городить такие конструкции
				if (sprite instanceof AnimatedSprite) this.chickenAnimatedSprite = sprite;
				return;
			case EGridType.Corn:
				if (sprite instanceof AnimatedSprite) this.cornAnimatedSprite = sprite;
				return;
			case EGridType.Cow:
				if (sprite instanceof AnimatedSprite) this.cowAnimatedSprite = sprite;
				return;
			case EGridType.PossibleChicken:
				if (sprite instanceof Sprite) this.chickenBuildableSprite = sprite;
				return;
			case EGridType.PossibleCorn:
				if (sprite instanceof Sprite) this.cornBuildableSprite = sprite;
				return;
			case EGridType.PossibleCow:
				if (sprite instanceof Sprite) this.cowBuildableSprite = sprite;
		}
	}

	/** Метод скрывает все спрайты. */
	private hideAllSprites (): void {
		const sprites = [
			this.chickenAnimatedSprite, this.chickenBuildableSprite,
			this.cowAnimatedSprite, this.cowBuildableSprite,
			this.cornAnimatedSprite, this.cornBuildableSprite,
			this.rectGraphics
		];
		sprites.forEach(sprite => { sprite.visible = false; });
	}

	@Inject('GridTileFactory')
	private readonly gridTileFactory: IGridTileFactory;

	@Inject('StrokeRectParams')
	private readonly strokeRectParams: IStrokeRectFactory;
}
