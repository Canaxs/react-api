import React from 'react'
import logo from '../image/logo.png';

function Logo() {
  return (
    <header>
        <a href='/'><img src={logo} alt="RickAndMort" className='img-fluid' style={{height:"100px",width:"200px"}}/></a>
    </header>
  )
}
export default Logo;
