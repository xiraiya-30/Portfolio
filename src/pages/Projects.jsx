import React, { useState } from "react";
import proj_avatar from "../assets/project_avatar.jpg";
import { Tooltip } from "@material-tailwind/react";
import { openLink } from "../components/simple components";

export default function Projects() {
    const [expanded, setExpanded] = useState(null);

    const handleClick = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const proj = [
            {
                name: 'Bluetooth based attendance system',
                img: proj_avatar,
                description: 'Easily mark attendance using Python and Bluetooth tech to scan nearby devices.',
                link: 'https://www.github.com'
            },
            {
                name: 'Chat bot using Gemini API',
                img: proj_avatar,
                description: 'Create a smart chat bot with Gemini API to handle queries effortlessly.',
                link: 'https://www.github.com'
            },
            {
                name: 'Chat bot using RAG & LLM',
                img: proj_avatar,
                description: 'Build an intelligent chat bot leveraging RAG and language models for better responses.',
                link: 'https://www.github.com'
            },
        ];
        


        

    return (
        <div className="flex justify-center w-screen min-h-screen h-screen p-4 md:p-8 lg:p-10  ">
            <h2 className="lg:text-3xl text-2xl font-black p-3 m-4 fixed md:top-8 lg:top-14 text-black">PROJECTS</h2>
            <div className="w-full flex flex-col lg:flex-row p-6  items-center justify-center mb-16 overflow-hidden lg:m-10 lg:mb-32">
                {proj.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => handleClick(index)}
                        onMouseClick={() => handleClick(index)}
                        onMouseLeave={() => handleClick(-1)}
                        className={` bg-gray-200 bg-opacity-60 rounded-2xl w-96 max-w-fit shadow-2xl shadow-black p-5 transition-all duration-300 h-64 md:h-72 lg:h-96 flex items-center justify-center ${
                            expanded === index ? 'flex-grow scale-100' : 'flex-grow-0 scale-75'
                        }` }
                        onClick={index === expanded ?() => openLink(item.link) : ""}
                    >
                        <Tooltip content='Click to open in Github !' className={`${index === expanded ? 'visible' : ''} `}>
                        <div className={`relative h-full w-full flex justify-center items-center flex-col ${index===expanded ? "cursor-pointer" : ""}`}>

                            <img src={item.img} alt={item.name} className={`max-w-fit w-full h-full rounded-xl ${index === expanded ? "brightness-7" : "brightness-50"}`} />
                            <p className={`${index===expanded ? "visible":"hidden"} absolute m-4 bg-gray-200 delay-1000 animate-pop-up bg-opacity-60 p-4 rounded-xl font-bold text-black backdrop-blur-sm bottom-16 `}>{item.description}</p>

                            <div className={`absolute w-full h-16 flex justify-center items-center transition-all duration-500 ${
                                expanded === index ? 'bottom-2' : 'bottom-1/2 transform translate-y-1/2'
                            }`}>
                                
                                <div className={` h-fit text-center cursor-pointer flex flex-col-reverse items-center text-xl font-bold backdrop-blur-sm bg-deep-orange-600 rounded-xl p-2 px-6 m-2 ${index === expanded ? "absolute animate-pop-up" : "backdrop-brightness-200 bg-opacity-80"}`} >
                                    
                                        <p className={`text-white font-bold ${index === expanded ? "": "lg:text-2xl text-xl" } `}>
                                            {item.name}
                                        
                                        </p>

                                </div>
                            </div>
                        </div>
                        </Tooltip>
                    </div>
                ))}
            </div>
        </div>
    );
}
