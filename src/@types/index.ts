export type IconProps = {
  name: 'star' | 'sidebar'
  className?: string
  width: number | string
  height: number | string
}

export type InputIcon = 'search' | 'filter'

export interface IInputProps {
  icon: InputIcon
  header?: boolean
}

export type TabIconName = 'star' | 'sidebar'

export interface Tab {
  iconName: TabIconName
  id: number
}
export interface INavigatorTabProps extends Tab {
  onClick: (id: number) => void
  activeTab: number
}
