import { type SelOption } from 'src/types/select'

export const PriorityOptions: SelOption[] = [
	{ value: 'common', label: 'Обычный приоритет' },
	{ value: 'medium', label: 'Средний приоритет' },
	{ value: 'tall', label: 'Высокий приоритет' },
	{ value: 'high', label: 'Высший приоритет' },
	{ value: 'lower', label: 'Оставить на потом' },
]
export const DifficultOptions: SelOption[] = [
	{ value: 'lower', label: 'Низкая сложность' },
	{ value: 'common', label: 'Обычная сложность' },
	{ value: 'high', label: 'Высокая сложность' },
]

export const CategoryOptions: SelOption[] = [
	{ value: 'testing', label: 'ПО: Тестирование' },
	{ value: 'design', label: 'ПО: Дизайн' },
	{ value: 'programming', label: 'ПО: Кодинг' },
	{ value: 'layout', label: 'ПО: Верстка' },
]
