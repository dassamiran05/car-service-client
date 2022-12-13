import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Calltoaction from '../Calltoaction/Calltoaction';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Teams from '../Teams/Teams';
import Whyus from '../Whyus/Whyus';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Calltoaction></Calltoaction>
            <Products></Products>
            <Teams></Teams>
            <Whyus></Whyus>
        </div>
    );
};

export default Home;