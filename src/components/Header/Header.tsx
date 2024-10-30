import logo from '../../images/Logo.svg'
import s from './Header.module.css'
import avatar from '../../images/Avatar.png'
import Button from '../Button/Button'
import SearchInput from '../SearchInput/SearchInput'

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="Логотип" className={s.logo} />
      <div className={s.headerContainer}>
        <SearchInput icon="search" type="header" placeholder="Поиск" />
        <div className={s.profileContainer}>
          <img src={avatar} alt="Аватарка" className={s.avatar} />
          <span className={s.fullname}>Максим Галактионов</span>
        </div>
      </div>
      <Button iconName="gear" />
    </header>
  )
}

export default Header
