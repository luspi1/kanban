import { type FC } from 'react'
import styles from './index.module.scss'
import { type KanbanColumn } from 'src/types/tasks'

type TitleColumnsProps = {
	columns?: KanbanColumn[]
}
export const TitleColumns: FC<TitleColumnsProps> = ({ columns }) => {
	return !columns?.length ? (
		<h3>Колонки не добавлены</h3>
	) : (
		<ul className={styles.columnsList}>
			{columns?.map((el) => (
				<li key={el.id}>{el.title}</li>
			))}
		</ul>
	)
}
