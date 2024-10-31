import TextButton from '../TextButton/TextButton'
import s from './TaskEditComponent.module.css'
import cn from 'classnames'

const TaskEditComponent = () => {
  return (
    <section className={s.taskContainer}>
      <form action="" className={s.form}>
        <div className={s.subheader}>
          <div className={cn(s.subheaderContainer, s.subheaderContainer_left)}>
            <h2 className={s.subtitle}>Подзадача</h2>
            <TextButton text="Создать" />
          </div>
          <div className={cn(s.subheaderContainer, s.subheaderContainer_right)}>
            <TextButton text="Сохранить" type="primary" />
            <TextButton text="Сохранить и выйти" />
          </div>
        </div>
        <h1 className={s.title}>
          STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто
          некоторые поля остаются редактируемыми для агента если он Caller
        </h1>
      </form>
    </section>
  )
}

export default TaskEditComponent
