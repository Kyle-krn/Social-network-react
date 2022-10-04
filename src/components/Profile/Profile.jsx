import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPosts';

const Profile = (props) => {
    
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
      </div>
    );
}

export default Profile;