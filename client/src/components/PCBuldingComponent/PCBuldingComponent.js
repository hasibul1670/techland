import React from 'react';


const PCBuldingComponent = ({componentType,demoText,handleChooseComponent,BsCpu,title}) => {

  const {  componentName, price } = componentType;

console.log('Hello',componentType);
  return (
    <div className="card w-full py-2 px-5  h-20 bg-base-300  shadow-xl">
    <div className="flex justify-between  items-center  ">
      <div className="flex">
        <span className="text-4xl mr-2">
          <BsCpu />{" "}
        </span>
        <div>
          <p className="text-sm font-bold text-pink-700 ">{title}</p>
          <p className="text-xl font-bold text-cyan-700">
          {  componentName ?    componentName : demoText}
     
          </p>
        </div>
      </div>
      <div className='flex'>
      <p className="text-sm font-bold mr-2 text-pink-700">
            {price || 0}
          </p>
        <button
          className="btn btn-outline btn-sm"
          onClick={handleChooseComponent}
        >
          Choose
        </button>
      </div>
    </div>
  </div>

  );
};

export default PCBuldingComponent;