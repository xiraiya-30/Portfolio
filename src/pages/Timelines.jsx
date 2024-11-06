import * as React from 'react';
import { IoMdSchool } from 'react-icons/io';
import { MdOutlineWork } from 'react-icons/md';

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";


export default function Timelines() {

    const [activeTab, setActiveTab] = React.useState("education");
  const data = [
    {
      label: "EDUCATION",
      value: "education",
      desc: <EducationTimeline />,
    },
    {
      label: "WORK",
      value: "work",
      desc: <WorkTimeline />,
    },
  ];
  return (
    <div className="flex justify-center mb-4">

    <Tabs value={activeTab} className="min-w-fit w-2/3 m-4 mt-10 ">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      
      <TabsBody >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc }
          </TabPanel>
        ))}
      </TabsBody>

      
    </Tabs>
    </div>
  );

}

    
                
    


const education_data = [
    {
        institution: 'Nandha Engineering College',
        course: 'B.Tech - Artificial Intelligence and Data Science',
        year: 'OCT 2021 - MAY 2025',
        percentage: '7.2 CGPA'
    },
    {
      institution: 'Navarasam Matriculation Higher Secondary School',
      course: 'HSC',
      year: 'JUN 2019 - MAY 2021',
      percentage: 'PERCENTAGE: 86%'
    },
    {
      institution: 'Navarasam Matriculation Higher Secondary School',
      course: 'SSLC',
      year: 'JUN 2018 - MAY 2019',
      percentage: 'PERCENTAGE: 79%'
    },
];

const work_data = [
    {
        company: 'iGrad Labs',
        jobrole: 'Machine Learning Engineer - intern',
        duraion: 'OCT 2024 - PRESENT',
    },
    
    
];

const EducationTimeline = () => {
    return (
        <>
            <div className=" h-fit p-3 m-3 flex justify-center">
                
                <div className="grid grid-cols-9 w-fit ">


                    {education_data.map((data, index) => (
                        
                        <div className={`flex shadow-sm bg-white bg-opacity-75 backdrop-blur-md m-4 lg:m-0 p-4 rounded-xl col-span-9 w-80 lg:w-96 md:${index%2 === 0 ? "col-start-1 " : " col-start-1 lg:col-start-6 lg:flex-row-reverse "}`}>
                                    
                            <div className=''>
                                <h5 className="w-100 text-black text-[18px] font-extrabold ">{data.institution}</h5>
                                <h6 className="font-black mb-1">{data.course}</h6>
                                <p className="text-right text-black font-semibold">{data.percentage}</p>
                                <p className="card-text text-[14px]   text-right ">{data.year}</p>
                            </div>
                                        
                            <div className='relative top-5 lg:-top-3 right-4 lg:right-0 lg:left-1'>
                                    <div className={`w-2 absolute border-4 border-black border-dashed h-52 lg:h-[10.25rem] -bottom-4 lg:-bottom-[1.6rem] ${index===0 ? "right-[20.65rem] lg:left-[3.5rem]" : ""}  ${index%2 ==0 && index >0 ? " right-[21rem] lg:left-[3.50rem]" : "right-[21rem] lg:right-[4rem]"} `}>
                                    </div>

                                    <div className={`absolute border-2 border-black h-6 w-6 flex justify-center items-center rounded-full -top-6 lg:top-1 ${index===0 ? "right-[18.8rem] lg:left-[1.8rem]" : ""} ${index%2 === 0 && index >0 ? "right-[18.8rem] lg:left-[1.8rem]" : "right-[18.8rem] lg:right-[2.3rem]"}  `}>
                                        <IoMdSchool size={24} color='#000000' />
                                    </div>
                            </div>
                                    
                        </div>
                    ))}
            </div>
        </div>
        </>
    );
};

const WorkTimeline = () => {
    return (
        <>
            <div className={ `h-fit p-3 m-3 flex justify-center `}>
                
                <div className="grid grid-cols-9 ">


                    {work_data.map((data, index) => (
                        
                        <div className={`flex shadow-sm bg-white bg-opacity-75 backdrop-blur-md m-4 lg:m-0 p-4 rounded-xl col-span-9 w-80 lg:w-96 md:${index%2 === 0 ? "col-start-1 " : " col-start-1 lg:col-start-6 lg:flex-row-reverse "}`}>
                                    
                            <div className=''>
                                <h5 className="w-100 text-black text-[18px] font-extrabold ">{data.company}</h5>
                                <h6 className=" mb-1">{data.jobrole}</h6>
                                <br />
                                <p className="card-text text-[14px]   text-right ">{data.duraion}</p>
                            </div>
                                        
                            <div className='relative top-5 lg:-top-3 right-4 lg:right-0 lg:left-6'>
                                    <div className={`w-2 absolute border-4 border-black border-dashed h-52 lg:h-[9.25rem] -bottom-4 lg:-bottom-[1.6rem] ${index===0 ? "right-[20.65rem] lg:left-[5.5rem]" : ""}  ${index%2 ==0 && index >0 ? " right-[21rem] lg:left-[5.50rem]" : "right-[21rem] lg:right-[8.05rem]"} `}>
                                    </div>

                                    <div className={`absolute border-2 border-black h-6 w-6 flex justify-center items-center rounded-full -top-6 lg:top-1 ${index===0 ? "right-[18.8rem] lg:left-[0.7rem]" : ""} ${index%2 === 0 && index >0 ? "right-[18.8rem] lg:left-[0.7rem]" : "right-[18.8rem] lg:right-[3.6rem]"}  `}>
                                        <MdOutlineWork size={17} color='#000000' />
                                    </div>
                            </div>
                                    
                        </div>
                    ))}
            </div>
        </div>
        </>
    );
};
    
    
    
                                    
            
                                        
    

  


