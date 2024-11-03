export type IconName =
  | 'star'
  | 'sidebar'
  | 'gear'
  | 'noPin'
  | 'arrow'
  | 'search'
  | 'calendar'
  | 'add'

export type IconProps = {
  name: IconName
  className?: string
  width: number | string
  height: number | string
}

export type InputIcon = 'search' | 'filter'

export interface IInputProps {
  icon: InputIcon
  placeholder?: string
  wide?: boolean
}

export interface Tab {
  iconName: IconName
  id: number
}
export interface INavigatorTabProps extends Tab {
  onClick: (id: number) => void
  activeTab: number
}

export interface IButtonProps {
  iconName: IconName
  iconClassName?: string
}

export interface ISidebarProps {
  isOpen: boolean
}

export interface ITextButtonProps {
  text: string
  type?: 'default' | 'primary'
}

export interface INavigatorProps {
  activeTab: number
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
}

export interface IInput {
  required?: boolean
  label: string
}

export interface ISimpleInputProps extends IInput {
  search?: boolean
  value?: string
  calendar?: boolean
}

export interface ISelectInputProps extends IInput {
  selectedOptions: { text: string }[]
}

export interface IOptionProps {
  text: string
  deleteButtonActive?: boolean
}

export interface IOption extends IOptionProps {
  id: number
}
