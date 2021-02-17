import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />    
                </a>    
            </div>            
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
            </div>
            <div className="metada">
                <span className="date">
                    {props.timeAgo}
                </span>
            </div>
            <div className="text">
                {props.comment}
            </div>
        </div>
    );
}
export default CommentDetail;