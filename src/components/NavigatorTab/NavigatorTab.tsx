import Icon from '../Icon/Icon'
import { INavigatorTabProps } from '@/@types'
import s from './NavigatorTab.module.css'
import cn from 'classnames'

const NavigatorTab = (props: INavigatorTabProps) => {
  const { iconName, onClick, id, activeTab } = props

  return (
    <button
      className={s.navigatorTab}
      onClick={() => {
        onClick(id)
      }}
    >
      <Icon
        name={iconName}
        width={24}
        height={24}
        className={cn(activeTab === id && s.activeIcon)}
      />
    </button>
  )
}

export default NavigatorTab
