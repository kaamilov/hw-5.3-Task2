import React from 'react'
import "./Card_layold.css"
function Card_layold(props) {
  // console.log(props.children);
  return (
    <div className='card_layold'>{props.children}</div>
  )
}

export default Card_layold