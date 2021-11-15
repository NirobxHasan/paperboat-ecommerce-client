import React from 'react';
import Products from '../../Products/Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Category from '../Category/Category';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';
const Home = () => {
    return (
        <div>
            <HeaderBanner />

            <HomeProducts />
            <Category />

            <Reviews />
        </div>
    );
};

export default Home;
