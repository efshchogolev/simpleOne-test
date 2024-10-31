import { INavigatorProps, Tab } from '@/@types'
import NavigatorTab from '../NavigatorTab/NavigatorTab'
import s from './Navigator.module.css'
import Sidebar from '../Sidebar/Sidebar'
import cn from 'classnames'

const TABS: Tab[] = [
  {
    iconName: 'sidebar',
    id: 1,
  },
  {
    iconName: 'star',
    id: 2,
  },
]

const Navigator = (props: INavigatorProps) => {
  const { activeTab, setActiveTab } = props

  const handleTabClick = (id: number) => {
    if (id === activeTab) {
      setActiveTab(0)
    } else {
      setActiveTab(id)
    }
  }

  return (
    <aside className={cn(s.navigator, !!activeTab && s.navigator_open)}>
      <div className={s.navigatorTabs}>
        {TABS.map((tab) => (
          <NavigatorTab
            {...tab}
            onClick={handleTabClick}
            key={tab.id}
            activeTab={activeTab}
          />
        ))}
      </div>
      <Sidebar isOpen={activeTab !== 1} />
    </aside>
  )
}

export default Navigator
