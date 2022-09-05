import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpFromBracket,
  faCircleXmark,
  faEllipsisVertical,
  faMagnifyingGlass,
  faSpinner,
  faGear,
  faCoins,
  faEarthAsia,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
// import { useEffect, useState } from 'react'
import 'tippy.js/dist/tippy.css' // optional

import styles from './Header.module.scss'
import { img } from '~/asserts/img'
import { PopperWrapper } from '~/components/Popper'
import Accounts from '~/components/AccountItems'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import {
  faCircleQuestion,
  faKeyboard,
  faUser,
} from '@fortawesome/free-regular-svg-icons'
import { InboxIcon, UploadIcon } from '~/components/Icons'
import Img from '~/components/Images'

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
  // const[searchResult, setSearchResult] = useState([])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([123]);
  //   }, 0);
  // }, [] )

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
        <img src={img.logo} alt="TikTok" className={cx('TikTok-logo')} />

        <HeadlessTippy
          // visible={searchResult.length > 0}

          interactive
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <Accounts src='https://vtv1.mediacdn.vn/thumb_w/650/2022/3/4/avatar-jake-neytiri-pandora-ocean-1646372078251163431014-crop-16463720830272075805905.jpg'/>
             
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
        </HeadlessTippy>

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
                  <InboxIcon width='3.2rem' height='3.2rem' />
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
                  alt='name'
                  src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/279685278_3209864065999719_4526217248550211805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IEcsxSSUv_0AX8DhOwE&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT8mcAXS8vbxKqke7ApIn9jU3doHriOf7U9sEY-szjhVlA&oe=6318BDAA"
                  fallBack='https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/279685278_3209864065999719_4526217248550211805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1CcemFrgoO8AX-PKYQc&_nc_ht=scontent.fsgn1-1.fna&oh=00_AT80v2X0izNoULZ8YNkaCgcCq46i6mowZ5HJO6tP1Ks6uA&oe=631AB7EA'
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
