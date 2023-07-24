import React from 'react';
import Gary from '../assets/GaryK-1.jpg'

const Home = () => {

  return (
  <div name="home" className='w-full bg-gradient-to-b from-black  to-gray-900 pt-40 pb-40'>
          
          
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full p-10 md:flex-row'>
 
        <div className='flex flex-col justify-center h-full'>
            <h2 className='lg:text-8xl text-6xl font-bold text-white px-4 py-4'>Software Developer</h2>
      
          
        </div>
        <div className='px-12 py-12 m-4 p-4 rounded-xl  ring-gray-900'>
            <img src={Gary} alt="My Profile" class="rounded-xl"
            className="rounded-xl  border-2 mx-auto w-4/6 lg:w-3/6" 
            />
           
        </div>
    </div>



    
    
  </div>
  );
};

export default Home;
