/// <reference types="vite-plugin-svgr/client" />
import Sidebar from '@/images/Sidebar.svg?react'
import Star from '@/images/Star.svg?react'
import { IconProps } from '@/@types'
import Gear from '@/images/Gear.svg?react'
import NoPin from '@/images/NoPin.svg?react'
import Arrow from '@/images/Arrow.svg?react'

const Icon = (props: IconProps) => {
  switch (props.name) {
    case 'sidebar':
      return <Sidebar {...props} />
    case 'star':
      return <Star {...props} />
    case 'gear':
      return <Gear {...props} />
    case 'noPin':
      return <NoPin {...props} />
    case 'arrow':
      return <Arrow {...props} />
    default:
      return null
  }
}

export default Icon
