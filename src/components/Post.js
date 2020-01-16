import React, {Component} from 'react'

class Post extends Component{
	constructor(props){
		super(props);
		this.state = {
			posts:[]
		}
	}

	componentWillMount(){
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then((data)=> this.setState({posts: data}))
	}


	render(){
		const postItems = this.state.posts.map(post =>
			<div key = {post.id}>
				<h3>{post.title}</h3>
				{post.body}
			</div>

		)
		return (
			<div>
		 	{postItems}
		 </div>
		 )
	}
}

export default Post