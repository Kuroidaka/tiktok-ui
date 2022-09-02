import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'
import { useEffect, useState } from 'react'
// import 'tippy.js/dist/tippy.css' // optional

import styles from './Header.module.scss'
import { img } from '~/asserts/img'
import { PopperWrapper } from '~/components/Popper'
import Accounts from '~/components/AccountItems'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'

const cx = classNames.bind(styles)
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: 'Tiếng Việt'
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: 'Feedback and help'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: 'Keyboard shortcuts'
  }

]

function Header() {
  // const[searchResult, setSearchResult] = useState([])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([123]);
  //   }, 0);
  // }, [] )

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={img.logo} alt="TikTok" className={cx('TikTok-logo')} />

        <Tippy
          // visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <Accounts />
                <Accounts />
                <Accounts />
                <Accounts />
                <Accounts />
                <Accounts />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <div className={cx('load')}>
              <FontAwesomeIcon icon={faSpinner} />
            </div>

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}>
          <Button df>Upload</Button>
          <Button primary>Login</Button>

            <Menu items={MENU_ITEMS}>
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>

            </Menu>
         
        </div>
      </div>
    </div>
  )
}

export default Header
