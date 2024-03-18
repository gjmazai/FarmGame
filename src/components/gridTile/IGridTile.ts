/**
 * Интерфейс описывающий плитку основного игрового поля.
 *
 * @author gjmazai
 */

import { type Sprite } from 'pixi.js';

import { type ITile } from '../tile';

export interface IGridTile extends ITile {
	/** Тип плитки на игровом поле. */
	readonly gridType: EGridType;
	/** Признак того, что ячейка является пустой. */
	readonly isFree: boolean;
	/** Признак того, что ячейка является заполненной. */
	readonly isOccupied: boolean;
	/** Признак того, что необходимо кого-то покормить на ячейке. */
	readonly isFeeding: boolean;

	/**
	 * Для смены текстуры на спрайте, необходимо,
	 * чтобы класс реализующий интерфейс содержал готовые спрайты.
	 */

	/** Спрайт пшеницы, которую можно посадить на клетке. */
	readonly cornBuildableSprite: Sprite;
	/** Спрайт курицы, которую можно вырастить на клетке. */
	readonly chickenBuildableSprite: Sprite;
	/** Спрайт коровы, которую можно вырастить на клетке. */
	readonly cowBuildableSprite: Sprite;

	/** Спрайт анимированной пшеницы, которую посадили на клетку. */
	readonly cornAnimatedSprite: Sprite;
	/** Спрайт анимированной курицы, которую посадили на клетку. */
	readonly chickenAnimatedSprite: Sprite;
	/** Спрайт анимированной коровы, которую посадили на клетку. */
	readonly cowAnimatedSprite: Sprite;

	/** Спрайт показывающий снижающийся прогресс питания. */
	readonly foodProgress?: Sprite;
	/** Спрайт показывающий повышающийся прогресс генрации ресурсов. */
	readonly geretatedProgress?: Sprite;
	/** Спрайт показывающий снижающийся прогресс жизни. */
	readonly deathProgress?: Sprite;

}

/** Список типов полей основного поля. */
export enum EGridType {
	Grass,
	PossibleCorn,
	PossibleChicken,
	PossibleCow,
	Corn,
	Chicken,
	Cow,
	PossibleFeedChicken,
	PossibleFeedCow
}
