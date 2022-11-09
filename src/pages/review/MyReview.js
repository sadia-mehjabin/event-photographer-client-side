import React, { useContext, useState } from 'react';
import { json, Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyReview = () => {
    const {user} = useContext(AuthContext)
    const reviews = useLoaderData()
    const [myReview, setMyReview]  = useState(reviews)

    const handleDelete = (id) => {
        const agree = window.confirm('are you sure to delete?')

        if(agree){
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                const restReview = reviews.filter(rev => rev._id !== id)
                setMyReview(restReview)
                toast("deleted successfully")
                if(restReview.length === 0){
                    setMyReview('')
                }
                }
            })

        }
    }

    const handleEditReview = id => {
        fetch(`http://localhost:5000/review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(myReview)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
             <div className="w-full m-5">
            <table className="table w-full "> 
                <thead>
                <tr>
                    <th>image & Name</th>
                    <th>service name</th>
                    <th>review</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                {
                    myReview.map(review => <>
                    <tbody>
                <tr>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={user?.photoURL}/>
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{review.name}</div>
                        </div>
                    </div>
                    </td>
                    <td>
                        {review.serviceName}
                    </td>
                    <td>
                        {review.review}
                    </td>
                    <td>
                    <Link>
                    <button className="btn btn-success btn-xs" onClick={() => handleEditReview(review._id)}>Edit</button>
                    </Link>
                    </td>
                    <th>
                    <button className="btn btn-danger btn-xs" onClick={() => handleDelete(review._id)}>Delete</button>
                    <ToastContainer />
                    </th>
                </tr>
                </tbody>
                </>)
                } 
            </table>
        </div>
        </div>
    );
};

export default MyReview;