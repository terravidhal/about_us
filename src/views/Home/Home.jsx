import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomeContent1 from '../../components/HomeContent1/HomeContent1';
import HomeContent2 from '../../components/HomeContent2/HomeContent2';
import HomeContent3 from '../../components/HomeContent3/HomeContent3';
import HomeContent4 from '../../components/HomeContent4/HomeContent4';
import HomeContent5 from '../../components/HomeContent5/HomeContent5';
import HomeContent6 from '../../components/HomeContent6/HomeContent6';


const Home = () => {

  return(
      <div className="Home">
         <Header />
         <HomeContent1 />
         <HomeContent2 />
         <HomeContent3 />
         <HomeContent4 />
         <HomeContent5 />
         <HomeContent6 />
         <Footer />
      </div>
  );
};

export default Home;
