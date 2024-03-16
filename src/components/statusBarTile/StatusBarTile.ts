/**
 * Класс статус бара.
 *
 * @author gjmazai
 */

import { Sprite, type Texture, BitmapText } from 'pixi.js';

import { Tile, type TTileConstructorParams, type TTextOptions, type TIconOption } from '../tile';

import { type EStatusType, type IStatusBarTile } from './IStatusBarTile';

export class StatusBarTile extends Tile implements IStatusBarTile {
	statusType: EStatusType;
	value: number;
	iconTextureResource: Texture;

	readonly iconOption: TIconOption = {
		width: 16,
		height: 24,
		marginLeft: -25,
		marginTop: -12
	};

	readonly textOptions: TTextOptions = {
		fontSize: 20,
		marginLeft: 0,
		marginTop: -10
	};

	constructor (params: TStatusBarTileParams) {
		super(params);
		this.statusType = params.statusType;
		this.value = params.value;
		this.setup(params);
	}

	add (value: number): void {
		this.updateValue(this.value + value);
	}

	sub (value: number): void {
		this.updateValue(this.value - value);
	}

	updateValue (newValue: number): void {
		this.value = newValue;
		this.text.text = String(this.value);
	}

	/** Текст в тайле. */
	private text: BitmapText;

	/** Метод делает установку зачений. */
	private setup ({ iconTextureResource }: TStatusBarTileParams): void {
		const xCenterPos = this.posX + Math.round(this.width / 2);
		const yCenterPos = this.posY + Math.round(this.height / 2);

		/** Установка текстуры на тайл. */
		const texture = new Sprite(iconTextureResource);
		texture.width = this.iconOption.width;
		texture.height = this.iconOption.height;
		texture.position.x = this.iconOption.marginLeft + xCenterPos;
		texture.position.y = this.iconOption.marginTop + yCenterPos;
		this.addChild(texture);

		/** Установка текста на тайл. */
		const text = new BitmapText(String(this.value), {
			fontName: 'comic 40',
			fontSize: this.textOptions.fontSize
		});
		text.x = this.textOptions.marginLeft + xCenterPos;
		text.y = this.textOptions.marginTop + yCenterPos;
		this.addChild(text);
		this.text = text;
	}
}

export type TStatusBarTileParams = TTileConstructorParams & Pick<IStatusBarTile, 'statusType' | 'value' | 'iconTextureResource' | 'id'>;
