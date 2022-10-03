import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    
    return (
        <div>
            <ProfileInfo />
            <MyPosts PostsData={props.state.PostsData}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}/>
      </div>
    );
}

export default Profile;