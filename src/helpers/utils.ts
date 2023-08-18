import { type SelOption } from 'src/types/select'

export const getValue = (value: string, options: SelOption[]) => {
	return value ? options.find((option) => option.value === value) : ''
}
