import cn from 'classnames'
import React, { type FC, type HTMLAttributes, useCallback, useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import { type Control, Controller } from 'react-hook-form'
import { FilePreview } from 'src/UI/FilePreview/FilePreview'
import styles from './index.module.scss'

type FileInputProps = {
	name: string
	className?: string
	control: Control
}

type ControlledFileProps = FileInputProps & HTMLAttributes<HTMLInputElement>

interface FileWithPreview extends File {
	preview: string
}

export const FileInput: FC<ControlledFileProps> = (props) => {
	const [dzFiles, setDzFiles] = useState<FileWithPreview[]>([])

	const onDrop = useCallback((acceptedFiles: File[]) => {
		if (acceptedFiles?.length) {
			setDzFiles((prevFiles) => [
				...prevFiles,
				...acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) })),
			])
		}
	}, [])

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
		<Controller
			control={props.control}
			name={props.name}
			defaultValue={[]}
			render={({ field: { onChange, onBlur, value } }) => (
				<div className={cn(styles.mainDropzone)}>
					<h4>Перетяните изображение в это поле или</h4>
					<Dropzone onDrop={onDrop}>
						{({ getRootProps, getInputProps }) => (
							<div className={styles.innerDropzone} {...getRootProps()}>
								<button className={styles.dropzoneBtn} type='button'>
									Загрузите файл
								</button>
								<input
									{...getInputProps()}
									type='text'
									name={props.name}
									onBlur={onBlur}
									value={value}
								/>
							</div>
						)}
					</Dropzone>

					<ul className={styles.filesList}>
						{dzFiles.map((f: FileWithPreview, i: number) => (
							<FilePreview
								key={i}
								imgSrc={f.preview}
								imgName={f.name}
								onDeleteImg={() => deletePreviewImg(dzFiles, f.name)}
							/>
						))}
					</ul>
				</div>
			)}
		/>
	)
}
