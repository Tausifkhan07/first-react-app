import React from 'react';
import Header from '../Component/Header/Header';
import Banner from '../Component/Slider/Banner';

const Home = () => {
  // banner data 
  const banner = [
    {
      bannerImage: './images/b1.jpg'
    },
    {
      bannerImage: './images/b2.jpg'
    },
    {
      bannerImage: './images/b3.jpg'
    },
    {
      bannerImage: './images/b4.jpg'
    },
    {
      bannerImage: './images/b5.jpg'
    },
    {
      bannerImage: './images/b6.jpg'
    },
    {
      bannerImage: './images/b7.jpg'
    },
    {
      bannerImage: './images/b8.jpg'
    },
    {
      bannerImage: './images/b9.jpg'
    } 
  ]

  return (
    <div>
      <Header />
      <Banner Data={banner} />
    </div>
  )
}

export default Home