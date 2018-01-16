import React from 'react'

function Comment({comment}) {
	return (
		<div>
			<p>
				{comment.text}
				<br/>
				<b>by {comment.user}</b>
			</p>
		</div>
	)
}

export default Comment