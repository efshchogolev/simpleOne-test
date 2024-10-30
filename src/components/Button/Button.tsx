import { IButtonProps } from '@/@types'
import s from './Button.module.css'
import cn from 'classnames'
import Icon from '../Icon/Icon'

const Button = (props: IButtonProps) => {
  const { iconName } = props

  return (
    <button className={cn(s.button, s.button_gear)}>
      <Icon height={20} width={20} name={iconName} />
    </button>
  )
}

export default Button
