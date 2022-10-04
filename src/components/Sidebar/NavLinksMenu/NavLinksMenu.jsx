import style from  './NavLinksMenu.module.css';
import {NavLink} from "react-router-dom";

const NavLinksMenu = (props) => {
    let links = [['profile', 'Profile'], ['dialogs', 'Messages'], ['news', 'News'], ['music', 'Music'], ['settings', 'Settings']]
    return (
        <nav className={style.nav}>
            <ul>
                {links.map((el, index) => (<li key={index}><NavLink className={navData => navData.isActive? style.navlink_active:style.navlink} to={'/' + el[0]}>{el[1]}</NavLink></li>))}
            </ul>
        </nav>
    );
}

// const Super

export default NavLinksMenu;