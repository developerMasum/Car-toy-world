import React from 'react';
import Banner from './Banner';
import Service from './Service';
import Customer from './Customer';
import CategoriesTab from './CategoriesTab';
import Gallery from '../Gallery/Gallery';
import DiscountBanner from './DiscountBanner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <CategoriesTab />
            <Gallery />
            <DiscountBanner />
            <Customer />
        </div>
    );
};

export default Home;