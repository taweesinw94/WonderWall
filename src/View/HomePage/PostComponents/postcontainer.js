import React, { Component } from 'react';
import PostInput from './postinput.js';
import ListContainer from './listcontainer.js';
import './postcontainer.css'
class PostContainer extends Component {

	constructor(props)
  	{
    	super(props);
    	
    }

    componentDidMount()
    {
      var api = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=3&callback=/' 
    }
  	render()
  	{
    	return (
      	<div className='container'>
    		
      	</div>
    );
  }
}
export default PostContainer;