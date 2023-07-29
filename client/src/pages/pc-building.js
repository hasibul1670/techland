import React from "react";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";


import {
  BsCpu,
  BsDeviceSsd,
  BsKeyboard,
  BsMemory,
  BsMotherboard,
} from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { GiGreenPower } from "react-icons/gi";
import PCBuldingComponent from "../components/PCBuldingComponent/PCBuldingComponent";
import MainLayout from "../layouts/mainLayout";


const PcBuilding = () => {
  const router = useRouter();

  const selectedComponent = useSelector((state) => state.pcBuilder.selectedComponent);
  const selectedComponents = useSelector((state) => state.pcBuilder.selectedComponents);
  const handleChooseComponent = (category) => {
    router.push({
      pathname: `/category/${category}`,
    });
  };
  const pcBuilding = useSelector((state) => state.pcBuilder.pcBuilding);
 




  const componentTypes = [
    { name: "cpu",
    componentName:'',
    price:0,
    category:'CPU',
    icon: BsCpu, Title: "Processor", demoText: "Select a processor" },
    {
      name: "motherboard",
      icon: BsMotherboard,
      componentName:'',
      category:'MotherBoard',
      price:0,
      Title: "Motherboard",
      demoText: "Select motherboard",

    },

    { name: "ram", icon: BsMemory, Title: "RAM",
category:'RAM',
componentName:'',
price:0,
    demoText: "Select Ram" },
    {
      name: "monitor",
      price:0,
      category:'Monitor',
      icon: FiMonitor,
      componentName:'',
      Title: "Monitor",
      demoText: "Select Monitor",
    },
    {
      name: "storage",
      icon: BsDeviceSsd,
      price:0,
      category:'Storege Device',
      Title: "Storage Devices",
      componentName:'',
      demoText: "Select Storage",
    },
    {
      name: "psu",
      icon: GiGreenPower,
      category:'Power Supply Unit',
      componentName:'',
      price:0,
      Title: "Power Supply Unit",
      demoText: "Select a PSU",
    },
    {
      name: "others",
      icon: BsKeyboard,
      Title: "Others",
      componentName:'',
      category:'Others',
      price:0,
      demoText: "Select others Components",
    },
  ];

 
  pcBuilding.forEach((component) => {
    const { componentName, price,category } = component;

    const componentType = componentTypes.find((type) => type.category === category);

    if (componentType) {
      componentType.componentName = componentName;
      componentType.price = price;
    }
  });





  return (
    <div className="py-20 p-10">
      <h1 className="flex justify-center  mb-5 text-xl text-cyan-900 font-bold">
        Build Your Dream PC Today
      </h1>
      <div className="divider"></div>
      {componentTypes.map((componentType) => (
        <div key={componentType.name}>
          <PCBuldingComponent
         
            componentType={componentType}
            title={componentType.Title}
            demoText={componentType.demoText}
            handleChooseComponent={() => handleChooseComponent(componentType.name)}
            BsCpu={componentType.icon}
          />
          <div className="divider"></div>
        </div>
      ))}

      <div className=" flex justify-center ">
        <button className="btn btn-primary btn-sm">Complete Build </button>
      </div>
    </div>
  );
};

export default PcBuilding;

PcBuilding.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};


