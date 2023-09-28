import { type FC, useCallback } from 'react'

import styles from './index.module.scss'
import { type FileWithPreview } from 'src/types/files'
import { useDropzone } from 'react-dropzone'
import { FilePreview } from 'src/components/FilePreview/FilePreview'
import { uid } from 'react-uid'
import { Button } from 'src/UI/Button'
import { PhotoSvg } from 'src/UI/icons/photoSVG'
import { useAppSelector } from 'src/hooks/store'
import { getPhotos } from 'src/modules/task-form/store/task-form.selectors'
import { useActions } from 'src/hooks/actions/actions'

export const TaskDropzone: FC = () => {
	const { addPhotoFiles, removePhotoByPreview } = useActions()

	const currentPhotoFiles = useAppSelector(getPhotos)

	const onDrop = useCallback((acceptedFiles: File[]) => {
		addPhotoFiles(acceptedFiles)
	}, [])
	const { getRootProps, getInputProps } = useDropzone({ onDrop })

	const deletePreviewImg = (imgPreviewName: string) => {
		removePhotoByPreview(imgPreviewName)
	}

	return (
		<div className={styles.mainDropzone}>
			<ul className={styles.filesList}>
				{currentPhotoFiles?.map((f: FileWithPreview, index) => (
					<FilePreview
						key={uid(f, index)}
						imgSrc={f.preview}
						imgName={f.name}
						onDeleteImg={() => deletePreviewImg(f.preview)}
					/>
				))}
			</ul>
			<div className={styles.innerDropzone} {...getRootProps()}>
				<div className={styles.dropzoneField}>
					<PhotoSvg />
					<p>Перетащите изображение на это поле</p>
				</div>
				<div className={styles.dropzoneDownload}>
					<p>Или загрузите изображение с жесткого диска</p>
					<Button className={styles.dropzoneBtn} type='button'>
						Загрузить
					</Button>
				</div>

				<input {...getInputProps()} />
			</div>
		</div>
	)
}
