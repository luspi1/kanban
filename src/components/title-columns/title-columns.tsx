import { type FC } from 'react'
import { type TitleColumn } from 'src/types/titleColumns'
import styles from './index.module.scss'
import { toast } from 'react-toastify'

type TitleColumnsProps = {
	columns?: TitleColumn[]
	resError: boolean
}
export const TitleColumns: FC<TitleColumnsProps> = ({ columns, resError }) => {
	if (resError) {
		toast.error('Ошибка сервера')
	}

	return !columns?.length ? (
		<h3>Колонки не добавлены</h3>
	) : (
		<ul className={styles.columnsList}>
			{columns?.map((el) => (
				<li key={el.id} style={{ width: `${100 / columns?.length}%` }}>
					{el.title}
				</li>
			))}
		</ul>
	)
}
