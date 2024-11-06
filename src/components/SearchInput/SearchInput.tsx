import { InputButton, ISearchProps } from '@/@types'
import s from './SearchInput.module.css'
import cn from 'classnames'
import Icon from '../Icon/Icon'

const SearchInput = (props: ISearchProps) => {
  const { button, wide, placeholder, className } = props

  const getButtonIcon = (button: InputButton) => {
    switch (button) {
      case 'search':
        return <Icon height={16} width={16} name="search" />
      case 'filter':
        return <Icon height={16} width={16} name="filter" />
    }
  }

  return (
    <div
      className={cn(
        s.inputContainer,
        wide && s.inputContainer_header,
        className,
      )}
    >
      <input type="text" className={s.input} placeholder={placeholder} />
      <button className={s.button}> {getButtonIcon(button)}</button>
    </div>
  )
}

export default SearchInput
