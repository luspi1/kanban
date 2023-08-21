export type TaskCard = {
	id: string
	title: string
	column: string
}
export type Track = {
	id: string
	title: string
	taskCards: TaskCard[]
}
