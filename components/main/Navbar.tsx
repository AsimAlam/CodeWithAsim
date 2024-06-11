import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-2 md:px-10'>
        <a href='#' className='h-auto w-auto flex flex-row items-center'>
          <Image
            src="/Profile_Pic.jpeg"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className='font-bold ml-2 hidden sm:block text-gray-300'>
            Asim Alam
          </span>
        </a>
        <div className='hidden md:flex items-center justify-between flex-grow max-w-md'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200'>
            <a href='#' className='cursor-pointer'>About me</a>
            <a href='#skills' className='cursor-pointer'>Skills</a>
            <a href='#projects' className='cursor-pointer'>Projects</a>
          </div>
        </div>
        <div className='flex flex-row gap-2 md:gap-5'>
          {Socials.map((social) => (
            <a href={social.href} key={social.name} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className='cursor-pointer'
              />
            </a>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-center md:hidden mt-2'>
        <div className='flex items-center justify-between w-3/4 border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200'>
          <a href='#' className='cursor-pointer'>About me</a>
          <a href='#skills' className='cursor-pointer'>Skills</a>
          <a href='#projects' className='cursor-pointer'>Projects</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
