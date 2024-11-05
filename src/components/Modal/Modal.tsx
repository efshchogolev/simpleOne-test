import { ReactNode, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import s from './Modal.module.css'

interface IModalProps {
  children: ReactNode
  onCloseModal: () => void
}

const Modal = (props: IModalProps) => {
  const { children, onCloseModal } = props
  const modalRoot = document.getElementById('root')

  const escFunction = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onCloseModal()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [escFunction])

  if (!modalRoot) return null

  return createPortal(
    <div className={s.overlay} onClick={onCloseModal}>
      <div
        className={s.modalContainer}
        onClick={(evt) => {
          evt.stopPropagation()
        }}
      >
        {' '}
        {children}
      </div>
    </div>,
    modalRoot,
  )
}

export default Modal
