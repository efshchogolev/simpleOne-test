import { ISimpleInputProps } from '@/@types'
import s from './SimpleInput.module.css'
import Button from '../Button/Button'

const SimpleInput = (props: ISimpleInputProps) => {
  const { required, label, search, value, calendar } = props
  return (
    <div className={s.container}>
      <label htmlFor="" className={s.label}>
        {required && <span className={s.required}>*</span>}
        {label}
      </label>
      <div className={s.inputContainer}>
        <input className={s.input} type="text" value={value} />
        {search && <Button iconName="search" iconClassName={s.searchButton} />}
        {calendar && (
          <Button iconName="calendar" iconClassName={s.searchButton} />
        )}
      </div>
    </div>
  )
}

export default SimpleInput
