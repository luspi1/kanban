import { type FC } from 'react'

type MainCheckboxProps = {
	title: string
}
export const MainCheckbox: FC<MainCheckboxProps> = ({ title }) => {
	return (
		<div>
			<label>
				<input type='checkbox' />
				<span>{title}</span>
			</label>
		</div>
	)
}
