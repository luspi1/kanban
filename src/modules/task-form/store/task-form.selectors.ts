import { NameSpace } from 'src/helpers/consts'
import { type State } from 'src/types/state'

export const getCurrentTaskId = (state: State) => state[NameSpace.TaskForm].currentTaskId
export const getActivityTaskForm = (state: State) => state[NameSpace.TaskForm].activityForm
export const getCheckboxes = (state: State) => state[NameSpace.TaskForm].checkboxes
export const getPhotos = (state: State) => state[NameSpace.TaskForm].photos
export const getActivityArchiveModal = (state: State) =>
	state[NameSpace.TaskForm].isActiveArchiveModal
