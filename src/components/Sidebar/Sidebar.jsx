import style from  './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Friends from './Friends/Friends';
import StoreContext from '../../storeContext';

const Sidebar = (props) => {
    let links = [['profile', 'Profile'], ['dialogs', 'Messages'], ['news', 'News'], ['music', 'Music'], ['settings', 'Settings']]
    return (
        <div className={style.sidebarBlock}>
            <nav className={style.nav}>
                <ul>
                    {links.map((el) => (<li><NavLink className={navData => navData.isActive? style.navlink_active:style.navlink} to={'/' + el[0]}>{el[1]}</NavLink></li>))}
                </ul>
            </nav>
            <StoreContext.Consumer>{
                (store) => (<Friends FriendsData={store.getState().sidebarPage.FriendsData}/>)
            }</StoreContext.Consumer>
        </div>
    );
}

export default Sidebar;