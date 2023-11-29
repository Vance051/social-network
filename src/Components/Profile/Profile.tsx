import React from 'react';
import s from './Profile.module.css'
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="" alt=""/>
            </div>
            <div>ava +desc</div>
            <div>
                My posts
                <div>New Post</div>
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
            </div>
        </div>
    );
};

export default Profile;