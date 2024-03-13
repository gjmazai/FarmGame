/**
 * Модуль реализует функцию генерации идентификатора.
 *
 * @author gjmazai
 */

export function getId (): number {
	return uniqId++;
}

let uniqId = 0;
