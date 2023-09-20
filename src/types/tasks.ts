export type TaskStatus = 'high' | 'common' | 'lower' | 'medium'
export type TaskNameInputs = 'desc' | 'title'

export type TaskCard = {
	id: string
	title: TaskNameInputs
	status: TaskStatus
	executor: string
	desc: TaskNameInputs
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

export type Member = {
	id: string
	name: string
	position: string
}

export type BoardId = {
	boardId?: string
}

export type Board = {
	id: string
	title: string
	img: string
	date: string
	members: Member[]
}
