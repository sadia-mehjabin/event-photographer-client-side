import React from 'react';
import useTitle from '../hooks/UseTitle';

const PageNotFound = () => {
    useTitle('404 page')
    return (
        <div>
            <h2 className='text-center text-5xl font-bold m-5'>page not found</h2>
        </div>
    );
};

export default PageNotFound;