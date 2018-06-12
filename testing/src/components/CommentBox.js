import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'
import requireAuth from 'components/requireAuth'

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = e => {
    this.setState({ comment: e.target.value })
  }

  handleSummit = e => {
    e.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSummit}>
          <h4>Add a Comment</h4>
          <textarea
            rows="8"
            onChange={this.handleChange}
            value={this.state.comment}
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button
          className="fetch-comments"
          onClick={this.props.fetchComments}
        >
          Fetch Comments
        </button>
      </div>
    )
  }
}

export default connect(
  null,
  actions,
)(requireAuth(CommentBox))
