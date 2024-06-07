
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
      <div className="flex justify-center relative z-40">

      <div className="absolute bottom-0 size-auto mb-4 rounded-xl bg-white bg-opacity-40 backdrop-blur-md">
        <TabsHeader
          className="relative p-0 flex flex-wrap justify-center bg-transparent"
          indicatorProps={{
            className: "shadow-xl rounded-xl ",
          }}

        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              className="w-full sm:w-40 md:w-60 font-nothing-45 text-center text-base sm:text-sm md:text-lg rounded-xl hover:bg-gray-200 hover:scale-105 hover:bg-opacity-50 hover:shadow-lg m-2 sm:m-3 h-12 sm:h-16"
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