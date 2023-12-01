import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://thumbor.bigedition.com/funniest-cats-internet/vJ8ldFW4wJ-1N5uWsSiECD5wsDE=/0x13:800x614/800x600/filters:format(webp):quality(80)/granite-web-prod/cc/fa/ccfa37b8659442e9a994fe07d0534ac8.jpeg"
                    alt="avatar"/>
                Post 1
                <div>
                    <span>LikeCount</span>
                </div>
            </div>
        </div>
    );
};

export default Post;