import React from 'react';

const Service = ({service}) => {
    const {img, name, price, description} = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">View details</button>
        </div>
        </div>
    </div>
    </div>

    );
};

export default Service;