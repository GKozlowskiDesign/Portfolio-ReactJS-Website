import React from 'react';
import AWS from '../assets/image.png'

const Certifications = () => {

  return (
  <div name="home" className='w-full bg-gray-900 pt-10 pb-10'>
          
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full p-2 md:flex-row'>
 
        <div className='flex flex-col justify-center h-full'>
            
           <a href="https://www.credly.com/badges/82c0c5bd-b30b-4bcd-9e12-06ba4d0887df/linked_in?t=rwkg5q"><img src={AWS} alt="My Profile" class="rounded-xl"
            className="rounded-xl mx-auto w-2/6 lg:w-3/6" 
            ></img></a>
          
        </div>
    
    </div>
    
  </div>
  );
};

export default Certifications;