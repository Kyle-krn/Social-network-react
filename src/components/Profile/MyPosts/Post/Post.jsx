import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://cdn-icons-png.flaticon.com/512/147/147142.png' />
            {props.message}
        </div>
    );
}

export default Post;