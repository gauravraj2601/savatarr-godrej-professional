import React from 'react'
import logo from "../Assets/Godrej-logo.avif"
import { IoSearchSharp } from "react-icons/io5";
import './Navbar.css';

const Navbar = () => {
  return (
    <div style={{ height:"140px",boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", marginBottom:"15px"}}>
    <div style={{ height:"100px", overflow:"hidden"}}>
        <div>
            <img style={{width:"400px", marginTop:"-70px"}} src={logo} alt="Godrej-logo" />
        </div>
    </div>
        <div id='panel' >
            <div>HAIR COLOR</div>
            <div>CONTACT US</div>
            <div>|</div>
            <div><IoSearchSharp /></div>
        </div>
    </div>
  )
}

export default Navbar