import { Avatar, Button } from '@mui/material';
import React from 'react'
import "./TweetBox.css";

function TweetBox() {
    return <div className= "tweetBox">
         <form>
            <div className= "tweetBox__input">
            <Avatar
            className="post__avatar"
            alt='Allison'
            src="/static/images/avatar/1.jpg"
            />
            <input placeholder="what's happening?"  type="text" />
            {/* <input placeholder="Enter image URL" type="text"  */}
            </div> 
        
        <Button>Tweet</Button>
        </form>   
    </div>;
    
}

export default TweetBox
