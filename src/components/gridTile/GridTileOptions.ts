/**
 * Модуль описывает опции каждого тайла для основного грида.
 *
 * @author gjmazai
 */

/** Тип описывающий параметры плиток. */
export type TGridTileOption = {
	width: number;
	height: number;
	marginLeft: number;
	marginTop: number;
	animationSpeed?: number;
	generateFactor?: number;
	eatFactor?: number;
	color?: number;
};

/**
 * Опции для травы.
 * @constant
 */
export const grassOptions: TGridTileOption = {
	height: 40,
	width: 40,
	marginLeft: -20,
	marginTop: -20
};

/**
 * Опции для курицы.
 * @constant
 */
export const chickenOptions: TGridTileOption = {
	height: 20,
	width: 20,
	marginLeft: -10,
	marginTop: -10,
	animationSpeed: 0.05,
	generateFactor: 1 / 100 / 1000,
	eatFactor: 1 / 30 / 1000
};

/**
 * Опции для коровы.
 * @constant
 */
export const cowOptions: TGridTileOption = {
	height: 36,
	width: 36,
	marginLeft: -18,
	marginTop: -18,
	animationSpeed: 0.05,
	generateFactor: 1 / 20 / 1000,
	eatFactor: 1 / 20 / 1000
};

/**
 * Опции для еды.
 * @constant
 */
export const foodOptions: TGridTileOption = {
	height: 30,
	width: 3,
	marginLeft: -15,
	marginTop: -15
};

/**
 * Опции для прямоугольника со штрихом.
 * @constant
 */
export const reactOptions: TGridTileOption = {
	height: 30,
	width: 20,
	marginLeft: -15,
	marginTop: -15,
	color: 0xeec643
};

/**
 * Опции для прямоугольника со штрихом.
 * @constant
 */
export const deathOptions: TGridTileOption = {
	height: 30,
	width: 5,
	marginLeft: -5,
	marginTop: -5,
	color: 0xeec60e35
};
