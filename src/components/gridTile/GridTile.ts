/**
 * Компонент основной плитки приложения.
 *
 * @author gjmazai
 */

import { AnimatedSprite, Sprite } from 'pixi.js';
import { Inject } from 'typedi';

import { Tile, type TTileConstructorParams } from '../tile';
import { IStrokeRectFactory, type IStrokeRect } from '../strokeRect';
import { IProgressBarFactory, type IProgressBar } from '../progressBar';

import { IGridTileFactory, type TGridtileFactoryMethodParams } from './GridTileFactory';
import { EGridType, type IGridTile } from './IGridTile';
import { foodOptions, gridTilesType, rectOptions } from './constants';

export class GridTile extends Tile implements IGridTile {
	gridType: EGridType;

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

	get isFree (): boolean {
		return [
			EGridType.PossibleChicken,
			EGridType.PossibleCorn,
			EGridType.PossibleCow,
			EGridType.Grass
		].includes(this.gridType);
	}

	get isOccupied (): boolean {
		return [
			EGridType.Chicken,
			EGridType.Corn,
			EGridType.Cow
		].includes(this.gridType);
	}

	get isFeeding (): boolean {
		return [
			EGridType.PossibleFeedChicken,
			EGridType.PossibleFeedCow,
			EGridType.Cow,
			EGridType.Chicken
		].includes(this.gridType);
	}

	setType (type: EGridType): void {
		this.gridType = type;

		switch (type) {
			case EGridType.Chicken:
				this.chickenAnimatedSprite.visible = true;
				this.appendProgressBars();
				break;
			case EGridType.Corn:
				this.cornAnimatedSprite.visible = true;
				this.appendProgressBars();
				break;
			case EGridType.Cow:
				this.cowAnimatedSprite.visible = true;
				this.appendProgressBars();
				break;
			case EGridType.PossibleChicken:
				this.chickenBuildableSprite.visible = true;
				break;
			case EGridType.PossibleCorn:
				this.cornBuildableSprite.visible = true;
				break;
			case EGridType.PossibleCow:
				this.cowBuildableSprite.visible = true;
				break;
		}
		if (type === EGridType.PossibleFeedChicken || type === EGridType.PossibleFeedCow) {
			this.rectGraphics.visible = true;
		} else {
			this.hideAllSprites();
		}
	}

	appendProgressBars (): void {
		const { gridType, generatedValue, posX, posY, width, height, foodValue } = this;
		const x = posX + Math.round(width / 2);
		const y = posY + Math.round(height / 2);
		/** Проверка на вставку генерации ресурсов. */
		if ([
			EGridType.PossibleCorn,
			EGridType.PossibleChicken,
			EGridType.PossibleCow
		].includes(gridType)) {
			const typeToMinColor: Record<string, number> = {
				[EGridType.PossibleCorn]: 0xeec643,
				[EGridType.PossibleChicken]: 0xeef0f2,
				[EGridType.PossibleCow]: 0x0d21a1
			};
			this.geretatedProgress = this.progressBarFactory.createProgressBar({
				x,
				y,
				maxColor: typeToMinColor[gridType],
				minColor: typeToMinColor[gridType],
				value: generatedValue
			});
			this.addChild(this.geretatedProgress);
		}
		/** Проверка на вставку прогресса, когда нужно покормить милое животное. */
		if ([
			EGridType.PossibleChicken,
			EGridType.PossibleCow
		].includes(gridType)) {
			this.foodProgress = this.progressBarFactory.createProgressBar({
				x: x + foodOptions.marginLeft,
				y: y + foodOptions.marginTop,
				value: foodValue,
				minColor: 0xff0000,
				maxColor: 0x00ff00
			});
			this.addChild(this.foodProgress);
		}
	}

	/** Значение генерации. */
	private readonly generatedValue: number = 0;

	/** Значеине еды на ячейке. */
	private readonly foodValue: number = 0;

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

	@Inject('ProgressBarFactory')
	private readonly progressBarFactory: IProgressBarFactory;
}
