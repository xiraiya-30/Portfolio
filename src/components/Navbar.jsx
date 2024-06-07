
import React from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import About from "./About";

export default function TabsCustomAnimation() {

  const data = [
    {
      label: "About",
      value: "about",
      component: <About />,
    },
    {
      label: "Skills",
      value: "skills",
      component: <About />,
    },
    {
      label: "Timeline",
      value: "timeline",
      component: <About />,
    },
    {
      label: "Projects",
      value: "projects",
      component: <About />,
    },
    {
      label: "Contact",
      value: "contact",
      component: <About />,
    },
  ];

  return (
    <Tabs
      id="custom-animation"
      value="about"
      className="h-auto min-h-screen flex flex-col"
    >
      <TabsBody
        className="flex-grow justify-centre align-middle "
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, component }) => (
          <TabPanel key={value} value={value} className="p-0">
            {component}
          </TabPanel>
        ))}
      </TabsBody>
      <div className="flex justify-center relative z-50">

      <div className="absolute bottom-0 size-auto mb-4  rounded-xl md:w-[95vw] lg:w-auto bg-white bg-opacity-40 backdrop-blur-md animate-pop-up">
        <TabsHeader
          className="relative bg-transparent"
          indicatorProps={{
            className: "shadow-xl rounded-xl justify-centre   ",
          }}

        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              className="w-full sm:w-[11vw] md:w-44 font-nothing-45 text-center text-base sm:text-[9px] md:text-sm rounded-xl lg:hover:bg-gray-200 hover:scale-105 lg:hover:bg-opacity-50 lg:hover:shadow-lg m-2 sm:mx-[14px] h-10 sm:h-10"
              value={value}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </div>
      </div>
    </Tabs>
  );
}
