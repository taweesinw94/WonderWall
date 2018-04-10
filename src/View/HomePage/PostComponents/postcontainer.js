import React, { Component } from 'react';
import PostInput from './postinput.js';
import ListContainer from './listcontainer.js';
import './postcontainer.css'
class PostContainer extends Component {

	constructor(props)
  	{
    	super(props);
    	this.state = {
      		posts: [],
      		isLoading: true,
      	}
    }
    componentDidMount()
    {
    	var api = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=3&callback=/'
    	fetch(api)
    	.then(response => { return response.json()})
    	.then(json => { 
    		var posts = [];
    		 json.map(data => {
    		 	posts.push(data.content)
    		 })
    	this.setState({posts: posts, isLoading: false})
    		}) 
    }
    deletePost(post_id)
    {
    	var posts = this.state.posts;
    	posts.splice(post_id-1,1);
    	this.setState({posts: posts});
    }
    insertPost(post)
    {
    	var posts = this.state.posts;
    	posts.push(post);
    	this.setState({posts: posts});
    }
  	render()
  	{
  		var result = ''
  		if(this.state.isLoading == false)
  		{
  			result = <ListContainer onDeleteHandler={this.deletePost.bind(this)} posts={this.state.posts}/>
  		}
  		else
  		{
  			result = <h1> Loading... </h1>
  		}
    	return (
      	<div className='container'>
    		<PostInput onSubmitHandler={this.insertPost.bind(this)} current_message={this.state.current_message}></PostInput>
    		{result}
      	</div>
    );
  }
}
export default PostContainer;