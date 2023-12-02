import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/Myposts";

const Profile = () => {
    return (
        <div >
            <div>
                <img src="" alt="background"/>
            </div>
            <div>ava + description</div>
            <div>
                <MyPosts/>
            </div>
        </div>
    );
};

export default Profile;