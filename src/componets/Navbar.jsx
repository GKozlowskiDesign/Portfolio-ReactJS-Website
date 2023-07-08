import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import GaryK from '../assets/GaryK-2.jpg';
import { Link } from "react-scroll";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    
    const links =[
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "portfolio"
        },
        {
            id: 4,
            link: "experience"
        },
        {
            id: 5,
            link: "contact"
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white  fixed">
            <div className='pt-8 mx-auto items-center p-6 pl-20 lg:pl-1 lg:ml-10 rounded-xl  ring-gray-900'>
            <img src={GaryK} alt="My Profile" class="rounded-xl"
            className="rounded-xl mx-auto w-2/6 lg:w-1/6" 
            />
           
        </div>

            <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
                <li 
                key={id} 
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
               <Link to={link} smooth duration={500}>{link}</Link>
                </li>
                ))}
            </ul>
            

            <div onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">

                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
        
            {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0
            w-full h-screen bg-black text-gray-500">

                {links.map(({ id, link }) => (
                <li 
                key={id} 
                className="px-4 cursor-pointer capitalize py-6 text-3xl">
               <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                </li>
                ))}
            </ul>
 )}
        </div>
    );
};

export default Navbar;