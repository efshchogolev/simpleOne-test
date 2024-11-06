import TaskEditComponent from '../TaskEditComponent/TaskEditComponent'
import Header from '../Header/Header'
import Navigator from '../Navigator/Navigator'
import s from './App.module.css'
import { useState } from 'react'
import cn from 'classnames'

function App() {
  const [activeTab, setActiveTab] = useState<number>(1)

  return (
    <div className={s.app}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
      <div className={s.content}>
        <Navigator activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className={cn(s.main, !activeTab && s.main_menu_closed)}>
          <TaskEditComponent />
        </main>
      </div>
    </div>
  )
}

export default App
