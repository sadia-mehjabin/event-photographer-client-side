import React from 'react';

const AddReview = () => {
    
    const handleAddReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const serviceName = form.serviceName.value;
        const review = form.review.value;
        
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
        <div className='bg-pink-200 rounded-lg w-1/4 mx-auto my-5 p-3'>
            <h2 className='text-3xl font-bold text-center'>Add A Review</h2>
            <form onSubmit={handleAddReview} className='flex flex-col p-3' >
            <input name="name" type="text" placeholder="Your Full Name" className="input input-bordered w-full my-3 " required />
            <input name="serviceName" type="text" placeholder="Service Name" className="input input-bordered w-full my-3 " required />
            <textarea name="review" className="textarea textarea-primary my-3 p-5" placeholder="type yor review" required></textarea>
            <button type="submit" className='btn btn-success'>Place New Review</button>
            </form>
        </div>
    );
};

export default AddReview;