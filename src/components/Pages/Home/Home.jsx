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
            <Customer />
            <CategoriesTab />
        </div>
    );
};

export default Home;