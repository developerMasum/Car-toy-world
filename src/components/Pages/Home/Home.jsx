import React from 'react';
import Banner from './Banner';
import Service from './Service';
import Customer from './Customer';
import CategoriesTab from './CategoriesTab';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <CategoriesTab />
            <Customer />
        </div>
    );
};

export default Home;