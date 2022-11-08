import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../../images/14.webp'
import Service from '../../services/Service';


const Home = () => {
    const services = useLoaderData();
    
    return (
        <div>
            <div>
            <img className='w-full hero-overlay opacity-80' src={img} alt="" />
            <h2 className='text-5xl absolute lg:top-48 
            sm:top-24 font-bold left-96'>We Create Memory Of Happiness.</h2>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Home;