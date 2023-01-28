import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Banner1 from '../Banner/Banner1';
import Categorys from '../Categorys/Categorys';
import Feedback from '../Feedback/Feedback';
import HomeBanner from '../HomeBanner/HomeBanner';
import UpdateNews from '../UpdateNews/UpdateNews';

const Home = () => {
	return (
    <div className="max-w-7xl mx-auto">
      <HomeBanner></HomeBanner>
      <Advertised></Advertised>
      <Categorys></Categorys>
      <UpdateNews></UpdateNews>
      <Feedback></Feedback>
      {/* <Banner></Banner> */}
      <Banner1></Banner1>
    </div>
  );
};

export default Home;