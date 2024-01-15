import React from 'react';

import Phone from '../Phone/Phone';

const Phones = ({phones}) => {

   

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-bold text-center'>Our Phones Collection</h2>

            <div className='grid grid-cols-4 gap-8'>
                {
                 phones.map(phone => <Phone
                 key={ phone.id}
                    phone={phone}
                 ></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;