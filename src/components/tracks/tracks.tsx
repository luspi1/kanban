import { type FC } from 'react'
import { type Track } from 'src/types/tracks'
import { toast } from 'react-toastify'
import styles from './index.module.scss'
import { TrackArrowSvg } from 'src/UI/icons/trackArrowSVG'
import { TasksRow } from 'src/components/tasks-row/tasks-row'

type TracksProps = {
	tracks?: Track[]
	resError: boolean
	colAmount?: number
}
export const Tracks: FC<TracksProps> = ({ tracks, resError, colAmount }) => {
	if (resError) {
		toast.error('Ошибка сервера')
	}
	return !tracks?.length ? (
		<h3>Треки не добавлены</h3>
	) : (
		<div className={styles.tracksList}>
			{tracks?.map((el) => (
				<div className={styles.tracksItem} key={el.id}>
					<div className={styles.tracksTitle}>
						<TrackArrowSvg />
						<h4>{el.title}</h4>
						<span className={styles.tracksLine}></span>
					</div>
					<TasksRow tasks={el.taskCards} colAmount={colAmount ?? 0} />
				</div>
			))}
		</div>
	)
}
