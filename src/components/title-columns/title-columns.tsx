import { type FC } from 'react'
import { type TitleColumn } from 'src/types/titleColumns'
import styles from './index.module.scss'

type TitleColumnsProps = {
	columns?: TitleColumn[]
}
export const TitleColumns: FC<TitleColumnsProps> = ({ columns }) => {
	if (!columns) {
		return <h3>Колонки не добавлены</h3>
	}

	return (
		<ul className={styles.columnsList}>
			{columns.map((el) => (
				<li key={el.id}>{el.title}</li>
			))}
		</ul>
	)
}
