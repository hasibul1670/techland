import React from 'react';


const PCBuldingComponent = ({componentType,demoText,handleChooseComponent,BsCpu,title}) => {

  const {  componentName, price } = componentType;

  return (
    <div className="card w-full py-2 px-5 sm:h-32 md:h-32 h-32 bg-base-300  shadow-xl">
    <div className="flex justify-between  items-center  ">
      <div className="flex">
        <span className="text-4xl mr-2">
          <BsCpu />{" "}
        </span>
        <div>
        <p className="text-xs sm:text-xs font-bold text-pink-700">{title}</p>

          <p className="text-xs sm:text-sm font-bold text-cyan-700">
          {  componentName ?  <span className='text-xs sm:text-sm  text-blue-700'>{componentName}</span>   : <span className='text-xs sm:text-sm  text-teal-700'>{demoText}</span>}
     
          </p>
        </div>
      </div>
      <div className='flex'>
      <p className="text-xs sm:text-sm   font-bold mr-2 mt-1 text-pink-700">
            {<>{price} $</> || 0}
          </p>
        <button
          className="btn btn-outline  btn-xs sm:btn-sm"
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