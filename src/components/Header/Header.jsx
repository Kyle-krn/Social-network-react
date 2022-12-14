import style from './Header.module.css'

const Header = () => {
    return (
    <header className={style.header}>
        <img className={style.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png' />
    </header>
    );
}

export default Header;