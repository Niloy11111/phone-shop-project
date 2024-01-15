import React from 'react';
import Banner from '../HeaderSection/BannerSection/Banner';
import Phones from '../Phones/Phones';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {

    const phones = useLoaderData() ;

    return (

        <div className=''>

        
            

           <div className='container mx-auto'>
           <Banner></Banner>
           <Phones phones={phones}></Phones>
           </div>
        </div>
    );
};

export default HomePage;<h2>This is home page</h2>