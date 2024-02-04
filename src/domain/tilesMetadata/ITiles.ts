/**
 * Модуль экспортирует интерфейс плитки (тайла).
 * 
 * @author gjmazai
 */


export interface ITiles {
	/** Тип плитки. */
	readonly type: ETiletipe;
	
	/** Идентификатор в массиве метаданных. */
	readonly id: number;

	/** Максимально возможное число одинаковых плиток. */
	readonly maxCount: number;

	/** Позиция относительно начального положения. */
	readonly tilePosition: ETilePosition;

	/** Список местностей по краям плитки. */
	readonly tileEndsList: [ EPlace, EPlace, EPlace, EPlace ];

	/** Список возможных позиций выставления мини-чела, относительно начального положения. */
	readonly manPositionList: EManPosition[];

	/** Позиция в которую установление мини-чел. */
	readonly manPosition?: EManPosition;

	/** Флаг того, что плитка уже установлена. */
	isInstalled: boolean;

	/**
	 * Метод устанавливает новую позицию тайла.
	 * @param duration - направление в которое может крутиться тайл.
	 */
	setTilePosition: ( duration: EDuration ) => void;

	/**
	 * Метод устанавливает позицию мини-чела.
	 * @param manPosition - позиция мини-чела.
	 */
	setManPosition: ( manPosition: EManPosition ) => void;
}

/**
 * Набор позиций плитки относительно начального положения.
 * Начальное положение = top
 */
export enum ETilePosition {
	top,
	right,
	bottom,
	left
}

/**
 * Набор позицций который может принимать мини-чел.
 * 
 */
export enum EManPosition {


}

/** Набор направлений в которое можно крутить плитку.  */
export enum EDuration {
	right,
	left
}

/** Набор местностей. */
export enum EPlace {
	/** Дорога. */
	r = 'road',
	/** Замок. */
	c = 'castle',
	/** Поле. */
	f = 'field'
}

/** Типы плиток. */
export enum ETiletipe {
	/** Центр замка. */
	CastleCenter,
	/** Центр замка с входом. */
	CastleCenterEntry,
	/** Центр замка со стороной. */
	CastleCenterSide,
	/** Замок с крайними сторонами. */
	CastleSidesEdge,
	/** Замок с крайними сторонами с дорогой. */
	CastleSidesEdgeRoad,
	/** Замок по сторонам, по центру дорога. */
	CastleSidesRoad,
	/** Замок в виде трубы. */
	CastleTube,
	/** Замок в виде трубы со входами. */
	CastletubeEntries,
	/** Одна стена замка. */
	CastleWall,
	/** Стена замка и дорога с изгибом влево. */
	CastleWallCurveLeft,
	/** Стена замка и дорога с изгибом вправо. */
	CastleWallCurveRight,
	/** Стена замка со входом. */
	CastleWallEntry,
	/** Стена замка со входом слева. */
	CastleWallEntryLeft,
	/** Стена замка со входом справа. */
	CastleWallEntryRight,
	/** Стена замка с перекрестком. */
	CastleWallJunction,
	/** Стена замка с дорогой. Считается начальной плиткой. */
	CastleWallRoad,
	/** Монастырь. */
	Monastery,
	/** Монастырь с перекрестком. */
	MonasteryJunction,
	/** Монастырь с дорогой. */
	MonasteryRoad,
	/** Дорога. */
	Road,
	/** Дорога в 4 стороны.  */
	RoadCrossLarge,
	/** Дорога в 3 стороны. */
	RoadCrossSmall,
	/** Дорога с изгибом. */
	RoadCurve,
	/** Дорога с концом. */
	RoadEnd,
	/** Дорога с большим перекрестком. */
	RoadJunctionLarge,
	/** Дорога с малым перекретском. */
	RoadJunctionSmall
}