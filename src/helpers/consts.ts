export enum AppRoute {
	Kanban = '/boards/:boardId',
	Boards = '/',
}

export enum TaskStatusMap {
	high = 'высший',
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
