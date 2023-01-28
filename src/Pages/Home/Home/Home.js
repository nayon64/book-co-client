import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner1 from '../Banner/Banner1';
import BlogsSection from '../BlogsSection/BlogsSection';
import Categorys from '../Categorys/Categorys';
import Feedback from '../Feedback/Feedback';
import HomeBanner from '../HomeBanner/HomeBanner';
import OurServices from '../OurServices/OurServices';
import UpdateNews from '../UpdateNews/UpdateNews';

const Home = () => {
	return (
    <div className="max-w-7xl mx-auto">
      <HomeBanner></HomeBanner>
      <OurServices></OurServices>
      <Advertised></Advertised>
      <Categorys></Categorys>
      <UpdateNews></UpdateNews>
      <Feedback></Feedback>
      <BlogsSection></BlogsSection>
    </div>
  );
};

export default Home;