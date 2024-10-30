import { Tab } from '@/@types'
import NavigatorTab from '../NavigatorTab/NavigatorTab'
import s from './Navigator.module.css'
import { useState } from 'react'

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

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<number>(1)

  const handleTabClick = (id: number) => {
    setActiveTab(id)
  }

  return (
    <aside className={s.navigator}>
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
    </aside>
  )
}

export default Sidebar
