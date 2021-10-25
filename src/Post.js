import { Avatar } from '@mui/material';
import React from 'react'
import "./Post.css";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post(
  displayName,
  username,
  verified,
  text,
  image,
  avatar
) {
  return <div className="post">
    <div className="post__avatar">
      <Avatar  src="/static/images/avatar/1.jpg" />
    </div>

    <div className="post__body">
      <div className="post__header">
        <div className="post__headerText">
          <h3>
            Allison Asia {" "} <span className="post__headerSpecial">
              <VerifiedUserIcon className="post__badge" /> @Mzallison
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          <p> I challenge you to build a twioter clone with  react </p>
        </div>
      </div>
    <img src="https://blog.hubspot.com/hubfs/Smiling%20Leo%20Perfect%20GIF.gif" alt=""  />
    <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
    </div>
        
    </div>
      
    </div>;
  
}

export default Post

