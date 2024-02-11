/**
 * Модуль экспортирует интерфейс плитки (тайла).
 * 
 * @author gjmazai
 */


export interface ITiles {
	/** Тип плитки. */
	readonly type: ETileTipe;

	/** Идентификатор в массиве метаданных. */
	readonly id: number;

	/** Максимально возможное число одинаковых плиток. */
	readonly maxCount: number;

	/** Поворот относительно начального положения. Начальное положение = top @see ETileTurn. */
	readonly tileTurn: ETileTurn;

	readonly tilePosition: TTilePosition;

	/**
	 * Список местностей по краям плитки.
	 * Исчисление начинается с верхней грани и идет по часовой стрелке, как у padding.
	 */
	readonly tileEndsList: [ EPlace, EPlace, EPlace, EPlace ];

	/** Список возможных позиций выставления мини-чела, относительно начального положения. */
	readonly manPositionList: EManPosition[];

	/** Позиция в которую установление мини-чел. */
	readonly manPosition?: EManPosition;

	/** Флаг того, что плитка уже установлена. */
	isInstalled: boolean;

	/**
	 * Метод устанавливает новую позицию для тайла.
	 * @param position - позиция по осям в координатной сетке.
	 */
	setTilePosition( position: TTilePosition ): void;

	/**
	 * Метод устанавливает новое направление для тайла.
	 * @param turn - поворот в которое может крутиться тайл.
	 */
	setTileTurn( turn: EDuration ): void;

	/**
	 * Метод устанавливает позицию мини-чела.
	 * @param manPosition - позиция мини-чела.
	 */
	setManPosition( manPosition: EManPosition ): void;
}

/** Тип описывающий позицию тайла. Две цифры: первая позиция по оси абцисс, вторая соответсвенно по оси ординат. */
export type TTilePosition = [ number, number ];

/** Набор поворотов плитки. */
export enum ETileTurn {
	top,
	right,
	bottom,
	left
}

/**
 * Набор позицций который может принимать мини-чел.
 * //TODO заполнить...
 */
export enum EManPosition {}

/** Набор направлений в которое можно крутить плитку.  */
export enum EDuration {
	right,
	left
}

/** Набор местностей. */
export enum EPlace {
	/** Дорога. */
	road = 'road',
	/** Замок. */
	castle = 'castle',
	/** Поле. */
	field = 'field'
}

/** Типы плиток. */
export enum ETileTipe {
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