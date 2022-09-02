import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import Button from '~/components/Button'

import { default as PopperWrapper } from '~/components/Popper/Wrapper'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <div key={index} className={cx('menu-item')}>
          <Button leftIcon={item.icon}>{item.title}</Button>
        </div>
      )
    })
  }

  return (
    <Tippy
      //   visible
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu
