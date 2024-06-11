import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxMagicWand,
    RxMagnifyingGlass,
    RxTwitterLogo,
} from "react-icons/rx";

import { Bio } from '../../data/Constant';

import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[-1]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaLinkedin />
                            <span className="text-[15px] ml-[6px]">LinkedIn</span>
                        </a>
                        <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                        <a href={Bio.discord} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <a href={Bio.twitter} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaTwitter />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </a>
                        <a href={Bio.google_cloud} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxMagnifyingGlass />
                            <span className="text-[15px] ml-[6px]">Google Cloud</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Learning about me</span>
                        </p>
                        <a href="mailto:asimalam8@gmail.com" className="flex flex-row items-center my-[15px] cursor-pointer text-gray-300 hover:underline">
                            <span className="text-[15px] ml-[6px]">asimalam8@gmail.com</span>
                        </a>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; CodeWithAsim 2024 Inc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
