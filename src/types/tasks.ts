import { type CheckboxItem } from 'src/types/checkbox'
import { type FileWithPreview } from 'src/types/files'

export type TaskPriority = 'high' | 'common' | 'lower' | 'medium' | 'tall'
export type TaskDifficult = 'lower' | 'common' | 'high'
export type TaskCategory = 'testing' | 'design' | 'programming' | 'layout'
export type TaskNameInputs =
	| 'desc'
	| 'title'
	| 'priority'
	| 'difficult'
	| 'category'
	| 'checkboxes'
	| 'photos'

export type TaskCard = {
	id: string
	title: string
	startDate: Date
	priority: TaskPriority
	difficult: TaskDifficult
	category: TaskCategory
	executor: string
	desc: string
	checkboxes: CheckboxItem[] | []
	photos: FileWithPreview[] | []
	parentTask: ParentTask | null
	dependencyTask: ParentTask[] | []
	comments: CommentItem[] | []
}

export type CommentItem = {
	id: string
	time: Date
	user: User
	text: string
}

export type User = {
	id: string
	name: string
}

export type ParentTask = Pick<TaskCard, 'id' | 'title'>

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
