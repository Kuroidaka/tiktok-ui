import classNames from "classnames/bind";

import UserItem from "./UserItem";
import styles from './UserList.module.scss'


const cx= classNames.bind(styles)

function UserList() {
    return ( 
        <div className={cx('list')}> 
            <UserItem></UserItem>
        </div>
     );
}

export default UserList;