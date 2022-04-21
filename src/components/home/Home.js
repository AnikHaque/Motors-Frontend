import React from 'react';
import About from '../about/About';
import Banner from '../banner/Banner';
import BuySell from '../buysell/BuySell';
import Gallary from '../gallary/Gallary';
import Products from '../products/Products';
import Special from '../special/Special';
import ManageReview from '../managereview/ManageReview'
const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <br></br>
            <br></br>
           <Products></Products>
           <br></br>
            <br></br>
            <BuySell></BuySell>
            <br></br>
            <br></br>
            <About></About>
            <br></br>
            <br></br>
            <Special></Special>
            <br></br>
            <br></br>
            <ManageReview></ManageReview>
            <Gallary></Gallary>
        </div>
    );
};

export default Home;