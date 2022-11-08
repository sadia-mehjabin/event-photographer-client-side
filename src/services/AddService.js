import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const AddService = () => {
    const {user} = useContext(AuthContext)

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
        console.log(newService)
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
            </form>
        </div>
    );
};

export default AddService;