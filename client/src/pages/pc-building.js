import React from "react";
import { BsCpu } from "react-icons/bs";
import MainLayout from "../layouts/mainLayout";
import { useState } from 'react';
import { useRouter } from 'next/router';

const PcBuilding = () => {

  const [selectedCpu, setSelectedCpu] = useState(''); // State to store the selected CPU
  const router = useRouter();

  const handleChooseCpu = () => {
    router.push('category/cpu'); 
  };

  const handleSelectCpu = (cpuName) => {
    setSelectedCpu(cpuName); // Update the selected CPU in the state
    router.back(); // Go back to the previous page after selecting the CPU
  };

  return (
    <div className="py-20 p-10">
      <h1 className="flex justify-center  mb-5 text-xl text-cyan-900 font-bold">
        Build Your Dream PC Today
      </h1>
      <div className="divider"></div>

      <div className="card w-full py-2 px-5  h-20 bg-base-300  shadow-xl">
        <div className="flex justify-between  items-center  ">
          <div className="flex">
            <span className="text-4xl mr-2">
              <BsCpu />{" "}
            </span>
            <div>
            <p className="text-sm font-bold text-pink-700 ">Processor</p>
            <p className="text-xl font-bold text-cyan-700">{selectedCpu || 'Select a CPU'}</p>
            </div>
          

          </div>
          <div>
            <button className="btn btn-outline btn-sm"  onClick={handleChooseCpu}>Choose</button>
          </div>
        </div>
      </div>
      
      <div className="divider"></div>


 

    </div>
  );
};

export default PcBuilding;

PcBuilding.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
