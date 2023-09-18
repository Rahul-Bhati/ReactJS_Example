import React from 'react';
import { Link, NavLink } from "react-router-dom";


function Error() {
  return (
    <>
      {/* <span style={{fontSize:'100px',color:'red',fontFamily:'cursive',position:'relative',float:'center'}}>Error</span>
      <span></span> */}
       <div class="container" style={{width:'100%',marginTop:'-6%'}}>
      <div class="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div class="content">
        <h1 class="main-heading">This page is gone.</h1>
        <p>
          ...maybe the page you're looking for is not found or never existed.
        </p><br></br>
         <Link to="/">
          <button style={{borderRadius:'0',width:'100%'}}>Back to home <i class="far fa-hand-point-right"></i></button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Error