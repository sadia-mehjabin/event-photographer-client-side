import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/UseTitle';

const ReviewTable = ({data}) => {
    const {name} = data;
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(d => {
            const filteredData = d.filter(dat => dat.serviceName ===  name)
            setReviews(filteredData)
            // console.log(filteredData)
        })
            // data.filter(d._id === )
            // setReviews(data)
            
      
        .catch(err => console.error(err))
    })
    return (
        <div className="w-full m-5 justify-self-auto">
            <table className="table w-full "> 
                <thead>
                <tr>
                    <th>image & Name</th>
                    <th>review</th>
                    
                </tr>
                </thead>
                {
                    reviews.map(review =>  <>
                    <tbody>
                <tr>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={user?.photoURL} alt="" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{review.name}</div>
                        </div>
                    </div>
                    </td>
                    <td className='col-span-2'>
                        {review.review}
                    </td>
                </tr>
                </tbody>
                </>)
                } 
            </table>
        </div>
    );
};

export default ReviewTable;