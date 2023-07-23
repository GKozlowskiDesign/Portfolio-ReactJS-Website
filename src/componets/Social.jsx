import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { HiOutlineMail} from 'react-icons/hi';

const SocialLinks = () => {
    const links = [
        {
        id: 1,
        child: (
        <>
        Twitter <FaTwitter size={28} />
        </>
        ),
        href: 'https://twitter.com/GaryKozlowski1',
        },
        {
        id: 2,
        child: (
        <>
        GitHub <FaGithub size={25} />
        </>
        ),
        href: 'https://github.com/gkozlowskidesign',
        },
        {
        id: 3,
        child: (
        <>
        LinkedIn <FaLinkedin size={25} />
        </>
        ),
        href: 'https://www.linkedin.com/in/gary-kozlowski-825053138/',
        style: 'rounded-tr-md'
        },
        {
        id: 4,
        child: (
        <>
        Mail <HiOutlineMail size={25} />
        </>
        ),
        href: 'mailto:gkozlowskibusiness@outlook.com',        
        },
    ]

  return ( 
  <div className="lg:flex flex-col top-[45%] lg:top-[25%] left-0 pr-2 pb-4 pt-4 fixed bg-transparent rounded-md">
    <ul>
        {links.map(({id, child, href, style, download}) => (
        <li key={id} className={"flex justify-between items-center pr-5 pl-8 w-40 pt-8 pb-6 h-10  rounded-md  lg:h-16 ml-[-105px] hover:ml-[-4px] hover:rounded-md duration-300 bg-gray-500" + style}>
            <a href={href} 
                className='flex justify-between items-center w-full text-gray-400'
                download={download}
                target='_blank'
                rel="noreferrer">{child}
            </a>
        </li>
        ))}
    </ul>
  </div>
  )};

export default SocialLinks
