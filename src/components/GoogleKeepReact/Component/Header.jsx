import React from 'react';
import Logo from '../Images/logo.png'

function Header() {
  return (
    <div className='header'>
      <img src={Logo} alt='logo' width='100' height='100'/>   
      <h1>Rahul's Notes</h1>

    </div>
  )
}

export default Header