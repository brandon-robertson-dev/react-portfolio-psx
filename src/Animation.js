import { useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import './animation.css';

function Animation() {

  let history = useHistory();

  function handleClick() {
    console.log("history")
    setTimeout(history.push('/'), 4500)
  }

  return (
    <div class="intro">
      <div class="diamond"></div>
      <div class="triangle left"></div>
      <div class="triangle right"></div>
      <h2 onLoad={handleClick} >A Website by</h2>
    </div>
  )
}

export default Animation
