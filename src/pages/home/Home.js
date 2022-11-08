import React from 'react';
import img from '../../images/14.webp'
const Home = () => {
    return (
        <div>
            <img className='w-full hero-overlay opacity-80' src={img} alt="" />
            <h2 className='text-5xl absolute lg:top-48 
            sm:top-24 font-bold left-96'>We Create Memory Of Happiness.</h2>
        </div>
    );
};

export default Home;