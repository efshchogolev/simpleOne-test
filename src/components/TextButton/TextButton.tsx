import { ITextButtonProps } from '@/@types'
import s from './TextButton.module.css'
import cn from 'classnames'

const TextButton = (props: ITextButtonProps) => {
  const { text, type = 'default' } = props

  return (
    <button
      type="button"
      className={cn(s.textButton, type === 'primary' && s.textButton_primary)}
    >
      {text}
    </button>
  )
}

export default TextButton
