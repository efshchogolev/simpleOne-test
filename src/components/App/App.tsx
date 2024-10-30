import Header from '../Header/Header'
import Navigator from '../Navigator/Navigator'
import s from './App.module.css'

function App() {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.content}>
        <Navigator />
      </div>
    </div>
  )
}

export default App
