import React from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeReviews from '../HomeReviews/HomeReviews';
import HomeVideo from '../HomeVideo/HomeVideo';
import TopBannar from '../TopBannar/TopBannar';

const HomePage = () => {
    return (
        
        <div>
            <TopBannar></TopBannar>
          
            <HomeProducts></HomeProducts>
      
            <HomeVideo></HomeVideo>
     
            <HomeReviews></HomeReviews>
        </div>
    );
};

export default HomePage;