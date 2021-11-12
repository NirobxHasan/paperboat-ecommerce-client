import React from 'react';
import Products from '../../Products/Products/Products';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';
const Home = () => {
    return (
        <div>
            <HeaderBanner />
            <HomeProducts />
            <Reviews />
        </div>
    );
};

export default Home;
