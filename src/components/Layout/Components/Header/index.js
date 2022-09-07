import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpFromBracket,
  faEllipsisVertical,
  faGear,
  faCoins,
  faEarthAsia,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

import Tippy from '@tippyjs/react'
// import { useEffect, useState } from 'react'
import 'tippy.js/dist/tippy.css' // optional

import styles from './Header.module.scss'
import { img } from '~/asserts/img'

import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import {
  faCircleQuestion,
  faKeyboard,
  faUser,
} from '@fortawesome/free-regular-svg-icons'
import { InboxIcon, UploadIcon } from '~/components/Icons'
import Img from '~/components/Images'
import SearchBar from '~/components/SeachBar'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const currentUser = true
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'langugae',
          code: 'en',
          title: 'English',
        },
        {
          type: 'langugae',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: 'Feedback and help',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: 'Keyboard shortcuts',
  },
]

const user_menu = [
  {
    icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
    title: 'View profile',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
    title: 'Get coins',
  },
  {
    icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
    title: 'Settings',
  },

  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>,
    title: 'Log out',
    topBorder: true,
  },
]

function Header() {
  // handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        //handle
        break
      default:
    }
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>

        <Link to={'/'} className={cx('TikTok-logo')} >
          <img src={img.logo} alt="TikTok" />
        </Link>

        {/* Search */}
        <SearchBar />
        {/* action */}

        <div className={cx('action')}>
          <Button leftIcon={<FontAwesomeIcon icon={faArrowUpFromBracket} />} df>
            Upload
          </Button>

          {currentUser ? (
            <>
              {/* MESSAGE BTN */}
              <Tippy content={'Message'}>
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>

              {/* INBOX BTN */}
              <Tippy content={'Inbox'}>
                <button className={cx('action-btn')}>
                  <InboxIcon width="3.2rem" height="3.2rem" />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary>Login</Button>
            </>
          )}

          <Menu
            items={currentUser ? user_menu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <div className={cx('user-login')}>
                <Img
                  alt="name"
                  src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/279685278_3209864065999719_4526217248550211805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IEcsxSSUv_0AX8DhOwE&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT8mcAXS8vbxKqke7ApIn9jU3doHriOf7U9sEY-szjhVlA&oe=6318BDAA"
                  fallBack="https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/279685278_3209864065999719_4526217248550211805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1CcemFrgoO8AX-PKYQc&_nc_ht=scontent.fsgn1-1.fna&oh=00_AT80v2X0izNoULZ8YNkaCgcCq46i6mowZ5HJO6tP1Ks6uA&oe=631AB7EA"
                  className={cx('user-login-img')}
                />
              </div>
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Header
