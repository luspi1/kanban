export type TaskStatus = 'high' | 'common' | 'lower' | 'medium'

export type TaskCard = {
	id: string
	title: string
	column: number
	status: TaskStatus
}
export type Track = {
	id: string
	title: string
	taskCards: TaskCard[]
}
