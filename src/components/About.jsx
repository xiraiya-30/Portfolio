import avatar from "../assets/avatar.png";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import React from 'react';

const openLink = (source) => {
    window.open(source, '_blank');
}

export default function About() {
    return (
        <div className="flex justify-center items-center px-6 md:px-20 h-auto md:h-screen bg-deep-orange-600">
            <div className="flex flex-col md:flex-row justify-center sm:align-middle h-screen ">

            <div className="w-vw flex animate-pop-down justify-center items-center order-1 md:order-2 mt-5 md:mt-0">
                <img className="w-44 md:w-[400px]" src={avatar} alt="Profile Photo" />
            </div>
            <div className="w-full animate-pop-left md:w-1/2  flex flex-col font-nothing-47 font-black py-5 justify-center items-center md:items-start order-2 md:order-1">
                <h1 className="text-black text-2xl md:text-4xl ">Hi, I'm Srivarsen,</h1>
                <br />
                <p className="text-gray-200 opacity-80 text-[25px] sm:text-xl md:text-2.2xl text-center font-nothing-47 md:text-left tracking-wider">
                    A passionate AI&DS student blending the power of full stack development with advanced AI and machine learning to create innovative solutions for tomorrow's challenges.
                </p>
                <br />
                <div className="flex justify-center md:justify-start space-x-6 w-full">
                    
                <CustIcon iconName="cibLeetcode" link="https://leetcode.com/u/mob_411/" />
                <CustIcon iconName="cibGithub" link="https://github.com/xiraiya-30" />
                <CustIcon iconName="cibLinkedinIn" link="https://linkedin.com/in/srivarsen-r" />

                </div>
            </div>
            </div>
        </div>
    );
}


const CustIcon = ({ iconName, link }) => {
    return (
        <div className="hover:cursor-pointer h-fit w-fit hover:scale-105 hover:shadow-lg hover:drop-shadow-2 hover:shadow-gray-900 rounded-xl shadow-md shadow-gray-800" onClick={() => openLink(link)}>
            <CIcon icon={icon[iconName]} className="w-7 h-7 m-2  md:w-9 md:h-9" />
        </div>
    );
};


