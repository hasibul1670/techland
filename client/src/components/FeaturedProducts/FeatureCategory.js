import React from "react";

import CategoryCard from "../cardComponents/CategoryCard";
import cpu from "../../assets/animation/cpu.json";
import ram from "../../assets/animation/ram.json";
import monitor from "../../assets/animation/monitor.json";
import others from "../../assets/animation/others.json";
import storage from "../../assets/animation/storage.json";
import psu from "../../assets/animation/psu.json";

const FeatureCategory = () => {
  const cardData = [
    {
      linkTo: "/category/cpu",
      animationData: cpu,
      cardTitle: "CPU / Processor",
    },
    {
      linkTo: "/category/ram",
      animationData: ram,
      cardTitle: "RAM",
    },
    {
      linkTo:"/category/monitor",
      animationData: monitor,
      cardTitle: "Monitor",
    },
    {
      linkTo: "/category/psu",
      animationData: psu,
      cardTitle: "Power Supply unit",
    },
    {
      linkTo: "/category/storage",
      animationData: storage,
      cardTitle: "Storage Device",
    },
    {
      linkTo: "category/others",
      animationData: others,
      cardTitle: "Others Equipment",
    },
  
  ];

  return (
    <>
      <h1 className="flex justify-center mb-5 text-xl text-cyan-400 font-bold">
        Features Category
      </h1>
      <div className="flex justify-center mb-5 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <CategoryCard card={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureCategory;
