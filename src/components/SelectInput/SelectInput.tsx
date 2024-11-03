import { IOptionProps, ISelectInputProps } from '@/@types'
import s from './SelectInput.module.css'
import Button from '../Button/Button'
import cn from 'classnames'

const Option = (props: IOptionProps) => {
  const { text, deleteButtonActive } = props
  return (
    <div className={s.option}>
      <span className={s.optionText}>{text}</span>
      {deleteButtonActive && <button className={s.delete} />}
    </div>
  )
}

const SelectInput = (props: ISelectInputProps) => {
  const { required, label, selectedOptions, wide } = props
  return (
    <div className={cn(s.container, wide && s.container_wide)}>
      <label htmlFor="" className={s.label}>
        {required && <span className={s.required}>*</span>}
        {label}
      </label>
      <div className={s.inputContainer}>
        {/* <input className={s.input} type="text" value={value} /> */}
        <div className={s.selectField}>
          {selectedOptions.map((option) => (
            <Option
              key={option.id}
              text={option.text}
              deleteButtonActive={selectedOptions.length > 1}
            />
          ))}
          <button className={s.deleteAll} />
        </div>
        <Button iconName="add" iconClassName={s.searchButton} />
        <Button iconName="search" iconClassName={s.searchButton} />
      </div>
    </div>
  )
}

export default SelectInput
