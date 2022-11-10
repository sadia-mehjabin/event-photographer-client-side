import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({service}) => {
    const {img, name, price, description} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img className= 'h-96' src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
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