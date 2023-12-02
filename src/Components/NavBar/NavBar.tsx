import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (

        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/dialogs">Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/musics">Music</NavLink>
            </div>
            <div className={s.item}>
                <a href="/#">Settings</a>
            </div>
        </nav>
    );
};

export default NavBar;