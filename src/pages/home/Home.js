import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import img from '../../images/14.webp'
import Service from '../../services/Service';
import ExtraSection1 from './ExtraSection1';


const Home = () => {
    const services = useLoaderData();
    
    return (
        <div>
            <div>
            <img className='w-full hero-overlay opacity-80' src={img} alt="" />
            <h2 className='text-5xl absolute lg:top-48 
            sm:top-24 font-bold left-96'>We Create Memory Of Happiness.</h2>
            </div>
            <div className='grid gap-3 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
            <div className='flex justify-center'>
            <Link to={'/services'}><button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">View All</button></Link>
            </div>
            <ExtraSection1></ExtraSection1>
            <div className='bg-green-200 w-3/4 mx-auto m-5 p-5 rounded-lg'>
                    <h2 className='text-center text-5xl font-bold m-4'>Contact us</h2>
                    <p className='text-center font-bold'>our office: 31/A mirpur 12 road, dhaka.
                        <br />
                        email: sayemShikder@Gmail.com <br />
                        contact no: 7224356
                    </p>
            </div>
        </div>
    );
};

export default Home;