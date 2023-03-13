import React from 'react';
import { Link } from 'react-router-dom';
import './BannerBradCrumbs.css'
const BannerBradCrumbs = (props) => {;
  return (
    <div className='banner-crumbs'>
        <h3>{props.title}</h3>
        <ul>
            <li><Link to="/">Home</Link></li> 
            <li> {props.title}</li>
        </ul>
    </div>
  )
};

export default BannerBradCrumbs;