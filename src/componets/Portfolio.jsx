import React from "react";
import BSWEB from "../assets/portfolio/developments/BS_WEB.png";
import MTAPP from "../assets/portfolio/developments/MT_APP.png";
import MTERP from "../assets/portfolio/developments/MT_ERP.png";
import MTWEB from "../assets/portfolio/developments/MT_WEB.png";
import NODE from "../assets/portfolio/developments/NODE_MYSQL.png";
import PR1 from "../assets/portfolio/developments/PR1_WEB.png";
import SCL from "../assets/portfolio/developments/SCL_APP.png";
import HLTH from "../assets/portfolio/developments/HLTH_WEB.png";
import IAM from "../assets/portfolio/developments/AWS_IAM.png";
import AI from "../assets/portfolio/developments/AI_APP.png";
import PR2 from "../assets/portfolio/developments/PR2_WEB.png";
import SDK from "../assets/portfolio/developments/NODE_SDK.png";

import {Routes} from "../routes";



const Portfolio = () => {

    const portfolios = [
     
        {
            id: 1,
            src: SDK,
            href: Routes.SDK
        },
        {
            id: 2,
            src: PR2,
            href: Routes.PR2
        },
        {
            id: 3,
            src: AI,
            href: Routes.AI
        },
        {
            id: 4,
            src: IAM,
            href: Routes.IAM
        },
        {
            id: 5,
            src: BSWEB,
            href: Routes.BSWEB
        },
        {
            id: 6,
            src: SCL,
            href: Routes.SCL
         
        },
        {
            id: 7,
            src: NODE,
            href: Routes.NODE
    
        },
        {
            id: 8,
            src: MTWEB,
            href: Routes.MTWEB
        },
        {
            id: 9,
            src: MTERP,
            href: Routes.MTERP
        },
        {
            id: 10,
            src: PR1,
            href: Routes.PR1
        },
        {
            id: 11,
            src: HLTH,
            href: Routes.HLTH
        },
        {
            id: 12,
            src: MTAPP,
            href: Routes.MTAPP
           
        },
    ]

  return (
    <div name="portfolio" className="w-full text-white md:h-screen mb-40 mt-40 md:mt-64 pt-20 pb-40">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work right here!</p>
            </div>


           
               
                <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {   portfolios.map(({id, src, href}) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} className="rounded-md duration-200 hover:scale-105" alt="Business-Website" />
                    <div className="flex items-center justify-center">
                        <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105"><a href={href}>Repo</a></button>
                    </div>
                </div>
            
                ))
            }
</div>
            
        </div>
    </div>
  );
};

export default Portfolio;
