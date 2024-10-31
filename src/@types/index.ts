export type IconName = 'star' | 'sidebar' | 'gear' | 'noPin' | 'arrow'

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
