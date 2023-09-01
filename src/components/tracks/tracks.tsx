import { type TrackItem } from 'src/types/tasks'
import { type FC } from 'react'
import { TaskColumns } from 'src/components/task-columns/task-columns'

import styles from './index.module.scss'
import { TrackArrowSvg } from 'src/UI/icons/trackArrowSVG'

type TracksProps = {
	tracks?: TrackItem[]
}
export const Tracks: FC<TracksProps> = ({ tracks }) => {
	return (
		<div>
			{tracks?.map((trackItem) => (
				<div className={styles.tracksList} key={trackItem.id}>
					<div className={styles.tracksTitle}>
						<TrackArrowSvg />
						<h4>{trackItem.title}</h4>
						<span className={styles.tracksLine}></span>
					</div>
					<TaskColumns columns={trackItem.columns} />
				</div>
			))}
		</div>
	)
}
