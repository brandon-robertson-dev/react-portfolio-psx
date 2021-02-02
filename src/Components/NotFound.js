// React
import React, { Component } from 'react'

// NotFound 404
class NotFound extends Component {

  componentWillMount() {
    setTimeout(() => {
      this.props.history.push('/')
    }, 4500)
  }

  render() {
    return (
      <div class='notfound'>
        <h1>404</h1>
        <p>Not found</p>
        <p>This page will auto-redirect Home.</p>
      </div>
    )
  }
}
export default NotFound