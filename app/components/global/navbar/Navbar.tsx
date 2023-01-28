import { MenuList } from '@/components/ui'
import { menuData } from '@/components/ui/menu-list/Menu.data'
import { FC } from 'react'
import { BsTelegram } from 'react-icons/bs'
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'
import Link from 'next/link'
import styles from './Navbar.module.scss'

export const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.wrapp}>
          {/* Menu */}
          <MenuList className={styles.menu} data={menuData} />
          {/* Social */}
          <div className={styles.social}>
            <div className={styles.item}>
              <Link href="#">
                <IoLogoWhatsapp />
              </Link>
            </div>
            <div className={styles.item}>
              <Link href="#">
                <IoLogoInstagram />
              </Link>
            </div>
            <div className={styles.item}>
              <Link href="#">
                <IoLogoFacebook />
              </Link>
            </div>
            <div className={styles.item}>
              <Link href="#">
                <BsTelegram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
