import { type State } from 'src/types/state'
import { NameSpace } from 'src/helpers/consts'

export const getLocaleTracks = (state: State) => state[NameSpace.Tasks].localeTracks
