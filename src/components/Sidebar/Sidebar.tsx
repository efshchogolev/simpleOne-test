import { ISidebarProps } from '@/@types'
import Button from '../Button/Button'
import NavigationListItem from '../NavigationListItem/NavigationListItem'
import SearchInput from '../SearchInput/SearchInput'
import s from './Sidebar.module.css'
import cn from 'classnames'

const LIST_ITEMS = [
  {
    text: 'Моя работа',
    id: 1,
  },
  {
    text: 'Структура портала',
    id: 2,
  },
  {
    text: 'Личное расписание',
    id: 3,
  },
  {
    text: 'Отсутствие на рабочем месте',
    id: 4,
  },
  {
    text: 'Портфель услуг',
    id: 5,
  },
  {
    text: 'Дашборды',
    id: 6,
  },
  {
    text: 'Доски задач',
    id: 7,
  },
  {
    text: 'Обращения',
    id: 8,
  },
  {
    text: 'События',
    id: 9,
  },
  {
    text: 'Инциденты',
    id: 10,
  },
  {
    text: 'Проблемы',
    id: 11,
  },
  {
    text: 'Настройка каталогов',
    id: 12,
  },
  {
    text: 'Запросы на обслуживание',
    id: 13,
  },
  {
    text: 'Запросы на изменение',
    id: 14,
  },
  {
    text: 'Управление конфигурациями',
    id: 15,
  },
  {
    text: 'Управление уровнем услуг',
    id: 16,
  },
  {
    text: 'Настройка соответствий',
    id: 17,
  },
]

const Sidebar = (props: ISidebarProps) => {
  const { isOpen } = props
  return (
    <div className={cn(s.sidebar, isOpen && s.sidebar_invisible)}>
      <div className={s.filterContainer}>
        <SearchInput button="filter" placeholder="Поиск по меню" />
        <Button iconName="noPin" />
      </div>
      <nav className={s.navigation}>
        <ul className={s.list}>
          {LIST_ITEMS.map((item) => (
            <NavigationListItem text={item.text} key={item.id} />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
