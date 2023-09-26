import { type CheckboxItem } from 'src/types/checkbox'

export type TaskPriority = 'high' | 'common' | 'lower' | 'medium' | 'tall'
export type TaskDifficult = 'lower' | 'common' | 'high'
export type TaskCategory = 'testing' | 'design' | 'programming' | 'layout'
export type TaskNameInputs = 'desc' | 'title' | 'priority' | 'difficult' | 'category' | 'checkboxes'

export type TaskCard = {
	id: string
	title: string
	priority: TaskPriority
	difficult: TaskDifficult
	category: TaskCategory
	executor: string
	desc: string
	checkboxes: CheckboxItem[] | []
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
