import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import { loadArticleComments } from '../AC'
import { connect } from 'react-redux'

class CommentList extends Component {
	componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
		if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
			loadArticleComments(article.id)
		}
	}

	render() {
		const {article, isOpen, toggleOpen} = this.props
		const text = isOpen ? 'hide comments' : 'show comments'
		return (
			<div>
				<button onClick = {toggleOpen}>{text}</button>
				{this.getBody()}
			</div>
		)
	}

	getBody() {
		const { article: { comments = [], id, commentsLoaded, commentsLoading }, isOpen } = this.props
		if (!isOpen) return null
		if (commentsLoading) return <Loader />
		if (!commentsLoaded) return null

		const body = comments.length ? (
			<ul>
				{comments.map((id) => <li key = {id}><Comment id = {id} /></li>)}
			</ul>
		) : <h3>No comments yet!</h3>

		return (
			<div>
				{body}
				<CommentForm articleId = {id} />
			</div>
		)
	}
}

export default connect(null, { loadArticleComments })(toggleOpen(CommentList))