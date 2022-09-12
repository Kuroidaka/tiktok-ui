import classNames from 'classnames/bind'


import styles from './SideBar.module.scss'
import config from '~/config'
import { Menu, MenuItem } from './Menu'
import * as icons from '~/components/Icons'
import { AccountList } from './AccountList'

const cx = classNames.bind(styles)

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title={'For You'}
          to={config.routesPath.home}
          icon={<icons.HomeIcon />}
          activeIcon={<icons.ActiveHomeIcon />}
        />

        <MenuItem
          title={'Following'}
          to={config.routesPath.following}
          icon={<icons.GroupUserIcon />}
          activeIcon={<icons.ActiveGroupUserIcon />}
        />

        <MenuItem
          title={'LIVE'}
          to={config.routesPath.live}
          icon={<icons.CamIcon />}
          activeIcon={<icons.ActiveCamIcon />}
        />

        <AccountList />
        <AccountList />
        <AccountList />
        <AccountList />

      </Menu>
    </aside>
  )
}

export default Sidebar
