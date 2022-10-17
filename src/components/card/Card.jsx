import React from 'react'
import "./Card.css"
function Card(props) {
    // console.log(props);
    const bgStyle= {
      backgroundColor:props.bgcolor
    }
    console.log(bgStyle);
  return (
<div className='container'>
      <div className='bkcolor'style={bgStyle}></div>
      <section>
        <img className='img' src={props.profilePic} alt="user" />
      </section>
      <div className='wrapper_container'>
      <div className='wrapper'>
        <h2 className='username'>{props.username}</h2>
        <div className='id'>{props.id}</div>
       </div>
       <div className='block'>
       <div>About</div>
       <div className="title">{props.userInfo}</div>
       <div >web:<a href='#'>{props.web}</a></div>
       <div className='twitter'>twitter:<a href='#'>{props.twitter}</a></div>
       </div>
      </div>
    
</div>
  )
}

export default Card