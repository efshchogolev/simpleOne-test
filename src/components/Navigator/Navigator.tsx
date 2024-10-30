import { Tab } from '@/@types'
import NavigatorTab from '../NavigatorTab/NavigatorTab'
import s from './Navigator.module.css'
import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'

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

const Navigator = () => {
  const [activeTab, setActiveTab] = useState<number>(1)

  const handleTabClick = (id: number) => {
    if (id === activeTab) {
      setActiveTab(0)
    } else {
      setActiveTab(id)
    }
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
      <Sidebar isOpen={activeTab !== 1} />
    </aside>
  )
}

export default Navigator
