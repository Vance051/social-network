import React from 'react';
import s from './Header.module.css'
const Header = () => {
    return (
        <div className={s.header}>
            <header >
                <img
                    src="https://img.freepik.com/free-photo/view-of-3d-letter-k_23-2150890896.jpg?w=1480&t=st=1700601618~exp=1700602218~hmac=faa4953b54bc36a9b25c081d0903e5a7a81695f6b6c7394e83b4c06efa9486d6"
                    alt=""/>
                <span>Lorem ipsum dolor.</span>
            </header>
        </div>
    );
};

export default Header;