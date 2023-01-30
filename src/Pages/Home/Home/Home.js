import React from 'react';
import Advertised from '../Advertised/Advertised';
import BlogsSection from '../BlogsSection/BlogsSection';
import Categorys from '../Categorys/Categorys';
import Feedback from '../Feedback/Feedback';
import HomeBanner from '../HomeBanner/HomeBanner';
import OurServices from '../OurServices/OurServices';
import Suscription from '../Suscription/Suscription';
// import UpdateNews from '../UpdateNews/UpdateNews';
import VideoSection from '../VideoSection/VideoSection';

const Home = () => {
	return (
    <div className="max-w-7xl mx-auto">
      <HomeBanner></HomeBanner>
      <OurServices></OurServices>
      <Advertised></Advertised>
      <Categorys></Categorys>
      <VideoSection></VideoSection>
      {/* <UpdateNews></UpdateNews> */}
      <Feedback></Feedback>
      <BlogsSection></BlogsSection>
      <Suscription></Suscription>
    </div>
  );
};

export default Home;