import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewTable from '../pages/review/ReviewTable';
import AddReview from '../pages/review/AddReview'
import useTitle from '../hooks/UseTitle';

const ServiceDetails = () => {

   const data = useLoaderData()
    useTitle('Service details')
    
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
            <div>
            <h2 className='text-3xl font-bold m-3'>Service details about {data.name}</h2>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={data.img} alt="" /></figure>
                <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <h5><span className='font-bold'>Price:</span> {data.price}</h5>
                <p><span className='font-bold'>Description:</span> {data.description}</p>
                </div>
                <AddReview 
                key={data._id}
                data={data}
                ></AddReview>
            </div>
            </div>
            <div>
                <h2 className='text-3xl font-bold m-3 text-center'>Review Section Of <span className='text-error'>{data.name}</span></h2>
                <ReviewTable
                key={data._id}
                data={data}
                ></ReviewTable>
            </div>
        </div>
    );
};

export default ServiceDetails;