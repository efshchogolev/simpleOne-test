import { IInputProps, InputIcon } from '@/@types'
import s from './SearchInput.module.css'
import cn from 'classnames'

const getInputIcon = (icon: InputIcon) => {
  switch (icon) {
    case 'search':
      return s.inputContainer_search
    case 'filter':
      return s.inputContainer_filter
  }
}

const SearchInput = (props: IInputProps) => {
  const { icon, type, placeholder } = props

  return (
    <div
      className={cn(
        s.inputContainer,
        getInputIcon(icon),
        s[`s.inputContainer_${type}`],
      )}
    >
      <input type="text" className={s.input} placeholder={placeholder} />
    </div>
  )
}

export default SearchInput
