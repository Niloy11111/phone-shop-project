import React, { useEffect, useState } from 'react';
import Favorite from '../Favorite/Favorite';

const Favorites = (  ) => {
   
    const [favorites, setFavorites] = useState([]) ;

    const [noFound , setNoFound] = useState(false) ;

    const [isShow , setIsShow] = useState(false) ;

    useEffect( () => {
        const favoritesItems = JSON.parse(localStorage.getItem('favorites'))
        if(favoritesItems){
            setFavorites(favoritesItems)
        }
       else{
        setNoFound('NO Data Found')
       }
    } ,[])
 
  const handleRemove = () => {
    localStorage.clear() ;
    setFavorites([]) ;
    setNoFound('NO Data Found')
  }

  console.log(isShow)


    return ( 
<div className='flex justify-center'>

    {noFound ? <p>{noFound}</p> : 

    <div> {
        favorites.length > 0 &&  <button onClick={handleRemove} className='btn btn-success px-20' > Delete all items</button>  
      }
       <div className='container mx-auto grid grid-cols-4'>
            {
               isShow ?  favorites.map(favorite => <Favorite
                key={favorite.id}
                favorite={favorite}
                >
                </Favorite>) :

favorites.slice(0, 2).map(favorite => <Favorite
    key={favorite.id}
    favorite={favorite}
    >
    </Favorite>)
            }
        </div>
      
      {
        favorites.length > 2 &&   <button onClick={() => setIsShow(!isShow)} className='btn btn-success px-20'> {isShow ? 'See less' : 'See More'}  </button>  
      }
      
      </div>
    
    }

       </div>
    
    );
};

export default Favorites;<h2>Favorites</h2>