import React from "react";
import img from "../images/Web-developer.svg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6 bg-black rounded-[20px] border" id="about">
      <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-5xl text-blue-900 uppercase font-bold">About</h2>
                        
            </div>
        <div
        className="flex justify-center w-full"
          data-aos="fade-up"
        >
          
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-full px-8 "
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div>
              <p className="my-3 text-xl text-gray-300 font-regular text-center">
                Design Company is the Design Club of National Institute of
                Technology Patna, that caters to the designing urge of the young
                minds associated.
              </p>
            </div>

            <div>
              <p className="my-3 text-xl text-gray-600 font-regular text-center">
                We are a confluence of ideas, creativity and designing. With a
                team of brilliant designers and innovative minds, we create the
                unexpected and uphold our vision of creating graphically
                excellent visuals including UI/UX, Digital Art, Graphics Art,
                Videography, etc.
              </p>
            </div>

            <div className="flex flex-nowrap justify-around mt-10">
              <div className="text-white p-3 rounded w-40 bg-neutral-900">
                <h1 className="text-cyan-500 font-bold text-xl">25K+</h1>
                <p>IMPRESSIONS</p>
              </div>

              <div className="text-white p-3 rounded w-40 bg-neutral-900">
                <h1 className="text-cyan-500 font-bold text-xl">500K+</h1>
                <p>PRIZES WORTH</p>
              </div>

              <div className="text-white p-3 rounded w-40 bg-neutral-900">
                <h1 className="text-cyan-500 font-bold text-xl">80+</h1>
                <p>COLLEGES</p>
              </div>
              
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Intro;