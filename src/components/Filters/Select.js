import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
	static propTypes = {
		articles: PropTypes.array.isRequired
	}
	state = {
		selected: []
	}

	handleChange = selected => this.setState({selected})

	render() {
		const {articles} = this.props
		const {selected} = this.state

		const options = articles.map(article => ({
			label: article.title,
			value: article.id
		}))

		return <Select 
			options = {options}
			value = {selected}
			onChange = {this.handleChange}
			multi = {true}
		/>
	}
}

export default SelectFilter