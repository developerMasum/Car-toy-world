import React from 'react';
import Banner from './Banner';
import Service from './Service';
import Customer from './Customer';
import CategoriesTab from './CategoriesTab';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <CategoriesTab />
            <Customer />
            <Gallery />
        </div>
    );
};

export default Home;