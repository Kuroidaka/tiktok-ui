import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './Menu.module.scss'
import { NavLink } from 'react-router-dom'

const cx = classNames.bind(styles)

function MenuItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink to={to} className={(nav) => cx('item', { active: nav.isActive })}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('activeIcon')}>{activeIcon}</span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  )
}

MenuItem.prototype = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
}

export default MenuItem
