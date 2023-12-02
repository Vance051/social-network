import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id=""></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <Post
                message={'My first post'}
            likesCount={5}
            />
            <Post message={'cool'}
            likesCount={6}/>
            <Post message={'its so easy'}
            likesCount={8}/>
        </div>
    );
};

export default MyPosts;