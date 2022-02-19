import React from 'react';
import { FaRegComment, FaRetweet, FaRegHeart, FaRegShareSquare } from 'react-icons/fa'
import './Post.css'

const Post = ({ img, name, user, text }) => {

    const date = new Date()

    return ( 
        <div className='containerPublish'>
                <div className="headerPublish">
                    <img src={img} alt={name} className='imgPublish'/>
                    <div className="publishInfo">
                        <span>{name}</span>
                        <span className='user'>@{user} • {date.getHours()} h </span>
                        <p className='contentPublish'>{text}</p>
                    </div>
                </div>
                <div className="footerPublish">
                    <button><FaRegComment /></button>
                    <button><FaRetweet /></button>
                    <button><FaRegHeart /></button>
                    <button><FaRegShareSquare /></button>
                </div>
            </div>
     );
}
 
export default Post;