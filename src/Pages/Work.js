import React from 'react'
import WorkCard from '../Component/Card/WorkCard';
import Header from '../Component/Header/Header';
import BannerBradCrumbs from '../Component/PageBreadCrumbs/BannerBradCrumbs';

const Work = () => {
  return (
    <div>
      <Header />
      <BannerBradCrumbs title="Work" />
      <WorkCard />
    </div>
  )
}

export default Work;