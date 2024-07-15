"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/Constant';

function HeroContent() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center text-center md:text-start m-auto'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0'
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[13px]'>About Me</h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto mx-auto md:mx-0'
                >
                    <span>
                        Hi, I am<br />Asim Alam<br />
                        <div className='flex justify-center md:justify-start items-center text-2xl md:text-[32px]'>
                            I am a&nbsp;
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </div>
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-base md:text-lg text-gray-400 my-5 max-w-[600px] mx-auto md:mx-0'
                >
                    {Bio.description}
                </motion.p>
                <motion.a
                    href={Bio.resume}
                    target='display'
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto md:mx-0'
                >
                    Check Resume
                </motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center mt-10 md:mt-0'
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={450}
                    width={450}
                    className='max-w-full h-auto'
                />
            </motion.div>
        </motion.div>
    );
}

export default HeroContent;
