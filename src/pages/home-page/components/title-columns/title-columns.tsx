import { type FC } from 'react'
import styles from './index.module.scss'
import { useGetTitleQuery } from 'src/store/tasks/tasks.api'
import { useParams } from 'react-router-dom'

export const TitleColumns: FC = () => {
	const { boardId } = useParams()
	const { data: titleColumns } = useGetTitleQuery(boardId)

	return (
		<ul className={styles.titleColumns}>
			{titleColumns?.map((el) => (
				<li className='col-item' key={el}>
					{el}
				</li>
			))}
		</ul>
	)
}
