import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postActions'

class Post extends Component{

	componentWillMount(){
		this.props.fetchPosts();
	}

	componentWillReceiveProps(props){
		console.log(props.newPost);
		this.props.posts.unshift(props.newPost)
	}


	render(){
		const postItems = this.props.posts.map(post =>
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

const mapStateToProps = state => ({
	posts: state.posts.items,
	newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Post)