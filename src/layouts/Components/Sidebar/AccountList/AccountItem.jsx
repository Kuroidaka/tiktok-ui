import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'

import styles from './AccountList.module.scss'
import Avatar from '~/components/Avatar'
import ViewPreview from '~/layouts/Components/Sidebar/ViewPreview'

const cx = classNames.bind(styles)

function AccountItem({ src }) {
  const renderPreview = () => <ViewPreview></ViewPreview>

  return (
    <Tippy
      interactive
      placement="bottom"
      render={renderPreview}
      delay={[1000, 100]}
    >
      <Link to={`/@`} className={cx('wrapper')}>
        <Avatar small src={src} className={cx('avatar')} />
        <div className={cx('info')}>
          <div className={cx('name')}>
            <h4>tramHuynh_</h4>
            <span className={cx('icon')}>
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
          </div>

          <p className={cx('label')}>Tram.huynh123</p>
        </div>
      </Link>
    </Tippy>
  )
}

export default AccountItem
