import React, { Component } from 'react';
import Post from './post.js'
class ListContainer extends Component {
  render()
  {
  	var posts = this.props.posts;
    return (
      <div className='list-container'>
      <h2> Comments </h2>
      	{posts.map((post, index) => 
      		<Post onDeleteHandler={this.props.onDeleteHandler} post_id={index+1} key={index} post={post}> </Post>
		)}
      </div>
    );
  }
}
export default ListContainer;