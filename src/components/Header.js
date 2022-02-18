import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'
import ReorderIcon from '@material-ui/icons/Reorder';
import StoreIcon from '@material-ui/icons/Store';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const onclick = ()=>{
  const a = document.getElementById("header_center");
  if(a.style.display==="flex"){
    a.style.display="none";
  }
  else{
    a.style.display="flex"
  }
}
function Header() {
  return (
    <div className='header'>
        <div className="header_logo">
          <a href="#sp"><img src={TeslaLogo} alt="Tesla Logo" /></a>  
        </div>
        <div className="header_center" id="header_center">
           <a href="#ms">Model S</a>
           <a href="#m3">Model 3</a>
           <a href="#mx">Model X</a>
           <a href="#my">Model Y</a>
           <a href="#sf">Solar Roof</a>
           <a href="#sp">Solar Panel</a>
        </div>

        <div className="header_right">
            <p>Shop</p>
            <p>Tesla Account</p>
        </div>
        <div className="header_right_icon">
            <StoreIcon />
            <AccountCircleIcon />
        </div>
        <div className="reorder_button" id="reorder_button" onClick={onclick}>
          <ReorderIcon />
        </div>
    </div>
  )
}

export default Header