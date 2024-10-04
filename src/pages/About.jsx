import avatar from "../assets/avatar.png";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { cilCloudDownload } from '@coreui/icons'; // Import the cilCloudDownload icon
import React from 'react';
import { Tooltip } from "@material-tailwind/react";

const openLink = (source) => {
    window.open(source, '_blank');
}

const downloadResume = () => {
    const resumeUrl = "/Portfolio/src/assets/resume.pdf"; // Replace with actual resume path
    window.open(resumeUrl, '_blank');
}

export default function About() {
    return (
        <div className="flex justify-center items-center px-6 md:px-20 h-auto md:h-screen bg-deep-orange-600">
            <div className="flex flex-col md:flex-row justify-center sm:align-middle h-screen ">

            <div className="w-vw flex animate-pop-down justify-center items-center order-1 md:order-2 mt-5 md:mt-0">
                <img className="w-44 md:w-[400px] " src={avatar} alt="Profile Photo" />
            </div>
            <div className="w-full animate-pop-left md:w-1/2 flex flex-col font-sans font-black py-5 justify-center items-center md:items-start order-2 md:order-1">
                <h1 className="text-black text-2xl md:text-4xl ">Hi, I'm Srivarsen,</h1>
                <br />
                <p className="text-gray-200 opacity-80 text-[25px] sm:text-xl md:text-2.2xl text-center font-sans md:text-left tracking-wider">
                    On my way to defy the limits of today's tech. Because why settle for the ordinary when you can code the future? Wubba lubba dub dub! 
                </p>
                <br />
                <div className="flex justify-center md:justify-start space-x-6 w-full">
                    <CustIcon iconName="cibLeetcode" link="https://leetcode.com/u/mob_411/" tooltip_content='Leetcode'/>
                    <CustIcon iconName="cibGithub" link="https://github.com/xiraiya-30" tooltip_content='Github'/>
                    <CustIcon iconName="cibLinkedinIn" link="https://linkedin.com/in/srivarsen-r" tooltip_content='LinkedIn' />
                </div>
                <br />
                
                {/* Resume download button */}
                <div className="hover:cursor-pointer h-fit w-fit hover:scale-105 hover:shadow-lg hover:drop-shadow-2 hover:shadow-gray-900 rounded-xl shadow-md shadow-gray-800" onClick={downloadResume}>
                    <div className="flex items-center justify-center h-12 md:h-14 bg-black text-white rounded-xl px-4">
                        <span className="mr-2">Resume</span>
                        <CIcon icon={cilCloudDownload} className="w-6 h-6" />
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
}

const CustIcon = ({ iconName, link, tooltip_content }) => {
    return (
        <Tooltip content={tooltip_content} placement='bottom'>
            <div className="hover:cursor-pointer h-fit w-fit hover:scale-105 hover:shadow-lg hover:drop-shadow-2 hover:shadow-gray-900 rounded-xl shadow-md shadow-gray-800" onClick={() => openLink(link)}>
                <CIcon icon={icon[iconName]} className="w-7 h-7 m-2 md:w-9 md:h-9" />
            </div>
        </Tooltip>
    );
};
