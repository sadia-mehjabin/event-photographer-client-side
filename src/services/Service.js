import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {img, name, price, description} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <h5><span className='font-bold'>Price:</span> {price}</h5>
            <p>{description.slice(0, 100)} ...</p>
            <div className="card-actions justify-end">
            
        </div>
        </div>
        </div>
    );
};

export default Service;