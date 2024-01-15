import React, { useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';



const PhoneDetails = () => {

    // const [configuration, setConfiguration] = useState([]) ;

    const eachSingleDetails = useLoaderData() ; 

    const params = useParams() ;
   
    const id = params.id ;
    // console.log(eachSingleDetails)
   
    const fake = eachSingleDetails.find(each => each.id === params.id)


    const handleAddToFavorite = () => {
       const addedFavoritesArray = [] ;

       const favoritesItems = JSON.parse(localStorage.getItem('favorites'))
       
       if(!favoritesItems){
        addedFavoritesArray.push(fake)
        localStorage.setItem('favorites', JSON.stringify(addedFavoritesArray)) 
       }
       else{

        const isExist = favoritesItems.find(phone => phone.id === id)

        if(!isExist){
            addedFavoritesArray.push(...favoritesItems, fake)
            localStorage.setItem('favorites', JSON.stringify(addedFavoritesArray)) 

            swal("Good job!", "You clicked the button!", "success");
        }

        else{
            swal("Sorry !", "NO duplicate !", "error");
        }
       }

       
    }

    return (
        <div className='w-1/3 mx-auto flex items-center'>
              <div>
              <img className='w-[350px]' src={fake.image}></img>
              </div>


            <div>
            <h2>{fake.brand_name}</h2>
            <h2>{fake.phone_name}</h2>

            <button onClick={handleAddToFavorite} className='px-6 btn btn-success'> ADD TO FAVORITES </button>

            
            </div>
        </div>
    );
};

export default PhoneDetails ;