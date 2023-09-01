export type TaskStatus = 'high' | 'common' | 'lower' | 'medium'

export type TaskCard = {
	id: string
	title: string
	status: TaskStatus
}

export type KanbanColumn = {
	id: string
	title: string
	tasks: TaskCard[]
}

export type TrackItem = {
	id: string
	title: string
	columns: KanbanColumn[]
}

export type Board = {
	id: string
	title: string
}
