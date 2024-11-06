import { IOption } from '@/@types'
import SelectInput from '../SelectInput/SelectInput'
import SimpleInput from '../SimpleInput/SimpleInput'
import TextButton from '../TextButton/TextButton'
import s from './TaskEditComponent.module.css'
import cn from 'classnames'
import useStickyState from '@/hooks/useStickyState'
import { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'

const THEME_VALUE =
  'На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller'
const STATUS_VALUE = 'Новая'
const PRODUCT_VALUE = 'Platform'
const NOTES_VALUE = 'Проверить ACL id=172830402014193655'
const PRIORITY_VALUE = 'Средний'
const CREATE_DATE_VALUE = '22.10.2024'

const RESPONSIBLE_VALUE: IOption[] = [
  { text: 'Константин Константинопольский', id: 1 },
]
const GROUPS_VALUE: IOption[] = [{ text: 'Support Group', id: 1 }]
const OPENER_VALUE: IOption[] = [{ text: 'Андрей Пивоваров', id: 1 }]
const CREATOR_VALUE: IOption[] = [{ text: 'Андрей Пивоваров', id: 1 }]
const CONCORDANT_VALUE: IOption[] = [
  { text: 'Андрей Пивоваров', id: 1 },
  { text: 'Максим Галактионов', id: 2 },
  { text: 'Алла Лин', id: 3 },
  { text: 'Константин Константинопольский Константинович', id: 4 },
  { text: 'Игорь Иванченко', id: 5 },
  { text: 'Юлия Эйчаровна', id: 6 },
  { text: 'Артём Подпрыгайко-Саппортов', id: 7 },
  { text: 'Илья Вазнец', id: 8 },
  { text: 'Михаил Вортенов', id: 9 },
  { text: 'Наталья Нашевна', id: 10 },
  { text: 'Евгения Итамовна', id: 11 },
  { text: 'Алиса Киральчук', id: 12 },
]

const bodyElement = document.body

const TaskEditComponent = () => {
  const { ref, isSticky } = useStickyState('-115px 0px 0px 0px')
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if (bodyElement) {
      bodyElement.style.overflow = modalOpen ? 'hidden' : ''
    }
  }, [modalOpen])

  const handleCloseModal = () => {
    setModalOpen(false)
  }
  const handleOpenModal = () => {
    setModalOpen(true)
  }

  return (
    <>
      <section className={s.taskContainer}>
        <form action="" className={s.form}>
          <div
            className={cn(s.subheader, isSticky && s.subheader_border_visible)}
          >
            <div
              className={cn(s.subheaderContainer, s.subheaderContainer_left)}
            >
              <h2 className={s.subtitle}>Подзадача</h2>
              <h2 className={cn(s.subtitle, s.subtitle_tablet)}>Подзадачи</h2>
              <TextButton
                text="Создать"
                onClick={handleOpenModal}
                className={s.createButton}
              />
            </div>
            <div
              className={cn(s.subheaderContainer, s.subheaderContainer_right)}
            >
              <TextButton text="Сохранить" type="primary" />
              <TextButton text="Сохранить и выйти" />
            </div>
            <Button iconName="more" onClick={handleOpenModal} />
          </div>
          <div className={s.formWrapper}>
            <h1 className={s.title} ref={ref}>
              STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто
              некоторые поля остаются редактируемыми для агента если он Caller
            </h1>
            <div className={s.formGrid}>
              <SimpleInput label="Тема" required value={THEME_VALUE} />
              <SimpleInput label="Статус" value={STATUS_VALUE} />
              <SimpleInput label="Описание" value={STATUS_VALUE} />
              <SimpleInput label="Продукт" value={PRODUCT_VALUE} search />
              <SimpleInput
                label="Рабочие заметки"
                required
                value={NOTES_VALUE}
              />
              <SimpleInput label="Приоритет" value={PRIORITY_VALUE} />
              <SelectInput
                label="Ответственный"
                selectedOptions={RESPONSIBLE_VALUE}
              />
              <SelectInput label="Группа" selectedOptions={GROUPS_VALUE} />
              <SimpleInput label="Комментарии" wide />
              <SelectInput
                label="Согласующие"
                selectedOptions={CONCORDANT_VALUE}
                wide
              />
              <SimpleInput label="Когда открыто" calendar />
              <SimpleInput
                label="Когда создано"
                value={CREATE_DATE_VALUE}
                calendar
              />
              <SelectInput label="Кем открыто" selectedOptions={OPENER_VALUE} />
              <SelectInput
                label="Кем создано"
                selectedOptions={CREATOR_VALUE}
              />
            </div>
          </div>
        </form>
      </section>
      {modalOpen && (
        <Modal onCloseModal={handleCloseModal}>
          <form action="" className={s.form}>
            <div className={s.modalSubheader}>
              <div
                className={cn(s.subheaderContainer, s.subheaderContainer_left)}
              >
                <h2 className={cn(s.subtitle, s.subtitle_tablet)}>Подзадача</h2>
              </div>
              <div
                className={cn(s.subheaderContainer, s.subheaderContainer_right)}
              >
                <TextButton text="Сохранить" type="primary" />
                <TextButton text="Отменить" onClick={handleCloseModal} />
              </div>
              <Button iconName="close" onClick={handleCloseModal} />
            </div>
            <div className={cn(s.formWrapper, s.formWrapper_modal)}>
              <h2 className={cn(s.title, s.title_modal)}>Новая запись</h2>
              <div className={s.formFlex}>
                <SimpleInput label="Тема" required value={THEME_VALUE} />
                <SimpleInput label="Статус" value={STATUS_VALUE} />
                <SimpleInput label="Описание" value={STATUS_VALUE} />
                <SimpleInput label="Продукт" value={PRODUCT_VALUE} search />
                <SimpleInput
                  label="Рабочие заметки"
                  required
                  value={NOTES_VALUE}
                />
                <SimpleInput label="Приоритет" value={PRIORITY_VALUE} />
                <SelectInput
                  label="Ответственный"
                  selectedOptions={RESPONSIBLE_VALUE}
                />
                <SelectInput label="Группа" selectedOptions={GROUPS_VALUE} />
                <SimpleInput label="Комментарии" wide />
                <SelectInput
                  label="Согласующие"
                  selectedOptions={CONCORDANT_VALUE}
                  wide
                />
                <SimpleInput label="Когда открыто" calendar />
                <SimpleInput
                  label="Когда создано"
                  value={CREATE_DATE_VALUE}
                  calendar
                />
                <SelectInput
                  label="Кем открыто"
                  selectedOptions={OPENER_VALUE}
                />
                <SelectInput
                  label="Кем создано"
                  selectedOptions={CREATOR_VALUE}
                />
                <TextButton text="Сохранить" type="primary" />
                <TextButton text="Отменить" onClick={handleCloseModal} />
              </div>
            </div>
          </form>
        </Modal>
      )}
    </>
  )
}

export default TaskEditComponent
