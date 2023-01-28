import { FC, PropsWithChildren } from 'react'
import { MetaComponent } from '@/components'
import { MetaProps } from '@/components/global/meta/meta.props'
import { openSans } from '@/utils/fontSetting'
import styles from './Layout.module.scss'
import classNames from 'classnames'
import { Navbar } from '@/components'

const Layout: FC<PropsWithChildren<MetaProps>> = ({ description, title, children, meta, noIndex }) => {
  return (
    <>
      <MetaComponent title={title} description={description} meta={meta} noIndex={noIndex} />
      <div className={classNames(styles.layout, openSans.className)}>
        <Navbar />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </>
  ) 
}
export default Layout