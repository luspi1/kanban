import { type FC, type MouseEventHandler } from 'react'
import { DeleteImgSVG } from 'src/UI/icons/deleteImgSVG'
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
				<DeleteImgSVG />
			</button>
			<img src={imgSrc} alt={imgName} />
		</li>
	)
}
