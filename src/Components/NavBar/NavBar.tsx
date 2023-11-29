import React from 'react';
import s from './NavBar.module.css'
const NavBar = () => {
    return (

        <nav className={s.nav}>
            <div>
                <a href="/#">Profile</a>
            </div>
            <div>
                <a href="/#">Dialogs</a>
            </div>
            <div>
                <a href="/#">News</a>
            </div>
            <div>
                <a href="/#">Music</a>
            </div>
            <div>
                <a href="/#">Settings</a>
            </div>
        </nav>
    );
};

export default NavBar;