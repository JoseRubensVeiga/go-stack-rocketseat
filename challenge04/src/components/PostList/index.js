import React, { Component } from 'react';

import './style.css';

import Post from './Post/index';
class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                  name: "Julio Alcantara",
                  avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                  {
                    id: 1,
                    author: {
                      name: "Diego Fernandes",
                      avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando videos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
                  },
                  {
                      id: 2,
                      author: {
                        name: "José Veiga",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                      },
                      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus faucibus erat, et luctus nisl faucibus a. Pellentesque bibendum ipsum odio, id pulvinar lacus posuere eget. Mauris quis eros rhoncus, lobortis ex et, gravida ex. Donec nec ligula eget nisi fermentum vulputate at vel erat. Etiam rhoncus augue arcu, id ornare quam cursus sed. Aliquam rhoncus velit nec lacus lacinia tempus. Cras hendrerit pellentesque lacus, ac dictum ex tristique ut."
                    }
                ]
              },
              {
                id: 2,
                author: {
                  name: "Julio Alcantara",
                  avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                  {
                    id: 1,
                    author: {
                      name: "Diego Fernandes",
                      avatar: "http://url-da-imagem.com/imagem.jpg"
                    },
                    content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando videos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
                  },
                  {
                      id: 2,
                      author: {
                        name: "José Veiga",
                        avatar: "http://url-da-imagem.com/imagem.jpg"
                      },
                      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus faucibus erat, et luctus nisl faucibus a. Pellentesque bibendum ipsum odio, id pulvinar lacus posuere eget. Mauris quis eros rhoncus, lobortis ex et, gravida ex. Donec nec ligula eget nisi fermentum vulputate at vel erat. Etiam rhoncus augue arcu, id ornare quam cursus sed. Aliquam rhoncus velit nec lacus lacinia tempus. Cras hendrerit pellentesque lacus, ac dictum ex tristique ut."
                    }
                ]
              },
        ]
    };

    render() {
        return (
            <>
                { this.state.posts.map(post => (
                    <div className="container">
                        <Post key={post.id} post={post}/>
                    </div>
                ))}
            </>
        );
    }
}

export default PostList;