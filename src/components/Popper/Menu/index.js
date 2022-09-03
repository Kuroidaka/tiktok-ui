
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { useState } from 'react'

import Button from '~/components/Button'
import { default as PopperWrapper } from '~/components/Popper/Wrapper'
import MenuHeader from './Header'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

const dfFunction = () => {}

function Menu({ children, items = [], onChange = dfFunction  }) {
  const [history, setHistory] = useState([{ data: items }])
  const current = history[history.length - 1]

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children
      const classes = cx('menu-item-btn', {
          topBorder : item.topBorder
      })


      return (
        <div
          key={index}
          className={cx('menu-item')}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children])
            } else {
              onChange(item)
            }
          }}
        >
          <Button leftIcon={item.icon} className={classes}>
            {item.title}
          </Button>
        </div>
      )
    })
  }

  return (
    <Tippy
    // visible
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      onHide={() => { setHistory(pre => pre.slice(0, 1)) }}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>

            {/*  */}
            {history.length > 1 && (
              <MenuHeader
                onClick={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1))
                }}
                title="Language"
              ></MenuHeader>
            )}

                {/*  */}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu
