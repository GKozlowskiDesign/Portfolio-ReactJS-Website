import React from "react";

import AWS from "../assets/Code/AWS.png"
import MONGO from "../assets/Code/MONGODB.png"
import SQL from "../assets/Code/MYSQL.png"
import GIT from "../assets/Code/GIT.png"
import WIND from "../assets/Code/TAILWIND.png"
import NODE from "../assets/Code/NODE.png"
import HTML from "../assets/Code/HTML.png"
import CSS from "../assets/Code/CSS.png"
import REACT from "../assets/Code/REACT.png"
import JS from "../assets/Code/JS.png"
import GITHUB from "../assets/Code/GITHUB.png"
import AMP from "../assets/Code/AMPLIFY.png"
import IAM from "../assets/Code/IAM.png"
import DYN from "../assets/Code/DYNAMODB.png"
import NEXT from "../assets/Code/NEXT.png"



const Experience = () => {

    const tech = [
        {
        id: 1,
        src: AWS,
        title: 'AWS',
        style: 'shadow-orange-500'
        },
        {
        id: 2,
        src: WIND,
        title: 'Tailwind',
        style: 'shadow-blue-500'
        },
        {
        id: 3,
        src: NODE,
        title: 'NodeJs',
        style: 'shadow-green-500'
        
        },
        {
        id: 4,
        src: SQL,
        title: 'MySQL',
        style: 'shadow-blue-500'
        },
        {
        id: 5,
        src: CSS,
        title: 'CSS',
        style: 'shadow-blue-600'
        },
        {
        id: 6,
        src: REACT,
        title: 'ReactJS',
        style: 'shadow-blue-400'
       
        },
        {
        id: 7,
        src: MONGO,
        title: 'MongoDB',
        style: 'shadow-green-500'
        },
        {
        id: 8,
        src: DYN,
        title: 'HTML',
        style: 'shadow-blue-900'
       
        },
        {
        id: 9,
        src: JS,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
        },
        {
        id: 10,
        src: GIT,
        title: 'GIT',
        style: 'shadow-orange-800'
        },
        {
        id: 11,
        src: HTML,
        title: 'HTML',
        style: 'shadow-red-900'
        },
           {
        id: 12,
        src: NEXT,
        title: 'NEXTJs',
        style: 'shadow-gray-900'
        },
           {
        id: 13,
        src: AMP,
        title: 'AWS Amplify',
        style: 'shadow-orange-800'
        },
           {
        id: 14,
        src: GITHUB,
        title: 'GitHub',
        style: 'shadow-indigo-800'
        },
             {
        id: 15,
        src: IAM,
        title: 'NextJs',
        style: 'shadow-red-800'
        },
    ]

  return(

  <div name="experience" className="w-full  pt-40 pb-20">
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
    <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
        <p className="py-6">These are technolgoies are use frequently</p>
    </div>
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
    {
        tech.map(({id, src, title, style}) => (
        <div
        key={id} 
        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img className="w-1/4 mx-auto" src={src} alt="" />
            <p className="mt-4">{title}</p>
        </div>
        ))
    }
    </div>
    </div>
  </div>
  )
};

export default Experience;
