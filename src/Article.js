import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

export default class Article extends Component {
  static propTypes = {
    // article: PropTypes.object.isRequired
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  }
  constructor(props) {
    super(props)
  
    this.state = {
      isOpen: false
    }
    this.toggleOpen = this.toggleOpen.bind(this)
  }
  render() {
    const {article} = this.props
    const {isOpen} = this.state
    const body = isOpen ? <section>{article.text}</section> : null
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    if (!this.state.isOpen) return null
    const {article} = this.props
    return (
      <section>
        {article.text}
        <CommentList comments = {article.comments} />
      </section>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}









// import React, {Component} from 'react'

// export default class Article extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       isOpen: false
//     }
//   }

//   render() {
//     const {article} = this.props
//     const {isOpen} = this.state
//     return (
//       <div>
//         <h3>{article.title}</h3>
//         <button onClick = {this.toggleOpen}>
//           {isOpen ? 'close' : 'open'}
//         </button>
//         {this.getBody()}
//       </div>
//     )
//   }

//   getBody() {
//     if (!this.state.isOpen) return null
//     const {article} = this.props
//     return <section>{article.text}</section>
//   }

//   toggleOpen = () => {
//     this.setState({
//       isOpen: !this.state.isOpen
//     })
//   }
// }
