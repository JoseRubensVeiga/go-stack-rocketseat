import React from 'react';

import './style.css';
import Comment from '../Comment/index';

import author from '../../../assets/images/author_01.png'

function Post({post}) {
    return (
        <>
        <div className="comment-container">
            <div className="comment-author">
                <img className="author-img" src={author} />
                <div className="author-description">
                    <div className="author-name">Júlio Alcanatara</div>
                    <div className="data-comment">04 Jun 2019</div>
                </div>
            </div>
            <div className="comment-body">
                Pessoal, alguém sabe se a Rocketseat está contratando?
            </div>
        </div>
        
        {post.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </>
    );
}

export default Post;