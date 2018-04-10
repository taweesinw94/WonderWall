import React, { Component } from 'react';
import './postinput.css'
class PostInput extends Component {
	constructor(props)
  	{
    	super(props);
    	this.state = {
      		current_message: 'What is on your mind?',
      		random_message: ['What a boring day', 'I need more rest', 'Eating Snack so Yummy!'],
      	}
    }
  randomize()
  {
  	var random_index = Math.floor(Math.random() * (3));
  	this.setState({current_message: this.state.random_message[random_index]})
  }
  textChangeHandler(component)
  {
  	this.setState({current_message: component.target.value});
  }
  submitHandler()
  {
  	this.props.onSubmitHandler(this.state.current_message);
  }
  render()
  {
    return(
    	<div className="post-input">
    		<textarea onChange={this.textChangeHandler.bind(this)} value={this.state.current_message}> </textarea>
    		<div className="buttons-container">
    			<input className="randomize" onClick={() => this.randomize()} value="Random" type='button'></input>
    			<input className="submit" onClick={() => this.submitHandler()} value="Submit" type='button'></input>
    		</div>
    	</div>)
  }
}
export default PostInput;