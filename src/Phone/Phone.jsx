import React from 'react';
import { NavLink } from 'react-router-dom';

const Phone = ({phone}) => {

    const {image, id, phone_name, brand_name, price, rating} = phone ;

  
    return (
        <div className='p-6 shadow-sm'>
            <div className='border rounded-lg'>
                <img className='mx-auto w-[350px]' src={image}></img>
            </div>
            <p>{rating}</p>
            <h3 className='text-bold'> {phone_name}</h3>
            <div className='flex justify-between'>
            <h3 className='text-bold'> {brand_name}</h3>
            <h3 className='text-bold'> {price}</h3>
            </div>
           <NavLink to={`/phoneDetails/${id}`}><button  className='btn btn-primary w-full'>See Details</button></NavLink>
            
        </div>
    );
};

export default Phone;