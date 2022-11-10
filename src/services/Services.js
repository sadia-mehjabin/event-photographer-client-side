import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from './Service';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../hooks/UseTitle';

const Services = () => {
    const data = useLoaderData()
    useTitle('services')

    return (
        <div className='grid gap-5 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
            {
                data.map(servs => 
                    <div className="card w-96 bg-base-100 shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={servs.img}>
                            <img className='h-96' src={servs.img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    <div className="card-body">
                    <h2 className="card-title">{servs.name}</h2>
                    <h5><span className='font-bold'>Price:</span> {servs.price}</h5>
                    <p>{servs.description.slice(0, 100)} ...</p>
                    <div className="card-actions justify-end">
                    <Link to={`/services/${servs._id}`}><button className="btn btn-primary"> View Details</button></Link>
        </div>
        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Services;