import React from 'react';
import Advertised from '../Advertised/Advertised';
import Categorys from '../Categorys/Categorys';
import HomeBanner from '../HomeBanner/HomeBanner';
import UpdateNews from '../UpdateNews/UpdateNews';

const Home = () => {
	return (
    <div className="max-w-7xl mx-auto">
      <HomeBanner></HomeBanner>
      <Advertised></Advertised>
      <Categorys></Categorys>
      <UpdateNews></UpdateNews>
    </div>
  );
};

export default Home;