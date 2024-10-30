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
  type: 'header' | 'filter'
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
