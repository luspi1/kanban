import { type FC, type MouseEventHandler } from 'react'
import { DeleteSVG } from 'src/UI/icons/deleteSVG'
import styles from './index.module.scss'

type FilePreviewProps = {
	imgSrc: string
	imgName: string
	onDeleteImg: MouseEventHandler<HTMLButtonElement>
}
export const FilePreview: FC<FilePreviewProps> = ({ imgSrc, imgName, onDeleteImg }) => {
	return (
		<li className={styles.filePreview}>
			<button type='button' onClick={onDeleteImg}>
				<DeleteSVG />
			</button>
			<img src={imgSrc} alt={imgName} />
		</li>
	)
}
