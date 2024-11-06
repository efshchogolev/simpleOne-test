import { IButtonProps } from '@/@types'
import s from './Button.module.css'
import cn from 'classnames'
import Icon from '../Icon/Icon'

const Button = (props: IButtonProps) => {
  const { iconName, iconClassName, borderles, className, onClick } = props

  return (
    <button
      className={cn(s.button, borderles && s.button_borderless, className)}
      type="button"
      onClick={onClick}
    >
      <Icon height={20} width={20} name={iconName} className={iconClassName} />
    </button>
  )
}

export default Button
