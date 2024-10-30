import s from './Input.module.css'
import cn from 'classnames'

type InputIcon = 'search' | 'filter'

interface IInputProps {
  icon: InputIcon
  header?: boolean
}

const getInputIcon = (icon: InputIcon) => {
  switch (icon) {
    case 'search':
      return s.inputContainer_search
    case 'filter':
      return s.inputContainer_filter
  }
}

const Input = (props: IInputProps) => {
  const { icon, header } = props

  return (
    <div
      className={cn(
        s.inputContainer,
        getInputIcon(icon),
        header && s.inputContainer_header,
      )}
    >
      <input type="text" className={s.input} placeholder="Поиск" />
    </div>
  )
}

export default Input
