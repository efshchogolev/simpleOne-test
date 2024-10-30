import logo from '../../images/Logo.svg'
import s from './Header.module.css'
import avatar from '../../images/Avatar.png'
import Button from '../Button/Button'
import Input from '../Input/Input'

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="Логотип" className={s.logo} />
      <div className={s.headerContainer}>
        <Input icon="search" header />
        <div className={s.profileContainer}>
          <img src={avatar} alt="Аватарка" className={s.avatar} />
          <span className={s.fullname}>Максим Галактионов</span>
        </div>
      </div>
      <Button />
    </header>
  )
}

export default Header
