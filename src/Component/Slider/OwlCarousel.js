import React from 'react';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './OwlCarousel.css';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function Carousel() {

    const options = {
        margin: 15,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: false,
        smartSpeed: 500,
        autoWidth:true,
        // items: 6,
        // responsive: {
            
        // },
    };
    return (
        <Container>
            <OwlCarousel className='owl-theme' {...options}>
                <div class='item'>
                <NavLink to="/">All</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/contact">Also View</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/about">See</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/new">New</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/explore">Explore</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/mobile">Mobile</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/tv">TV</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/ac">A/C</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/google">Goggle</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/car">Car </NavLink>
                </div>
                <div class='item'>
                <NavLink to="/bike">Bike</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/trading">Tranding</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/yahoo">Yahoo</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/moter">Moter</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/air-condition">Air Condition</NavLink>
                </div>
                <div class='item'>
                <NavLink to="/machine">Machine</NavLink>
                </div>
            </OwlCarousel>
        </Container>
    );
}

export default Carousel