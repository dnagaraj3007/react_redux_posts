import React, {Component} from 'react';

class PostForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			body:'',
			title:''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}



	onChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit(e){
		e.preventDefault();
		const post = {
			title : this.state.title,
			body: this.state.body
		}
		fetch('https://jsonplaceholder.typicode.com/posts',{
			method: 'POST',
			headers:{
				type:'application/json'
			},
			body: JSON.stringify(post)
		})
		.then(res => res.json())
		.then(data => console.log(data));
	}

	render(){
		return (
			<form onSubmit = {this.onSubmit}>
			<h1> Add Post</h1>
			<div>
				<label>Title:</label> <br/>
				<input type = 'text' name = 'title' value = 
				{this.state.title} onChange = {this.onChange}/>
			</div>
			<div>
				<label>Body: </label> <br/>
				<textarea name = 'body' value = {this.state.body} onChange = {this.onChange}/>
		    </div>
		    <button type = 'submit'> Submit </button>
			</form>

			)
	}
}

export default PostForm;