import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import useTitle from '../hooks/UseTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const {user} = useContext(AuthContext)
    useTitle('Add service')
    
    const handleAddService = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;
        
        const newService = {
            name,
            img : image,
            price ,
            description
        }
        
        fetch('http://localhost:5000/services', {
            method : 'POST',
            headers : {
                'content-type': 'application/json',
            },
            body : JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast('added successfully')
                form.reset()
            }
        })
        .catch(error => console.error(error))

    }
    return (
        <div className='bg-yellow-200 rounded-lg w-1/4 mx-auto my-5 p-3'>
            <h2 className='text-3xl font-bold text-center'>Add A Service</h2>
            <form className=' flex flex-col p-3' onSubmit={handleAddService}>
            <input name="name" type="text" placeholder="Service Name" className="input input-bordered w-full my-3 " required />
            <input name="image" type="url" placeholder="Image url" className="input input-bordered w-full my-3" />
            <input name="price" type="text" placeholder="Type here Price" className="input input-bordered w-full my-3" />
            <textarea name="description" className="textarea textarea-primary my-3" placeholder="description"></textarea>
            <button type="submit" className='btn btn-success'>Place New Service</button>
            <ToastContainer />
            </form>
        </div>
    );
};

export default AddService;