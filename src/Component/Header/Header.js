import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import './Header.css';
import Carousel from '../Slider/OwlCarousel';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='Header'>
      <div className='top--nav'>
        <div className='nav-log'>
          <Link to="/">
          <img src='./logo192.png' alt="logo" />
          </Link>
        </div>
        <div className='nav-input'>
          <input type="text" placeholder='Search Any Things..' />
          <span className='search-icon'><BsSearch /></span>
        </div>
        {/* mobile menu icon here  */}
        <div className='menu-icon'>
          {
            toggle ? <AiOutlineClose onClick={()=>{
              setToggle(!toggle)
              document.getElementById("_moNavOpen").classList.remove("mystyle");
            }} /> : <AiOutlineMenu onClick={()=>{
              setToggle(!toggle)
              document.getElementById("_moNavOpen").classList.add("mystyle");              

            }} />
          }
          </div>

        {/* nav menu start  */}
        <div className='nav-menu'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </div>
      {/* bottom header  */}
      <div className='bottom--nav'>
        {/* <ul>
          <li><NavLink to="/">All</NavLink> </li>
          <li><NavLink to="/contact">Also View</NavLink> </li>
          <li><NavLink to="/about">See</NavLink> </li>
          <li><NavLink to="/new">New</NavLink> </li>
          <li><NavLink to="/explore">Explore</NavLink> </li>
          <li><NavLink to="/mobile">Mobile</NavLink> </li>
          <li><NavLink to="/tv">TV</NavLink> </li>
          <li><NavLink to="/ac">A/C</NavLink> </li>
          <li><NavLink to="/google">Goggle</NavLink> </li>
          <li><NavLink to="/car">Car </NavLink> </li>
          <li><NavLink to="/bike">Bike</NavLink> </li>
          <li><NavLink to="/trading">Tranding</NavLink> </li>
          <li><NavLink to="/luxyrius">Luxyrius</NavLink> </li>
          <li><NavLink to="/electronic">electronic</NavLink> </li>
        </ul> */}
      </div>
        <Carousel />
      {/* mobile and tab menu  */}
      
          <div className='mob-menu' id='_moNavOpen'>
            <div className='mob-menu-cont'>
              <ul>
                <li><input type="text" placeholder='Search Something' /></li>
                <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/work">Work</NavLink> </li>
                <li><NavLink to="/project">Project</NavLink> </li>
                <li><NavLink to="/about">About Us</NavLink> </li>
                <li><NavLink to="/contact">Contact Us</NavLink> </li>
              </ul>
            </div>
          </div>

    </div>
  )
}

export default Header;