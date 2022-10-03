import style from  './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Friends from './Friends/Friends';

const Sidebar = (props) => {
    // debugger;
    return (
        <div className={style.sidebarBlock}>
            <nav className={style.nav}>
                <ul>
                    <li><NavLink className={navData => navData.isActive? style.navlink_active:style.navlink} to="/profile">Profile</NavLink></li>
                    <li><NavLink className={navData => navData.isActive? style.navlink_active:style.navlink} to="/dialogs">Messages</NavLink></li>
                    <li><NavLink className={navData => navData.isActive? style.navlink_active:style.navlink} to="/news">News</NavLink></li>
                    <li><NavLink className={navData => navData.isActive? style.navlink_active:style.navlink} to="/music">Music</NavLink></li>
                    <li><NavLink className={navData => navData.isActive? style.navlink_active:style.navlink} to="/settings">Settings</NavLink></li>
                </ul>
            </nav>
            <Friends FriendsData={props.SidebarData.FriendsData}/>
        </div>
    );
}

export default Sidebar;