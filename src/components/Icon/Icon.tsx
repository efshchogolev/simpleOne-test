/// <reference types="vite-plugin-svgr/client" />
import Sidebar from '@/images/Sidebar.svg?react'
import Star from '@/images/Star.svg?react'
import { IconProps } from '@/@types'

const Icon = (props: IconProps) => {
  switch (props.name) {
    case 'sidebar': {
      return <Sidebar {...props} />
    }
    case 'star': {
      return <Star {...props} />
    }
    default:
      return null
  }
}

export default Icon
