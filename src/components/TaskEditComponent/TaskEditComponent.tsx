import { IOption } from '@/@types'
import SelectInput from '../SelectInput/SelectInput'
import SimpleInput from '../SimpleInput/SimpleInput'
import TextButton from '../TextButton/TextButton'
import s from './TaskEditComponent.module.css'
import cn from 'classnames'

const THEME_VALUE =
  'На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller'
const STATUS_VALUE = 'Новая'
const PRODUCT_VALUE = 'Platform'
const NOTES_VALUE = 'Проверить ACL id=172830402014193655'
const PRIORITY_VALUE = 'Средний'
const CREATE_DATE_VALUE = '22.10.2024'

const RESPONSIBLE_VALUE: IOption[] = [
  { text: 'Константин Константинопольский', id: 1 },
  { text: 'Константин Константинопольский', id: 1 },
  { text: 'Константин Константинопольский', id: 1 },
  { text: 'Константин Константинопольский', id: 1 },
  { text: 'Константин Константинопольский', id: 1 },
]

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
        <div className={s.formGrid}>
          <SimpleInput label="Тема" required value={THEME_VALUE} />
          <SimpleInput label="Статус" value={STATUS_VALUE} />
          <SimpleInput label="Описание" value={STATUS_VALUE} />
          <SimpleInput label="Продукт" value={PRODUCT_VALUE} search />
          <SimpleInput label="Рабочие заметки" required value={NOTES_VALUE} />
          <SimpleInput label="Приоритет" value={PRIORITY_VALUE} />
          <SimpleInput label="Когда открыто" calendar />
          <SimpleInput
            label="Когда создано"
            value={CREATE_DATE_VALUE}
            calendar
          />
          <SelectInput
            label="Ответственный"
            selectedOptions={RESPONSIBLE_VALUE}
          />
        </div>
      </form>
    </section>
  )
}

export default TaskEditComponent
