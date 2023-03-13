import React from 'react'
import Header from '../Component/Header/Header'
import BannerBradCrumbs from '../Component/PageBreadCrumbs/BannerBradCrumbs'
import Banner from '../Component/Slider/Banner'
import ProductCarousel from '../Component/Slider/ProductCarousel'

const About = () => {
  const bannerData = [
    {
      bannerImage: './images/a1.webp'
    },
    {
      bannerImage: './images/a2.webp'
    },
    {
      bannerImage: './images/a3.webp'
    }
  ]
  return (
    <div>
      <Header />
      <BannerBradCrumbs title="About" />
      <Banner Data={bannerData} />
      <ProductCarousel />
    </div>
  )
}

export default About