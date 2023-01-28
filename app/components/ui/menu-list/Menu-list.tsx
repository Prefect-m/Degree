import { FC } from 'react'
import styles from './Menu-list.module.scss'
import classNames from 'classnames'
import { MenuListProps } from './Menu-list.props'
import { MenuItem } from './menu-item/Menu-item'

export const MenuList: FC<MenuListProps> = ({ className, data }) => {
  return (
    <ul className={classNames(className, styles.menulist)}>
      {data.map(item => (
        <MenuItem {...item} key={item.link} />
      ))}
    </ul>
  )
}
