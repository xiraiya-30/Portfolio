import React from "react";
import CIcon from '@coreui/icons-react';
import * as icon from "@coreui/icons"
import { Tooltip } from "@material-tailwind/react";
import { FaReact } from "react-icons/fa6";
import { SiAnaconda, SiArduino, SiGit, SiJupyter, SiMongodb, SiPandas, SiPycharm, SiVite } from "react-icons/si";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiStreamlit } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { BsDatabase, BsGithub } from "react-icons/bs";
import { DiMysql } from "react-icons/di";
import { BiLogoGithub } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { CgPacman } from "react-icons/cg";


export default function Skills() {
    const languages = [
        {
            label: "Python",
            value: "cibPython",
        },
        {
            label: "C",
            value: "cibC",
        },
        {
            label: "Java Script",
            value: "cibJavascript",
        },
        {
            label: "Java",
            value: "cibJava",
        },
        {
            label: "HTML",
            value: "cibHtml5",
        },
        {
            label: "CSS",
            value: "cibCss3",
        },
    ];

    const frameworks = [
        {
            label: "React",
            value: <FaReact className={reacticonstyle() } color="#000000" />,
        },
        {
            label: "Flask",
            value: <SiFlask className={reacticonstyle() } color="#000000" />,
        },
        {
            label: "Streamlit",
            value: <SiStreamlit className={reacticonstyle() } color="#000000" />,
        },
        {
            label: "Vite",
            value: <SiVite className={reacticonstyle() } color="#000000" />,
        },
        {
            label: "Tailwind",
            value: <RiTailwindCssFill className={reacticonstyle() } color="#000000" />,
        },
        
        {
            label: "Numpy",
            value: <SiNumpy className={reacticonstyle() } color="#000000" />,
        },
        {
            label: "Pandas",
            value: <SiPandas className={reacticonstyle() } color="#000000" />,
        },
        
    ];

    const tools =[
        {
            label: "Github",
            value: <BiLogoGithub className={reacticonstyle() } color="#000000"/>
        },
        {
            label: "Git",
            value: <SiGit className={reacticonstyle() } color="#000000"/>
        },

        {
            label: "VS Code",
            value: <VscVscode className={reacticonstyle() } color="#000000"/>
        },
        {
            label: "Pycharm",
            value: <SiPycharm className={reacticonstyle() } color="#000000"/>
        },
        {
            label: "Anaconda",
            value: <SiAnaconda className={reacticonstyle() } color="#000000"/>
        },
        {
            label: "Jupyter Notebook",
            value: <SiJupyter className={reacticonstyle() } color="#000000"/>
        },
        {
            label: "Arduino IDE",
            value: <SiArduino className={reacticonstyle() } color="#000000"/>
        },
    ];

    const backend = [
        {
            label: "Mongo DB",
            value: <SiMongodb className={reacticonstyle() } color="#000000" />
        },
        {
            label: "Firebase",
            value: <RiFirebaseFill className={reacticonstyle() } color="#000000" />
        },
        {
            label: "My SQL",
            value: <DiMysql className={reacticonstyle() } color="#000000" />
        },
        {
            label: "Chroma DB",
            value: <BsDatabase className={reacticonstyle() } color="#000000" />
        },
    ]
    return (
        <>

        {/* To Show  the Languages */}
        <div className=" justify-center align-middle mt-8 md:mt-0 items-center flex flex-col">
        <div className="align-middle  justify-center m-2 p-2 md:p-4 md:m-4 items-center flex flex-col w-fit">
            <div className="flex items-center ]">
            <CgPacman className="size-10 opacity-85" color="#ffffff"/>
            <h1 className="text-white  text-3xl p-4 my-1">Languages</h1>
            </div>
            <div className="flex justify-center flex-wrap ">
                {languages.map(({label,value}) => 
                    (<CustIcon key={value} iconName={value} tooltip_content={label} />
                        )) }

            </div>
        </div>

        <br />
        
        {/* To display the frameworks known */}
        <div className="align-middle   justify-center m-2 p-2 md:p-4 md:m-4 items-center flex flex-col  w-fit">
        <div className="flex items-center ]">
            <CgPacman className="size-10 opacity-85" color="#ffffff"/>
            <h1 className="text-white  text-3xl p-4 my-1">Frameworks</h1>
            </div>
            <div className="flex px-5 justify-center flex-wrap">
                
                {frameworks.map(({label,value}) => (
                    <Tooltip key={value} content={label} placement="bottom">
                        <div className="flex">
                            {value }
                        </div>
                    </Tooltip>
                )) }

            </div>
        </div>
            <br />


            <div className="align-middle justify-center m-2 p-2 md:p-4 md:m-4 items-center flex flex-col  w-fit">
            <div className="flex items-center ]">
            <CgPacman className="size-10 opacity-85" color="#ffffff"/>
            <h1 className="text-white  text-3xl p-4 my-1">Tools</h1>
            </div>
            <div className="flex px-5 justify-center flex-wrap">
                
                {tools.map(({label,value}) => (
                    <Tooltip key={value} content={label} placement="bottom">
                        <div className="flex">
                            {value }
                        </div>
                    </Tooltip>
                )) }

            </div>
        </div>
            <br />

            <div className="align-middle justify-center m-2 p-2 md:p-4 md:m-4 items-center flex flex-col w-fit">
            <div className="flex items-center ">
            <CgPacman className="size-10 opacity-85" color="#ffffff"/>
            <h1 className="text-white text-3xl p-4 my-1">Backend</h1>
            </div>
            <div className="flex px-5 justify-centre flex-wrap ">
                
                {backend.map(({label,value}) => (
                    <Tooltip key={value} content={label} placement="bottom">
                        <div className="flex ">
                            {value }
                        </div>
                    </Tooltip>
                )) }

            </div>
        </div>
            <br />     
        

    
                
                    

                        
                    


        

        </div>
        </>
    );
}

const CustIcon = ({ iconName , tooltip_content }) => {
    return (
        <div>
        <Tooltip content={tooltip_content} placement="bottom">
            <CIcon icon={icon[iconName]} className={reacticonstyle() } color="#000000" />
        </Tooltip>

        </div>
    );
};

function reacticonstyle () {
    return ("w-7 h-7 shrink mx-[4vw] my-[1vh] hover:scale-110 animate-wiggle md:w-9 md:h-9 ")
}

