import styles from './Users.module.css'
import maleAvatar from './../../static/img/male_avatar_2.png'
import femaleAvatar from './../../static/img/female_avatar.png'
import React from "react";
import Pagination from '../common/Pagination/Pagination';


export const User = (props) => {
    let avatar = props.photoURL;
    if (avatar === null) {
        avatar = props.isMale ? maleAvatar : femaleAvatar
    }
    return (
        <div className={styles.user_item}>
            <img src={avatar} alt="" className={styles.avatar} />
            <div className={styles.user_info_block}>
                <div className={styles.name}>{props.first_name} {props.last_name[0]}.</div>
                <div className={styles.status}>{props.status}</div>
                <div className={styles.location}><div>{props.country},</div><div>{props.city}</div> </div>
            </div>
            <button onClick={() => props.toggleFollow(props.userId)} className={styles.follow_button}>{props.is_follow ? 'Follow' : 'Unfollow'}</button>
        </div>
    )
}


const Users = (props) => {
    return (
        <div>
            <div className={styles.title}>Users</div>
            <div className={styles.users_list}>
                {props.users.map((u) => <User key={u.id}
                    userId={u.id}
                    first_name={u.first_name}
                    last_name={u.last_name}
                    status={u.status}
                    country={u.country}
                    city={u.city}
                    is_follow={u.is_follow}
                    isMale={u.is_male}
                    photoURL={u.photo}
                    toggleFollow={props.toggleFollow}
                />)}
            </div>
            <Pagination totalUsersCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        setCurrentPage={props.setCurrentPage}
                        currentPage={props.currentPage}/>
        </div>)    
}

export default Users;

