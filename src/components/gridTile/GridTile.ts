/**
 * Компонент основной плитки приложения.
 *
 * @author gjmazai
 */

import { type AnimatedSprite, type Sprite } from 'pixi.js';
import { Tile, type TTileConstructorParams } from '../tile';
import { EGridType, type IGridTile } from './IGridTile';
import { type IStrokeRect } from '../strokeRect';
import { type IProgressBar } from '../progressBar';
import { Inject } from 'typedi';
import { IGridTileFactory, type TGridtileFactoryMethodParams } from './GridTileFactory';

export class GridTile extends Tile implements IGridTile {
	gridType: EGridType;
	isFree: boolean;
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

	}

	/** Метод установки плитки. */
	private setup (): void {
		const x = this.posX + Math.round(this.x);
		const y = this.posY + Math.round(this.y);

		this.gridTilesType.forEach(type => {
			const params: TGridtileFactoryMethodParams = {
				type,
				height: this.height,
				width: this.width,
				marginLeft: x,
				marginTop: y,
				...
			};
			const sprite = this.gridTileFactory.createGridtileSprite(params);
			this.addChild(sprite);
		});
	}

	// TODO здесь заменить на мапу соотношения типа и опций. 
	/** Кортеж с типами поля. */
	private readonly gridTilesType: readonly EGridType[] = [
		EGridType.Grass,
		EGridType.Corn,
		EGridType.Chicken,
		EGridType.Cow,
		EGridType.PossibleChicken,
		EGridType.PossibleCorn,
		EGridType.PossibleCow
	];

	@Inject('GridTileFactory')
	private readonly gridTileFactory: IGridTileFactory;
}
