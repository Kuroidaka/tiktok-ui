import classNames from 'classnames/bind'
import styles from './ViewPreview.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { PopperWrapper } from '~/components/Popper'
import Avatar from '~/components/Avatar'
import Button from '~/components/Button'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function ViewPreview() {
  return (
    <PopperWrapper className={cx('wrapper')}>
      <header className={cx('header')}>
        <Avatar
          large
          src={
            'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/279685278_3209864065999719_4526217248550211805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lyXxeUGay7UAX_1lK7e&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT9eCktrENkMgJHpSprRDYXyg8F_CeG0caNV9LKRjMuQ0Q&oe=6320A6AA'
          }
        />
        <Button primary className={cx('btn')}>
          Follow
        </Button>
      </header>

      <div className={cx('info')}>
        <div className={cx('name')}>
          <h4>tramHuynh_</h4>
          <span className={cx('icon')}>
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
        </div>

        <p className={cx('label')}>Tram.huynh123</p>

        <div className={cx('Analyze')}>
          <span className={cx('count')}>5M</span>
          <span className={cx('title')}>Followers</span>
          <span className={cx('count')}>4.7M</span>
          <span className={cx('title')}>Likes</span>
        </div>
      </div>
    </PopperWrapper>
  )
}

export default ViewPreview
