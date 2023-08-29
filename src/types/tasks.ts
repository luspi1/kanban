export type TaskStatus = 'high' | 'common' | 'lower' | 'medium'

export type TaskCard = {
	id: string
	title: string
	column: number
	status: TaskStatus
}

export type KanbanColumn = {
	id: string
	title: string
	tasks: TaskCard[]
}
