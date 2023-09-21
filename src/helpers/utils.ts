import { type TaskCard } from 'src/types/tasks'
import { type DraggableLocation } from 'react-beautiful-dnd'
import { type SelOption } from 'src/types/select'

export const reorder = (list: TaskCard[], startIndex: number, endIndex: number) => {
	const result = Array.from(list)
	const [removed] = result.splice(startIndex, 1)
	result.splice(endIndex, 0, removed)

	return result
}
export const move = (
	source: TaskCard[],
	destination: TaskCard[],
	droppableSource: DraggableLocation,
	droppableDestination: DraggableLocation
) => {
	const sourceClone = Array.from(source)
	const destClone = Array.from(destination)
	const [removed] = sourceClone.splice(+droppableSource.index, 1)

	destClone.splice(droppableDestination.index, 0, removed)
	const result: any = []
	result[+droppableSource.droppableId] = sourceClone
	result[+droppableDestination.droppableId] = destClone

	return result
}

export const getRandomColor = () => {
	const letters = '0123456789ABCDEF'
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}

export const getValue = (value: string, options: SelOption[]) => {
	return value ? options.find((option) => option.value === value) : ''
}
