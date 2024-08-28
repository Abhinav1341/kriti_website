import React from "react";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";

const Services = () => {
  return (
    <div id="services" className=" bg-transparent py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            themes
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Health and Well-being
                </h2>
                <p className="text-md font-medium">
                  Design solutions that promote physical and mental health. This
                  theme focuses on creating apps, platforms, or interfaces that
                  encourage healthy living, provide mental health support, or
                  track fitness and wellness goals.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img2}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Smart Cities and Urban Innovation
                </h2>
                <p className="text-md font-medium">
                  Develop digital experiences that contribute to the evolution
                  of smart cities. Participants will focus on creating
                  innovative solutions for urban challenges, such as smarter
                  transportation, energy management, and enhancing public
                  services.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img3}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Digital Education and Lifelong Learning
                </h2>
                <p className="text-md font-medium">
                  Create user-friendly tools that transform how people learn.
                  This theme encourages designs that make education more
                  accessible, engaging, and effective for learners of all ages.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img4}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Financial Wellness and Digital Economy
                </h2>
                <p className="text-md font-medium">
                  Build interfaces that empower users to take control of their
                  finances. This theme emphasizes creating solutions for
                  budgeting, investing, financial literacy, and supporting the
                  digital economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4"></div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                We <span className="font-black">Collaborate</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  We can collaborate with your existing tech team to scale
                  existing software applications or design customized software
                  applications that suits your everyday need and simplifies
                  various processes.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4"></div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                We <span className="font-black">Collaborate</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  We can collaborate with your existing tech team to scale
                  existing software applications or design customized software
                  applications that suits your everyday need and simplifies
                  various processes.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4"></div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                We <span className="font-black">Collaborate</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  We can collaborate with your existing tech team to scale
                  existing software applications or design customized software
                  applications that suits your everyday need and simplifies
                  various processes.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4"></div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                We <span className="font-black">Collaborate</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  We can collaborate with your existing tech team to scale
                  existing software applications or design customized software
                  applications that suits your everyday need and simplifies
                  various processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
