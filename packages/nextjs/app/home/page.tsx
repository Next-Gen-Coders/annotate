import React from "react";
import Hero from "~~/components/frontend/Hero";
import Navbar from "~~/components/frontend/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#070815]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
