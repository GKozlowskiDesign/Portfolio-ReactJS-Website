import React from 'react';

const About = () => {

  return (
  <div name="about" className='w-full p-8 pt-20 pb-20 text-white'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

    <div>
        <p className='text-xl mt-10'>
        In January 2021, I joined my university's branch of the Association of Information Technology Professionals 
        (AITP) as a Project Lead Developer. Leading a team, we designed and developed a custom application UI and UX, 
        creating specialized content and documentation. Our project focused on developing a Covid-19 vaccination web 
        application to assist the elderly and others. We worked diligently, adopting an agile approach to beat the 
        state of Connecticut and gained recognition from major news agencies.
        </p>
        <p className='text-xl mt-4'>
        In May 2021, I obtained a distinguished bachelor's degree in Business-Information-Systems, enhancing my 
        technological skills and cultivating leadership and analytical thinking. Shortly after graduating, I worked 
        as a Marketing Technology Specialist for a large law firm. After eight months, I realized the need to transition 
        into a more technically focused or developer-friendly position.
        </p>
        <p className='text-xl mt-4'>
        In 2022-2023, I worked as a Technical Project Consultant for a startup venture backed by Arcline Investments 
        and later joined Comcast. These roles involved developing bespoke industrial ERP systems and mobile applications 
        for elevator companies, as well as coordinating telecom infrastructure projects. Leveraging SaaS technologies, 
        I streamlined processes, facilitated joint ventures, and provided comprehensive status reports.
        </p>
        <p className='text-xl mt-4'>
        In 2023, I earned the AWS Certified Cloud Practitioner certification, demonstrating my proficiency in cloud 
        technologies. As an independent developer, I actively engage in projects utilizing technologies like React 
        Native, Tailwind CSS, MERN stack, Vite, MySQL, NoSQL, and AWS services. My GitHub repository showcases my 
        hands-on experience and growth as a developer, specializing in building Full-Stack web applications integrating
         NoSQL, MySQL, and cloud technologies.
        </p>
    </div>
  </div>
  </div>
  );
};

export default About;
