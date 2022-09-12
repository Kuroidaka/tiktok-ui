import classNames from "classnames/bind";
import styles from './AccountList.module.scss'

import AccountItem from "./AccountItem";

const cx = classNames.bind(styles)

function AccountList() {
    return ( 
    <div>
        <header className={cx('header')} >Suggested accounts</header>
        <AccountItem src={'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/279685278_3209864065999719_4526217248550211805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lyXxeUGay7UAX_1lK7e&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT9eCktrENkMgJHpSprRDYXyg8F_CeG0caNV9LKRjMuQ0Q&oe=6320A6AA'}/>
        <header className={cx('header')} >Suggested accounts</header>
        <AccountItem src={'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/279685278_3209864065999719_4526217248550211805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lyXxeUGay7UAX_1lK7e&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT9eCktrENkMgJHpSprRDYXyg8F_CeG0caNV9LKRjMuQ0Q&oe=6320A6AA'}/>
        <header className={cx('header')} >Suggested accounts</header>
        <AccountItem src={'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/279685278_3209864065999719_4526217248550211805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lyXxeUGay7UAX_1lK7e&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT9eCktrENkMgJHpSprRDYXyg8F_CeG0caNV9LKRjMuQ0Q&oe=6320A6AA'}/>
        <header className={cx('header')} >Suggested accounts</header>
        <AccountItem src={'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/279685278_3209864065999719_4526217248550211805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lyXxeUGay7UAX_1lK7e&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT9eCktrENkMgJHpSprRDYXyg8F_CeG0caNV9LKRjMuQ0Q&oe=6320A6AA'}/>
        <header className={cx('header')} >Suggested accounts</header>
        <AccountItem src={'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/279685278_3209864065999719_4526217248550211805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lyXxeUGay7UAX_1lK7e&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT9eCktrENkMgJHpSprRDYXyg8F_CeG0caNV9LKRjMuQ0Q&oe=6320A6AA'}/>
        <header className={cx('header')} >Suggested accounts</header>
        <AccountItem src={'https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/279685278_3209864065999719_4526217248550211805_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lyXxeUGay7UAX_1lK7e&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT9eCktrENkMgJHpSprRDYXyg8F_CeG0caNV9LKRjMuQ0Q&oe=6320A6AA'}/>
      
    </div> 
    );
}

export default AccountList;