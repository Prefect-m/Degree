import Link from 'next/link'
import { FC } from 'react'
import { MenuItemProps } from './Menu-item.props'

export const MenuItem: FC<MenuItemProps> = ({ link, name }) => {
  return (
    <li>
      <Link href={link}>{name}</Link>
    </li>
  )
}
