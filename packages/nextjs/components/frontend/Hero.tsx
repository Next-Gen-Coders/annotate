"use client";

import React, { useRef } from "react";
import { Poller_One } from "next/font/google";
import Image from "next/image";
import ai from "../../assets/ai.svg";
import nike from "../../assets/nike.png";
import prismic from "../../assets/prismic.png";
import one from "../../assets/temp/1.png";
import two from "../../assets/temp/2.png";
import three from "../../assets/temp/3.png";
import four from "../../assets/temp/4.png";
import five from "../../assets/temp/5.png";
import { easeIn, easeInOut, motion, useInView } from "framer-motion";

const font = Poller_One({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="min-h-screen flex flex-col items-center ">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col items-center">
        <motion.p
          className="mt-10 text-center md:mt-12 lg:mt-16  w-fit text-[2em] md:text-[3em] lg:text-[3.6em] font-semibold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: easeIn }}
        >
          Revolutionize AI Training Data with Annotate
        </motion.p>

        <motion.p
          initial={{ translateY: 20, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4, ease: easeIn }}
          className="text-lg mt-6 md:mt-8 mx-auto text-center xl:w-[50%] lg:w-[50%] md:[60%] w-[70%] text-[#98aecd]"
        >
          Connect with Professionals, Ensure Quality, Accelerate your AI Development.{" "}
        </motion.p>

        <motion.button
          initial={{ scale: 1.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.3, ease: easeIn }}
          className="py-2 px-4 capitalize border mt-6 md:mt-8 w-fit block mx-auto border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] btn-shadow bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-full text-[#bcd0ec] hover:text-[#edd346]"
        >
          Get your raw data annotated
        </motion.button>

        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8, ease: easeIn }}
          className="w-full p-2 border border-[#98aecd] mt-8 md:mt-16 bg-[#98aecd] rounded-xl bg-opacity-20"
        >
          <Image src={one} alt="one" className="w-full rounded-xl hero-section-shadow" />
        </motion.div>
        <div className="mt-[16%] xl:text-[5em] lg:text-[4em] md:text-[3em] text-[2em] font-semibold text-center leading-none ">
          <p>The new</p>
          <p className="bg-gradient-to-t to-[#fae998] from-[#efc436] text-transparent bg-clip-text">
            Benchmark for AI<span className="text-white">.</span>
          </p>
        </div>
        <p className="mt-6 md:mt-8 mx-auto text-center xl:w-[50%] lg:w-[60%] md:[70%] w-[70%] text-[#98aecd]">
          The Ultimate Platform for AI Companies and Professional Annotator
        </p>

        <div className="w-[90%] flex flex-col gap-4 md:gap-6 mx-auto mt-8 md:mt-10">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            <div className="p-2 rounded-xl border border-[#98aecd] bg-[#98aecd] bg-opacity-20 w-1/2">
              <div className="flex flex-col gap-4 p-4 bg-[#0f1524] rounded-xl h-full">
                <p className="text-xl font-medium">Tiered Advancement</p>
                <p className="">
                  Earn more with expertise. Progress from Novice to Titan tier for higher earnings and challenging
                  tasks.
                </p>
                <div className="h-40 w-full">
                  <Image src={two} alt="one" className="w-fit rounded-xl " />
                </div>
              </div>
            </div>
            <div className="p-2 rounded-xl border border-[#98aecd] bg-[#98aecd] bg-opacity-20">
              <div className="flex flex-col gap-4 p-4 bg-[#0f1524] rounded-xl h-full">
                <p className="text-xl font-medium">Reputation Rewards Framework</p>
                <p>
                  Stay credible, earn more. Our system rewards accuracy, ensuring top-quality annotations and better
                  opportunities.
                </p>

                <Image src={three} alt="one" className="w-full rounded-xl" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            <div className="p-2 rounded-xl border border-[#98aecd] bg-[#98aecd] bg-opacity-20">
              <div className="flex flex-col gap-4 p-4 bg-[#0f1524] rounded-xl h-full">
                <p className="text-xl font-medium">Blockchain Integrity Assurance</p>
                <p className="flex flex-col">
                  Transparent, secure, immutable. Our blockchain integration guarantees trust and security in all
                  platform interactions.
                  <span className="h-[1.5rem]"></span>
                </p>

                <Image src={four} alt="one" className="w-full rounded-xl" />
              </div>
            </div>
            <div className="p-2 rounded-xl border border-[#98aecd] bg-[#98aecd] bg-opacity-20">
              <div className="flex flex-col gap-4 p-4 bg-[#0f1524] rounded-xl h-full">
                <p className="text-xl font-medium">Dynamic Data Marketplace</p>
                <p>
                  Exchange or monetize data effortlessly. Access diverse datasets or sell your own, fostering AI
                  innovation.
                </p>

                <Image src={five} alt="one" className="w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="radial-bg">
          <motion.div
            animate={{ translateY: isInView ? 10 : 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: easeInOut }}
            className="mt-[16%] lg:text-[4em] md:text-[3em] text-[2em] z-0 font-semibold text-center leading-none "
          >
            <p>Your Data.</p>
            <p>Your Annotators.</p>
          </motion.div>

          <div className="flex flex-col-reverse lg:flex-row  w-full z-10 mt-10 md:mt-12 px-6 md:px-8 py-8 md:py-10 gap-6 lg:gap-0 bg-[#98aecd] bg-opacity-15 border border-[#98aecd] rounded-xl relative">
            <div
              ref={ref}
              className="lg:w-[65%] w-full flex justify-center items-center relative lg:right-[6em]  bg-black border border-[#98aecd] opacity-80 rounded-xl"
            >
              <div className="flex flex-col gap-y-2">
                <h6 className="text-2xl font-medium px-4">Unlocking the Power of Precision</h6>
                <p className="text-lg px-4">
                  Access meticulously annotated datasets curated by our expert annotators, empowering your AI with the
                  highest level of accuracy and reliability.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[35%]  flex flex-col gap-4 md:gap-6">
              <Image src={ai} alt="ai" className="h-12 w-12 bg-[#385990] rounded-lg p-1 " />
              <p className="text-2xl font-semibold">Collaborate with the Best</p>
              <p className="text-[#98aecd]">
                Access a pool of skilled annotators committed to elevating your data quality, driving your AI
                development forward with precision and expertise.
              </p>
              <p className="text-[#98aecd]">
                Tap into a network of top-tier annotators passionate about refining your data, guaranteeing the utmost
                accuracy and reliability for your AI models.
              </p>
              <button className="py-2 px-4 w-fit border border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] btn-shadow  bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-full text-[#bcd0ec] hover:text-[#edd346]">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-[16%] lg:text-[4em] md:text-[3em] text-[2em] font-semibold text-center leading-none ">
            <p>Designers like</p>
            <p>you love Glisten</p>
          </div>
          <p className="mt-6 md:mt-8 mx-auto text-center xl:w-[40%] lg:w-[50%] md:[60%] w-[70%] text-[#98aecd]">
            Introducing a new way of building components and layouts that leaves everything else in the dust.
          </p>

          <div className="my-10 md:my-12 lg:my-16 text-stone-200 flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            <div className="flex  flex-col md:flex-row gap-6">
              <div className="flex flex-col justify-center gap-4">
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold">Elevate Your Skills, Amplify AI</p>
                <p>
                  Join a community of expert annotators and contribute to the advancement of AI technology. Earn rewards
                  for your precision and dedication.
                </p>
              </div>
              <Image src={nike} className="rounded-xl w-full md:w-3/5 " alt="nike" />
            </div>

            <div className="flex  flex-col-reverse md:flex-row gap-6">
              <Image src={prismic} className="rounded-xl w-full md:w-3/5 " alt="nike" />
              <div className="flex flex-col justify-center gap-4">
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  Enhance AI Capabilities, Access Expertise
                </p>
                <p>
                  Connect with a diverse pool of annotators to fuel your AI development. Source high-quality annotated
                  data and accelerate innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full radial-bottom">
        <div className="w-fit mx-auto my-[6%]">
          <div className="w-fit p-2 border border-[#98aecd] mx-auto bg-[#98aecd] rounded-xl bg-opacity-20">
            <Image src={ai} alt="one" className="h-24 w-24   rounded-xl" />
          </div>

          <div className="lg:text-[3em] mt-4 md:mt-6 md:text-[2em] text-[1.5em] font-semibold text-center leading-none ">
            <p>Unlock Your Potential </p>
            <p>with Annotate</p>
          </div>
          <button className="py-2 px-4 border mt-4 md:mt-6 mx-auto block border-[#98aecd] bg-[#98aecd] hover:border-[#edd346] hover:bg-[#edd346] btn-shadow  bg-opacity-20 hover:bg-opacity-20 duration-200 rounded-full text-[#bcd0ec] hover:text-[#edd346]">
            Start Now
          </button>
        </div>
      </div>

      <div className="flex w-full p-4 md:p-6 justify-between border-t-2 border-[#98aecd]">
        <p className={`${font.className} md:text-3xl text-xl`}>ANNOTATE</p>
        <div className="flex gap-4 md:gap-6 text-lg">
          <button className="text-[#98aecd]">Features</button>
          <button className="text-[#98aecd]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
