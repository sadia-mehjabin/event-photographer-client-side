import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const AddReview = ({data}) => {
    const {user} = useContext(AuthContext)
    

    const handleAddReview = event => {
        event.preventDefault()
        const form = event.target;
        const serviceName = data.name;
        const review = form.review.value;
        const name = form.name.value;
        
        const newReview = {
            name,
            serviceName, 
            review
        }
        
        fetch('http://localhost:5000/review', {
            method : 'POST',
            headers : {
                'content-type': 'application/json',
            },
            body : JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('added successfully')
                form.reset()
            }
        })
        .catch(error => console.error(error))

    }

    return (
        <div className='bg-pink-200 rounded-lg w-3/4 mx-auto my-5 p-3'>
            <h2 className='text-3xl font-bold text-center'>Add Review for {data.name}</h2>
            {
                user? <>
                <form onSubmit={handleAddReview} className='flex flex-col p-3' >
                <input name="name" type="text" placeholder="Your Full Name" className="input input-bordered w-full my-3 " required />
                <textarea name="review" className="textarea textarea-primary my-3 p-5" placeholder="type yor review" required></textarea>
                <button type="submit" className='btn btn-success' >Place New Review</button>
                </form>
                </>
                : <>
                <h2 className='text-3xl text-primary font-semibold m-5 text-center'>you have to login for add review. please log in.</h2>
                <div className='flex justify-center'>
                <Link to={'/login'}><button className='btn btn-primary'>Login</button></Link>
                </div>
                </>
            }
        </div>
    );
};

export default AddReview;