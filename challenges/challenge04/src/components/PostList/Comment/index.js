import React from 'react';

import './style.css';

import author from '../../../assets/images/author_02.png'

function Comment({comment}) {
    console.log("Comentário passando pelo componente", comment)
    return (
        <div className="reply-container">
            <img className="author-img" src={author}/>
            <div className="reply-body">
                <span className="author-name">{comment.author.name}</span>
                <span className="reply-text">{comment.content}</span>
            </div>
        </div>
    )
}

export default Comment;