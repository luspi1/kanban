import { type Dispatch, type FC, type PropsWithChildren, type SetStateAction } from 'react'
import styles from './index.module.scss'
import cn from 'classnames'

type ModalProps = PropsWithChildren<{
	active: boolean
	className?: string
	setActive?: Dispatch<SetStateAction<boolean>>
}>

export const Modal: FC<ModalProps> = ({ active, setActive, children, className }) => {
	return (
		<div
			className={cn(styles.modal, { [styles.active]: active })}
			onClick={() => (setActive ? setActive(false) : null)}
		>
			<div className={cn(styles.modalContent, className)} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
