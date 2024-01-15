import React from 'react';

const Favorite = ({favorite}) => {
    return (

        <div className='flex items-center'>
        <div>
        <img className='w-[90%]' src={favorite.image}></img>
        </div>

      <div>
      <h2>{favorite.brand_name}</h2>
      <h2>{favorite.phone_name}</h2>
      
      </div>
  </div>
    );
};

export default Favorite;