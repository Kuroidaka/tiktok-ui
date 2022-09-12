import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import styles from './AccountItems.module.scss'
import { Link } from 'react-router-dom'
import Avatar from '~/components/Avatar'

const cx = classNames.bind(styles)

function Accounts({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Avatar alt="name" src={data.avatar} small />

      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
          )}
        </h4>

        <p className={cx('user-name')}>{data.nickname}</p>
      </div>
    </Link>
  )
}

Accounts.prototype = {
  data: PropTypes.object,
}

export default Accounts
