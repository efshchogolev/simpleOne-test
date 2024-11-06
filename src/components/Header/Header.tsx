import logo from '../../images/Logo.svg'
import s from './Header.module.css'
import avatar from '../../images/Avatar.png'
import Button from '../Button/Button'
import SearchInput from '../SearchInput/SearchInput'
import { IHeaderProps } from '@/@types'

const Header = (props: IHeaderProps) => {
  const { setActiveTab, activeTab } = props

  const isActiveTab = activeTab === 1

  const handleToggleMenu = () => {
    if (!isActiveTab) {
      setActiveTab(1)
    } else {
      setActiveTab(0)
    }
  }

  return (
    <header className={s.header}>
      <img src={logo} alt="Логотип" className={s.logo} />
      <Button
        iconName="sidebar"
        borderles
        className={s.menuButton}
        onClick={handleToggleMenu}
        iconClassName={isActiveTab ? s.activeIcon : ''}
      />
      <div className={s.headerContainer}>
        <div className={s.optionsContainer}>
          <SearchInput
            button="search"
            wide
            placeholder="Поиск"
            className={s.search}
          />
          <div className={s.profileContainer}>
            <img src={avatar} alt="Аватарка" className={s.avatar} />
            <span className={s.fullname}>Максим Галактионов</span>
          </div>
        </div>
        <Button iconName="gear" />
      </div>
    </header>
  )
}

export default Header
