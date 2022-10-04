import style from  './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import FriendsBlockContainer from './FriendsBlock/FriendsBlockContainer';
import NavLinksMenu from './NavLinksMenu/NavLinksMenu';


const Sidebar = (props) => {
    return (
        <div className={style.sidebarBlock}>
            <NavLinksMenu />
            <FriendsBlockContainer />
        </div>
    );
}


export default Sidebar;