import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
        <p className="mt-10 md:mt-12 lg:mt-16  w-fit text-[2em] md:text-[3em] lg:text-[3.6em] font-semibold text-center leading-tight">Connecting AI Innovators with Expert Image Annotators</p>
        
        <button className="py-2 px-4 border mt-6 md:mt-8 w-fit block mx-auto border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-full text-[#bcd0ec] hover:text-[#edd346]">Get your raw data annotated</button>
      </div>
    </div>
  );
};

export default Hero;
