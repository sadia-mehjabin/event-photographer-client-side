import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
   const data = useLoaderData()
   
    return (
        <div className='grid grid-cols-2'>
            <div>
            <h2 className='text-3xl font-bold m-3'>Service details about {data.name}</h2>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={data.img}  alt="" /></figure>
                <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <h5><span className='font-bold'>Price:</span> {data.price}</h5>
                <p>{data.description}</p>
                </div>
            </div>
            </div>
            <div>
                <h2 className='text-3xl font-bold m-3 text-center'>Review Section</h2>
                
                <div className='flex justify-center'>
                 <Link to={'/addReview'}><button className='btn btn-primary'>Add Review</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;