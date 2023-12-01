import React, {FC} from 'react';
import s from "./Post.module.css";

type PropsType ={
    message:string
    likesCount:number
}
const Post:FC<PropsType> = ({message,likesCount}) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://thumbor.bigedition.com/funniest-cats-internet/vJ8ldFW4wJ-1N5uWsSiECD5wsDE=/0x13:800x614/800x600/filters:format(webp):quality(80)/granite-web-prod/cc/fa/ccfa37b8659442e9a994fe07d0534ac8.jpeg"
                    alt="avatar"/>
                {message}
                <div>
                    <span>LikeCount {likesCount}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;