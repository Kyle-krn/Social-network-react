import style from  './Friends.module.css';

const Friend = (props) => {
    return (
        <div className={style.friends__item}>
            <img />
            <span>{props.name}</span>
        </div>
    )
}

const FriendsBLock = (props) => {
    return (
        <div className={style.friends}>
            <div className={style.friends__title}>Friends</div>
            <div className={style.friends__list}>
                {props.FriendsData.map(el => <Friend key={el.id} name={el.name}/>)}
            </div>
        </div>
    )
}

export default FriendsBLock;