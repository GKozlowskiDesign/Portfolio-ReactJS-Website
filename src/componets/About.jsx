import React from 'react';

const About = () => {

  return (
  <div name="about" className='w-full p-8 pt-10 pb-20'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl text-black font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
    <div classname="text-black">
      {/* paragraph one */}
      <p className='text-xl mt-10'>
          As a Business Information Systems Graduate, Full-Stack Developer, and AWS Certified Cloud Practitioner, 
          I excel in navigating teams through technical challenges, cloud migration initiatives, workload architecture 
          examinations, and high-risk issue mitigation. My proficiency bridges the gap between technical and business dimensions.
      </p>
      {/* paragraph two */}
      <p className='text-xl mt-10'>
          I actively engage in personal projects, courses, and certifications utilizing a spectrum of technologies including MERN, 
         Vite, ReactJS, NodeJS, C#, Python, SQL, HTML, CSS, Tailwindcss, SaSS, MySQL, MongoDB, DynamoDB, NoSQL, IAM, Cyber 
         Security, AI, and assorted AWS services.
        </p>
      {/* paragraph three */}
      <p className='text-xl mt-10'>
          My GitHub repositories epitomize my dedication to continuous growth, perpetual learning, and professional advancement. 
         They showcase hands-on experience and adeptness in constructing secure, reliable projects with cloud technologies.
      </p>
    </div>
  </div>
  </div>
  );
};

export default About;
