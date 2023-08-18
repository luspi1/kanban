import { type FC, type MouseEventHandler } from 'react'
import { DeleteImgSvg } from 'src/UI/icons/DeleteImgSVG'
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
				<DeleteImgSvg />
			</button>
			<img src={imgSrc} alt={imgName} />
		</li>
	)
}
