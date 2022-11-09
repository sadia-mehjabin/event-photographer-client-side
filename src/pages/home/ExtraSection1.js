import React from 'react';
import img from '../../images/side-view-portrait-beautiful-traditional-600w-2045362565.webp'

const ExtraSection1 = () => {
    return (
        <div className="hero bg-base-200 mx-auto my-5">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='text-center'>
                <h1 className="text-5xl font-bold">Discount! Discount!</h1>
                <p className="py-6">Recently we have started modelling photoshoot also. for first ten customer we have a great discount. if you interested then contact us immiedietly.</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;