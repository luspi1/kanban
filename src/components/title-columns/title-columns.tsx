import { type FC } from 'react'
import styles from './index.module.scss'

type TitleColumnsProps = {
	columns?: string[]
}
export const TitleColumns: FC<TitleColumnsProps> = ({ columns }) => {
	return !columns?.length ? (
		<h3>Колонки не добавлены</h3>
	) : (
		<ul className={styles.titleColumns}>
			{columns?.map((el) => (
				<li className='col-item' key={el}>
					{el}
				</li>
			))}
		</ul>
	)
}
