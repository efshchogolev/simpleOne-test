import Icon from '../Icon/Icon'
import s from './NavigationListItem.module.css'

const NavigationListItem = (props: { text: string }) => {
  const { text } = props

  return (
    <li className={s.item}>
      <button className={s.button}>
        <Icon width={16} height={16} name="arrow" />
        <span className={s.text}>{text}</span>
      </button>
    </li>
  )
}

export default NavigationListItem
