import React, { Component } from 'react';
import './post.css'
class Post extends Component {
  render()
  {
    return (
      <div className="post">
      	<div className="post-header">
      		<h3> Comment #{this.props.post_id} </h3>
      	</div>
      	<hr/>
        <p> {this.props.post} </p>
        <input onClick={() => {this.props.onDeleteHandler(this.props.post_id)}} className="delete-button" type="button" value="Delete"/>
      </div>
    );
  }
}
export default Post;