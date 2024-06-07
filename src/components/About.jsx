import avatar from "../assets/avatar.png";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

const openLink = (source) => {
    window.open(source, '_blank');
}

export default function About() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-20 h-auto md:h-screen bg-deep-orange-600">
            <div className="flex justify-center all">

            <div className="w-fit flex justify-center items-center order-1 md:order-2 mt-5 md:mt-0">
                <img className="w-56 md:w-[600px]" src={avatar} alt="Profile Photo" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col font-nothing-47 font-black py-5 justify-center items-center md:items-start order-2 md:order-1">
                <h1 className="text-black text-3xl md:text-5xl ">Hi, I'm Srivarsen,</h1>
                <br />
                <p className="text-gray-200 opacity-80 text-[30px] md:text-3.2xl text-center font-nothing-47 md:text-left tracking-wider">
                    A passionate AI&DS student blending the power of full stack development with advanced AI and machine learning to create innovative solutions for tomorrow's challenges.
                </p>
                <br />
                <div className="flex justify-center md:justify-start space-x-6 w-full">
                    <div className="hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:drop-shadow-2 hover:shadow-gray-900 rounded-xl shadow-md shadow-gray-800 " onClick={() => openLink('https://leetcode.com/u/mob_411/')}>
                        <CIcon icon={icon.cibLeetcode} className="w-8 h-8 m-2 md:w-12 md:h-12 " />
                    </div>
                    <div className="hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:drop-shadow-2 hover:shadow-gray-900 rounded-xl shadow-md shadow-gray-800" onClick={() => openLink('https://github.com/xiraiya-30')}>
                        <CIcon icon={icon.cibGithub} className="w-8 h-8 m-2 md:w-12 md:h-12" />
                    </div>
                    <div className="hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:drop-shadow-2 hover:shadow-gray-900 rounded-xl shadow-md shadow-gray-800" onClick={() => openLink('https://linkedin.com/in/srivarsen-r')}>
                        <CIcon icon={icon.cibLinkedinIn} className="w-8 h-8 m-2 md:w-12 md:h-12" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
