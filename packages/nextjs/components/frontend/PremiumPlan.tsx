"use client";

import React, { useState } from "react";
import Image from "next/image";
import close from "../../assets/premiumPlan/close.svg";
import pointIcon from "../../assets/premiumPlan/point.svg";
import { AnimatePresence, motion } from "framer-motion";

const plans = [
  {
    plan: "Pro",
    stake: 10,
    points: ["This is one point fd sdf f sdf", "More rewards sd fsd f", "Challenge More dfsfs", "Annotation f sdffsf"],
  },
  {
    plan: "Elite",
    stake: 30,
    points: ["This is one point", "More rewards", "Challenge More", "Annotation"],
  },
  {
    plan: "Titan",
    stake: 50,
    points: ["This is one point", "More rewards", "Challenge More", "Annotation"],
  },
];

const PremiumPlan = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const handleProceed = () => {
    console.log("Proceed clicked");
  };

  const closeModal = () => {
    console.log("Proceed clicked");
  };

  const handleClose = () => {
    console.log(selectedPlan);
    setSelectedPlan(null);
  };

  return (
    <div className="h-screen w-full fixed top-0 left-0 flex justify-center items-center">
      <div className="min-w-4/5 lg:min-w-[70%] xl:min-w-[60%] flex flex-col border border-[#98aecd] p-6 lg:p-8 xl:p-10 rounded-xl">
        <div className="flex items-center justify-center relative mb-6 md:mb-8 lg:mb-10">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-t to-[#fae998] from-[#efc436] text-transparent bg-clip-text">
            Select Your Plan
          </p>
          <Image
            src={close}
            alt="close"
            onClick={() => {
              closeModal();
            }}
            className="h-8 w-8 absolute right-0 cursor-pointer"
          />
        </div>
        <div className="flex gap-4 lg:gap-6 xl:gap-8">
          <AnimatePresence>
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hoveredPlan === null ? 1 : hoveredPlan === index ? 1 : 0.5,
                  scale: hoveredPlan === null ? 1 : hoveredPlan === index ? 1 : 0.8,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                onHoverStart={() => setHoveredPlan(index)}
                onHoverEnd={() => setHoveredPlan(null)}
                className={`border border-[#98aecd] p-2 py-4 md:p-4 md:py-6 w-full rounded-xl cursor-pointer ${
                  hoveredPlan === index || selectedPlan === index ? "hero-section-shadow" : ""
                }`}
                onClick={() => setSelectedPlan(index)}
              >
                {selectedPlan !== index && (
                  <div>
                    <p className="text-xl md:text-2xl font-bold mx-2 text-center">{plan.plan}</p>
                    <p className="text-center text-lg md:text-xl flex justify-center items-center mt-2">
                      Stake<span className="text-lg md:text-xl mx-2">{plan.stake}</span>ETH
                    </p>
                    <div className="mt-4 lg:mt-6 flex flex-col gap-1 mx-auto w-fit">
                      {plan.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="w-full flex items-center gap-2 text-sm">
                          <Image src={pointIcon} alt="point" className="h-6 w-6" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                    <button className="p-2 w-full rounded-xl mt-4 md:mt-6 bg-blue-500 text-black font-semibold">
                      Select
                    </button>
                  </div>
                )}

                {selectedPlan === index ? (
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-center items-center relative">
                        <p className="text-lg md:text-xl">Upgrade your plan</p>
                        <motion.div onTap={handleClose} className="absolute right-0 cursor-pointer">
                          <Image src={close} alt="close" className="h-6 w-6 " />
                        </motion.div>
                      </div>

                      <div className="w-full flex justify-between items-center mt-4 md:mt-6 lg:mt-8">
                        <p className="text-xl md:text-2xl font-bold mx-2 text-center">{plan.plan}</p>
                        <p className="text-lg md:text-xl mx-2">{plan.stake} ETH</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs w-4/5 mx-auto text-center">
                        You are staking your money for upgrading your account it is refundable after some period of time
                      </p>
                      <button
                        className="p-2 w-full rounded-xl mt-4 md:mt-6 bg-blue-500 text-black font-semibold"
                        onClick={handleProceed}
                      >
                        Proceed <span>{plan.stake}</span> ETH
                      </button>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PremiumPlan;
