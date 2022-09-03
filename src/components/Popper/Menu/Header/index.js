import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from './MenuHeader.module.scss'

const cx = classNames.bind(styles);

function MenuHeader({onClick, title}) {
  return ( 
    <div className={cx('menu-header')}>
        <span onClick={onClick} className={cx('icon')}>
        <FontAwesomeIcon icon={faChevronLeft}/>
        </span>
        <span className={cx('menu-header-title')}>{title}</span>
    </div>
   );
}

export default MenuHeader;