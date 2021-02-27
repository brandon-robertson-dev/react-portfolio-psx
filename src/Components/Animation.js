// React
import { Component } from 'react';

// CSS
import '../CSS/animation.css';

// Animation
class Animation extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/')
    }, 5000)
  }

  render() {
    return (
      <div class="intro">
        <div class="diamond"></div>
        <div class="triangle left"></div>
        <div class="triangle right"></div>
        <h1>A Website by</h1>
      </div>
    )
  }
}

export default Animation
