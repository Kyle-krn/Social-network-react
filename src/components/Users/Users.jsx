import styles from './Users.module.css'
import maleAvatar from './../../static/img/male_avatar_2.png'
import {useEffect} from 'react';

const User = (props) => {
    const onFollow = (userId) => props.followUser(userId)
    return (
        <div className={styles.user_item}>
            <img src={maleAvatar} alt="" className={styles.avatar} />
            <div className={styles.user_info_block}>
                <div className={styles.name}>{props.name.first} {props.name.last[0]}.</div>
                <div className={styles.status}>{props.status}</div>
                <div className={styles.location}><div>{props.location.country},</div><div>{props.location.city}</div> </div>
            </div>
            <button onClick={() => onFollow(props.userId)} className={styles.follow_button}>{props.is_follow? 'Follow': 'Unfollow'}</button>
        </div>
    )
}


const Users = (props) => {
    useEffect(() => {
        let body = document.body,
            html = document.documentElement;
        let height = Math.max( body.scrollHeight, body.offsetHeight, 
            html.clientHeight, html.scrollHeight, html.offsetHeight );
        console.log(body.scrollHeight, body.offsetHeight, 
            html.clientHeight, html.scrollHeight, html.offsetHeight)
        const handleScroll = event => {
          console.log('window.scrollY', window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div>
            <div className={styles.title}>Users</div>
            <div className={styles.users_list}>
                {props.users.map((u) => <User key={u.id}
                                              userId={u.id} 
                                              name={u.name}
                                              status={u.status}
                                              location={u.place}
                                              is_follow={u.is_follow}
                                              followUser={props.followUser}/>)}
            </div>
            <button onClick={props.showMoreUsers} className={styles.show_more_button}>Show more</button>
        </div>
    )
}

export default Users