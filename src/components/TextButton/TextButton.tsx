import { ITextButtonProps } from '@/@types'
import s from './TextButton.module.css'
import cn from 'classnames'

const TextButton = (props: ITextButtonProps) => {
  const { text, type = 'default', onClick } = props

  return (
    <button
      type="button"
      className={cn(s.textButton, type === 'primary' && s.textButton_primary)}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default TextButton
