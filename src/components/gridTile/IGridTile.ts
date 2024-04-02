/**
 * Интерфейс описывающий плитку основного игрового поля.
 *
 * @author gjmazai
 */

import { type AnimatedSprite, type Sprite } from 'pixi.js';

import { type ITile } from '../tile';
import { type IProgressBar } from '../progressBar';
import { type IStrokeRect } from '../strokeRect';

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
	readonly cornAnimatedSprite: AnimatedSprite;
	/** Спрайт анимированной курицы, которую посадили на клетку. */
	readonly chickenAnimatedSprite: AnimatedSprite;
	/** Спрайт анимированной коровы, которую посадили на клетку. */
	readonly cowAnimatedSprite: AnimatedSprite;

	/** Спрайт показывающий снижающийся прогресс питания. */
	readonly foodProgress?: IProgressBar;
	/** Спрайт показывающий повышающийся прогресс генрации ресурсов. */
	readonly geretatedProgress?: IProgressBar;
	/** Спрайт показывающий снижающийся прогресс жизни. */
	readonly deathProgress?: IProgressBar;
	/** Графика прогресса. */
	readonly rectGraphics: IStrokeRect;
	/** Прогресс бар. */
	readonly progressBar: IProgressBar;

	/** Метод устанавливает тип плитки. */
	setType(type: EGridType): void;
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
