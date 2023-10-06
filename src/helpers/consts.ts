export enum AppRoute {
	Kanban = '/boards/:boardId',
	Boards = '/',
	Archive = '/boards/:boardId/archive',
}

export enum TaskPriorityMap {
	high = 'высший',
	tall = 'высокий',
	medium = 'средний',
	common = 'обычный',
	lower = 'на потом',
}

export enum ItemType {
	TASK = 'Task',
}

export enum NameSpace {
	Tasks = 'TASKS',
	TaskForm = 'TASK_FORM',
}

export const POLLING_INTERVAL = 10000

export const BASE_URL = 'http://localhost:4001/api/v1'
