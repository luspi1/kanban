import { type FC, useCallback, useEffect, useState } from 'react'

import styles from './index.module.scss'
import { type FileWithPreview } from 'src/types/files'
import { useDropzone } from 'react-dropzone'
import { FilePreview } from 'src/components/FilePreview/FilePreview'
import { uid } from 'react-uid'

export const TaskDropzone: FC = () => {
	const [dzFiles, setDzFiles] = useState<FileWithPreview[]>([])

	const onDrop = useCallback((acceptedFiles: File[]) => {
		if (acceptedFiles?.length) {
			setDzFiles((prevFiles) => [
				...prevFiles,
				...acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })),
			])
		}
	}, [])
	const { getRootProps, getInputProps } = useDropzone({ onDrop })

	const deletePreviewImg = (imgArr: FileWithPreview[], imgName: string) => {
		const newFiles = imgArr.filter((el) => el.name !== imgName)
		setDzFiles(newFiles)
	}

	useEffect(
		() => () => {
			dzFiles.forEach((file) => URL.revokeObjectURL(file.preview))
		},
		[dzFiles]
	)
	return (
		<div className={styles.mainDropzone}>
			<h4>Перетащите еще одно изображение на это поле</h4>
			<div className={styles.innerDropzone} {...getRootProps()}>
				<button className={styles.dropzoneBtn} type='button'>
					Загрузить
				</button>
				<input {...getInputProps()} />
			</div>

			<ul className={styles.filesList}>
				{dzFiles?.map((f: FileWithPreview) => (
					<FilePreview
						key={uid(f)}
						imgSrc={f.preview}
						imgName={f.name}
						onDeleteImg={() => deletePreviewImg(dzFiles, f.name)}
					/>
				))}
			</ul>
		</div>
	)
}
