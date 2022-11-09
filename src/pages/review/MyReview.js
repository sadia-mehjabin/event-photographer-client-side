import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
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
                    
                //    <div className="toast toast-top toast-end">
                //         <div className="alert alert-info">
                //             <div>
                //             <span>delete successfully.</span>
                //             </div>
                //         </div>
                //     </div>
                const restReview = reviews.filter(rev => rev._id !== id)
                setMyReview(restReview)
                toast("deleted successfully")
                }
            })

        }
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
                    <button className="btn btn-success btn-xs">Edit</button>
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