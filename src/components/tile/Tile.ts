/**
 * Модуль экспортирует универсальный компонент плитки с нажатием.
 *
 * @author gjmazai
 */

import { type ColorSource, Container, Graphics } from 'pixi.js';

import { getId } from '../../utils';

import { type TColor, type ITile, ECursor } from './ITile';

export class Tile extends Container implements ITile {
	/** Конфигурация цветов по дефолту. */
	static COLOR: TColor = {
		regular: 0xffffff,
		active: 0x0d21a1,
		hover: 0x515BA1
	};

	readonly cursor: ECursor = ECursor.pointer;

	graphics: Graphics;
	id: number;
	showSelected: boolean;
	showHover: boolean;
	posX: number;
	posY: number;
	cellWidth: number;
	cellHeight: number;
	isSelected: boolean;

	constructor ({
		showSelected,
		showHover,
		posX,
		posY,
		cellWidth,
		cellHeight,
		isSelected,
		onClick
	}: TTileConstructorParams) {
		super();
		this.graphics = new Graphics();
		this.addChild(this.graphics);
		this.eventMode = 'static';
		this.id = getId();

		this.showSelected = showSelected;
		this.showHover = showHover;
		this.posX = posX;
		this.posY = posY;
		this.cellWidth = cellWidth;
		this.cellHeight = cellHeight;
		this.isSelected = isSelected;
		this.onClick = onClick;

		this.position = { x: posX, y: posY };

		this.on('mouseover', this.handleMouseOver);
		this.on('mouseout', this.handleMouseOut);
		this.on('pointertap', this.handleClick);
	}

	handleClick (): void {
		this.toggle();
		if (typeof this.onClick === 'function') {
			this.onClick(this);
		}
	}

	handleMouseOver (): void {
		if (this.isShowButNotSelected) {
			this.fillColor(Tile.COLOR.hover);
		}
	}

	handleMouseOut (): void {
		if (this.isShowButNotSelected) {
			this.fillColor(Tile.COLOR.regular);
		}
	}

	/** Метод закрашивает тайл. */
	protected fillColor (color: ColorSource): void {
		this.graphics.clear();
		// logFarmTile(color);
		this.graphics.beginFill(color);
		// logFarmTile(this.posX, this.posY, this.cellWidth, this.cellHeight);
		this.graphics.drawRect(this.posX, this.posY, this.cellWidth, this.cellHeight);
		this.graphics.endFill();
	}

	/** Метод выбирает тайл. */
	protected select (): void {
		if (!this.isSelected) {
			this.isSelected = true;
		}
		if (this.showSelected && this.isSelected) {
			this.fillColor(Tile.COLOR.active);
		}
	}

	/** Метод снимает выбор с тайла. */
	protected deselect (): void {
		if (this.isSelected) {
			this.isSelected = false;
		}
		if (this.showSelected && !this.isSelected) {
			this.fillColor(Tile.COLOR.regular);
		}
	}

	/** Метод изменяет выбор тайла. */
	protected toggle (): void {
		if (this.isSelected) {
			this.deselect();
		} else {
			this.select();
		}
	}

	/** Пользовательский метод для обработки клика. Передается в конструктор. */
	protected onClick?<T extends ITile>(tile: T): void;

	/** Флаг того, что тайл отображается наведенным, но не выбранным. */
	protected get isShowButNotSelected (): boolean {
		return this.showHover && !this.showSelected && !this.isSelected;
	}
}

/** Тип для конструктора плитки. */
export type TTileConstructorParams = {
	showSelected: boolean;
	showHover: boolean;
	posX: number;
	posY: number;
	cellWidth: number;
	cellHeight: number;
	isSelected: boolean;
	onClick: <T extends ITile>(tile: T) => void;
};
