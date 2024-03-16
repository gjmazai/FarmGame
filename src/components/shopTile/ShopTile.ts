/**
 * Модуль реализует класс плитки для магазина.
 *
 * @author gjmazai
 */

import { BitmapText } from 'pixi.js';

import { type TTileConstructorParams, Tile, type TIconOption, type TTextOptions } from '../tile';

import { type EShopType, type IShopTile } from './IShopTile';
import { TYPE_TO_COST } from './constants';
import { Inject } from 'typedi';
import { IShopSpriteFactory, type TIconParam } from './SpriteFactory';

export class ShopTile extends Tile implements IShopTile {
	shopType: EShopType;

	get cost (): number {
		return TYPE_TO_COST.get(this.shopType) ?? 5;
	}

	readonly iconOption: TIconOption = {
		width: 16,
		height: 24,
		marginLeft: -25,
		marginTop: -12
	};

	readonly moneyOptions: TIconOption = {
		width: 10,
		height: 15,
		marginLeft: 10,
		marginTop: -7
	};

	readonly textOptions: TTextOptions = {
		fontSize: 10,
		marginLeft: 25,
		marginTop: -5
	};

	constructor (params: TShopTileParams) {
		super(params);
		this.shopType = params.shopType;
		this.setup();
	}

	private setup (): void {
		const resourseSprite = this.spriteFactory.createResourseIcon(this.buildParams(true), this.shopType);
		const moneySprite = this.spriteFactory.createMoneyIcon(this.buildParams(false));
		const text = new BitmapText(String(this.cost), {
			fontName: 'comic 30',
			fontSize: this.textOptions.fontSize
		});

		this.addAllChild(resourseSprite, moneySprite, text);
	}

	/**
	 * Метод собирает параметры геометрии для иконок.
	 * @param isResourse - признак сборки параметровт для ресурса.
	 * @returns геометрические параметры.
	 */
	private buildParams (isResourse: boolean): TIconParam {
		const xCenter = this.posX + Math.round(this.width / 2);
		const yCenter = this.posY + Math.round(this.height / 2);
		return {
			height: isResourse ? this.iconOption.height : this.moneyOptions.height,
			width: isResourse ? this.iconOption.width : this.moneyOptions.width,
			posX: xCenter + (isResourse ? this.iconOption.marginLeft : this.moneyOptions.marginLeft),
			posY: yCenter + (isResourse ? this.iconOption.marginTop : this.moneyOptions.marginTop)
		};
	}

	/** Метод добавляет все дочерние элементы  */
	private addAllChild (...args: any[]): void {
		args.forEach(child => this.addChild(child));
	}

	@Inject('SpriteFactory')
	private readonly spriteFactory: IShopSpriteFactory;
}

export type TShopTileParams = TTileConstructorParams & Pick<IShopTile, 'shopType' | 'id'>;
