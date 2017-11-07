import React, { PureComponent } from 'react'
import path from 'path'
import { get } from 'http';
const posts = require('../../data/posts.json')
export default class Posts extends PureComponent{
 constructor(){
   super()
   this.state = {
     posts
   }
 }

 componentWillMount(){
   this.setState({
     posts:this.state.posts.map((post,i) => {
       console.log(post)
      return (
        <li key={i} className="posts-item" style={{ "--posts-item-color": post.color, "--grow": Math.random() * 500 + 2, "--shrink": Math.random() * 50, "--posts-item-image": `url(${post.img})`,"--posts-item-title-length": post.title.split(" ").length}}>
          <a href={`/posts/${post.id}`} style={{width:'100%',height:'100%',textDecoration: 'none'}}>     
            <h1 className="posts-item-title">{post.title}</h1>
            <ul className="posts-item-tags">
              { post.tags.join(" | ") }
            </ul>
          </a>   
        </li>
      )
    })
   })   
   console.log(this.state.posts)
 }
 
 render(){
   return(
    <ul className="posts">
      {this.state.posts}
    </ul>
   )
 }
}
 