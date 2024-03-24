import React from "react";
import Image from "next/image";
import myImage from "../images/Designer (1).png";
import myImage1 from "../images/logobulb.png";
import myImage2 from "../images/grow.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { PiExamFill } from "react-icons/pi";
import ChatButton from "./chatButton";
function HomePage() {
  
  return (
    <>
      {/* {hero section} */}
      <div className="bg-gray-900 w-full h-screen relative ">
        <div className="w-[45vh] absolute top-[30%] left-[65%] backdrop-filter  backdrop-blur-lg  h-[47vh] rounded-xl bg-gradient-to-b from-blue-500 to-indigo-900  "></div>
        <div className="backdrop-blur-lg bg-white/10 z-50 w-[15vh] h-[15vh] absolute top-[84%] left-[8%]  rounded-full"></div>
        <div className=" bg-gradient-to-b from-blue-500 to-indigo-900   w-[15vh] h-[15vh] absolute top-[84%] left-[8%]  rounded-full"></div>

        <Image
            className="absolute top-[16%] left-[12%] transform -rotate-45"
            src={myImage2}
            alt="My Image"
            width={160}
            height={130}
          />
        <Image
          className="absolute z-50 top-[34%] left-[38%] transform rotate-45"
          src={myImage1}
          alt="My Image"
          width={80}
          height={80}
        />
        <div className=" text-black z-50 shadow-xl rounded-mg  w-[80%] h-[80%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[50%] h-full p-32 animate-element">
            <h1 className="text-6xl leading-1 p-2 font-bold rounded-sm text-gray-400  tracking-tighter">
              GROW UP
            </h1>
            <h1 className="text-6xl leading-1 p-2 font-bold text-gray-400  tracking-tighter">
              YOUR <span className=" text-lime-500	 ">SKILL</span>
            </h1>
            <h1 className="text-6xl leading-1 p-2 font-bold text-gray-400 tracking-tighter">
              IN CATALYST
            </h1>
            <div className="flex">
              <button className="text-gray mt-10 shadow-xl hover:bg-lime-400 hover:text-white  rounded-full px-7 font-medium border-none py-4 bg-lime-500	">
                Get Started
              </button>
              <div className="flex  gap-2">
                <a
                  href=""
                  className=" rounded-md ml-8 mt-16 border-b-slate-700 text-gray-100 font-thin "
                >
                  Learn More
                </a>
                <span className="mt-16 text-white">
                  <AiOutlineArrowRight />
                </span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              class="fill-current text-indigo-900"
            >
              <path
                fill-opacity="1"
                d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,122.7C840,128,960,160,1080,165.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
          <Image
            className="absolute z-50 top-[30%] left-[68%]"
            src={myImage}
            alt="My Image"
            width={400}
            height={300}
          />
        </div>
      </div>
      {/* {courses} */}
      <div className="w-full h-screen bg-gray-900 overflow-hidden">
        <div className="w-32 h-32 bg-blue-900 rounded-full  absolute top-[110%] left-[29%]"></div>
        <h1 className="text-3xl text-white font-thin flex justify-center items-center">
          My courses
        </h1>
        <div className="w-[90%] max-h-[95%]  m-20  ">
          <div className="flex flex-wrap gap-10 m-32 mt-10">
            <div className="backdrop-blur-lg bg-white/10 w-[44vh] h-[40vh]  rounded-md">
              <div className="flex gap-3 m-4  items-center ">
                <Image src={myImage} alt="My Image" width={30} height={20} />
                <h1 className="text-white">Web Development</h1>
              </div>
              <div>
                <p className="p-3 text-gray-400">
                  Web development involves creating websites or web applications
                  using programming languages like HTML, CSS, JavaScript, and
                  various frameworks and tools.
                </p>
              </div>
              <button className="px-6 py-2 rounded-full  mt-10 bg-white/20 ml-7  outline-none border-none">
                Explore
              </button>
            </div>
            <div className="backdrop-blur-sm bg-white/10 w-[44vh] h-[40vh]  rounded-md">
              <div className="flex gap-3 m-4  items-center ">
                <Image src={myImage} alt="My Image" width={30} height={20} />
                <h1 className="text-white">Web Development</h1>
              </div>
              <div>
                <p className="p-3 text-gray-400">
                  Web development involves creating websites or web applications
                  using programming languages like HTML, CSS, JavaScript, and
                  various frameworks and tools.
                </p>
              </div>
              <button className="px-6 py-2 rounded-full  mt-10 bg-white/20 ml-7  outline-none border-none">
                Explore
              </button>
            </div>
            <div className="backdrop-blur-sm bg-white/10 w-[44vh] h-[40vh]  rounded-md">
              <div className="flex gap-3 m-4  items-center ">
                <Image src={myImage} alt="My Image" width={30} height={20} />
                <h1 className="text-white">Web Development</h1>
              </div>
              <div>
                <p className="p-3 text-gray-400">
                  Web development involves creating websites or web applications
                  using programming languages like HTML, CSS, JavaScript, and
                  various frameworks and tools.
                </p>
              </div>
              <button className="px-6 py-2 rounded-full mt-10 bg-white/20 ml-7  outline-none border-none">
                Explore
              </button>
            </div>
            <div className="backdrop-blur-sm bg-white/10 w-[44vh] h-[40vh]  rounded-md">
              <div className="flex gap-3 m-4  items-center ">
                <Image src={myImage} alt="My Image" width={30} height={20} />
                <h1 className="text-white">Web Development</h1>
              </div>
              <div>
                <p className="p-3 text-gray-400">
                  Web development involves creating websites or web applications
                  using programming languages like HTML, CSS, JavaScript, and
                  various frameworks and tools.
                </p>
              </div>
              <button className="px-6 py-2 rounded-full mt-10 bg-white/20 ml-7  outline-none border-none">
                Explore
              </button>
            </div>
            <div className="backdrop-blur-sm bg-white/10 w-[44vh] h-[40vh]  rounded-md">
              <div className="flex gap-3 m-4  items-center ">
                <Image src={myImage} alt="My Image" width={30} height={20} />
                <h1 className="text-white">Web Development</h1>
              </div>
              <div>
                <p className="p-3 text-gray-400">
                  Web development involves creating websites or web applications
                  using programming languages like HTML, CSS, JavaScript, and
                  various frameworks and tools.
                </p>
              </div>
              <button className="px-6 py-2 rounded-full mt-10 bg-white/20 ml-7  outline-none border-none">
                Explore
              </button>
            </div>
            <div className="backdrop-blur-sm bg-white/10 w-[44vh] h-[40vh]  rounded-md">
              <div className="flex gap-3 m-4  items-center ">
                <Image src={myImage} alt="My Image" width={30} height={20} />
                <h1 className="text-white">Web Development</h1>
              </div>
              <div>
                <p className="p-3 text-gray-400">
                  Web development involves creating websites or web applications
                  using programming languages like HTML, CSS, JavaScript, and
                  various frameworks and tools.
                </p>
              </div>
              <button className="px-6 py-2 rounded-full mt-10 bg-white/20 ml-7  outline-none border-none">
                Explore
              </button>
            </div>
            <div className="backdrop-blur-sm bg-white/10 w-[44vh] h-[40vh]  rounded-md">
              <div className="flex gap-3 m-4  items-center ">
                <Image src={myImage} alt="My Image" width={30} height={20} />
                <h1 className="text-white">Web Development</h1>
              </div>
              <div>
                <p className="p-3 text-gray-400">
                  Web development involves creating websites or web applications
                  using programming languages like HTML, CSS, JavaScript, and
                  various frameworks and tools.
                </p>
              </div>
              <button className="px-6 py-2 rounded-full mt-10 bg-white/20 ml-7  outline-none border-none">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {communities} */}
      <div className="w-full h-screen bg-gray-900 pt-20 overflow-hidden">
        <h1 className="text-3xl text-white font-thin flex justify-center items-center">
          Communities
        </h1>
        <div className="w-[90%] max-h-[95%]  m-20 overflow-auto ">
          <div className="flex flex-wrap gap-10 m-32 mt-10 md:justify-between">
            <div className="backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900 w-[44vh] h-[43vh]  rounded-md md:w-[30%] md:h-[auto] ">
              <div className="flex gap-3 m-4  flex-col  items-center ">
                <Image src={myImage} alt="My Image" width={30} height={20} />
                <h1 className="text-white">Computer Society of India</h1>
              </div>
              <div>
                <p className="p-3 text-gray-400">
                  Web development involves creating websites or web applications
                  using programming languages like HTML, CSS, JavaScript, and
                  various frameworks and tools.
                </p>
              </div>
              <div className="flex flex-wrap gap-5 m-1 ml-5">
                <h1 className="text-lg text-gray-400 border-b-2 border-gray-400 rounded-full p-1 ">
                  Web3
                </h1>
                <h1 className="text-lg text-gray-400 border-b-2 border-gray-400 rounded-full p-1 ">
                  AI/ML
                </h1>
                <h1 className="text-lg text-gray-400 border-b-2 border-gray-400 rounded-full p-1 ">
                  blockchain
                </h1>
                <h1 className="text-lg text-gray-400 border-b-2 border-gray-400 rounded-full p-1 ">
                  Cyber Security
                </h1>
              </div>

              <span className="mt-16 absolute top-[70%] animate-pulse left-[90%] text-2xl font-semibold text-white">
                <AiOutlineArrowRight />
              </span>
              {/* <button className="px-6 py-2 rounded-md  mt-10 bg-white/20 ml-7  outline-none border-none">
                Explore
              </button> */}
            </div>
            <div className="backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900 w-[44vh] h-[43vh]  rounded-md md:w-[30%] md:h-[auto] ">
              <div className="flex gap-3 m-4  flex-col  items-center ">
                <Image src={myImage} alt="My Image" width={30} height={20} />
                <h1 className="text-white">Computer Society of India</h1>
              </div>
              <div>
                <p className="p-3 text-gray-400">
                  Web development involves creating websites or web applications
                  using programming languages like HTML, CSS, JavaScript, and
                  various frameworks and tools.
                </p>
              </div>
              <div className="flex flex-wrap gap-5 m-1 ml-5">
                <h1 className="text-lg text-gray-400 border-b-2 border-gray-400 rounded-full p-1 ">
                  Web3
                </h1>
                <h1 className="text-lg text-gray-400 border-b-2 border-gray-400 rounded-full p-1 ">
                  AI/ML
                </h1>
                <h1 className="text-lg text-gray-400 border-b-2 border-gray-400 rounded-full p-1 ">
                  blockchain
                </h1>
                <h1 className="text-lg text-gray-400 border-b-2 border-gray-400 rounded-full p-1 ">
                  Cyber Security
                </h1>
              </div>

              <span className="mt-16 animate-pulse absolute top-[70%] left-[90%] text-2xl font-semibold text-white">
                <AiOutlineArrowRight />
              </span>
              {/* <button className="px-6 py-2 rounded-md  mt-10 bg-white/20 ml-7  outline-none border-none">
                Explore
              </button> */}
            </div>
            <div className="backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900 w-[44vh] h-[43vh]  rounded-md md:w-[30%] md:h-[auto] ">
              <div className="flex gap-3 m-4  flex-col  items-center ">
                <Image src={myImage} alt="My Image" width={30} height={20} />
                <h1 className="text-white">Computer Society of India</h1>
              </div>
              <div>
                <p className="p-3 text-gray-400">
                  Web development involves creating websites or web applications
                  using programming languages like HTML, CSS, JavaScript, and
                  various frameworks and tools.
                </p>
              </div>
              <div className="flex flex-wrap gap-5 m-1 ml-5">
                <h1 className="text-lg text-gray-400 border-b-2 border-gray-400 rounded-full p-1 ">
                  Web3
                </h1>
                <h1 className="text-lg text-gray-400 border-b-2 border-gray-400 rounded-full p-1 ">
                  AI/ML
                </h1>
                <h1 className="text-lg text-gray-400 border-b-2 border-gray-400 rounded-full p-1 ">
                  blockchain
                </h1>
                <h1 className="text-lg text-gray-400 border-b-2 border-gray-400 rounded-full p-1 ">
                  Cyber Security
                </h1>
              </div>

              <span className="mt-16 animate-pulse absolute top-[70%] left-[90%] text-2xl font-semibold text-white">
                <AiOutlineArrowRight />
              </span>
              {/* <button className="px-6 py-2 rounded-md  mt-10 bg-white/20 ml-7  outline-none border-none">
                Explore
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* projects*/}
      <div className="w-full h-screen bg-gray-900 pt-52 pb-52 overflow-hidden">
        <h1 className="text-3xl text-white font-thin flex justify-center items-center">
          Projects
        </h1>
        <div className="w-[90%] max-h-[100%]  m-20 overflow-auto">
          <div className="flex flex-wrap h-full gap-10 m-40 mt-10">
            <div className="backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900 w-[64vh] h-[30vh]  rounded-md">
              <div className="flex gap-3 m-4   items-center ">
                <Image src={myImage} alt="My Image" width={120} height={120} />

                <div>
                  <h1 className="text-white ml-3">Catalyst</h1>
                  <p className="p-3 text-gray-400 tracking-tighter">
                    Catalyst is an innovative online platform designed to
                    revolutionize the way students learn, collaborate, and grow
                    their skills.
                    <br />
                    more...
                  </p>
                </div>
              </div>

              <button className="px-6 py-2 rounded-md fixed text-gray-400 border-b-2 border-gray-200  bg-white/20 ml-[30%]  outline-none border-none">
                Explore
              </button>
            </div>
            <div className="backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900 w-[64vh] h-[30vh]  rounded-md">
              <div className="flex gap-3 m-4   items-center ">
                <Image src={myImage} alt="My Image" width={120} height={120} />

                <div>
                  <h1 className="text-white ml-3">Catalyst</h1>
                  <p className="p-3 text-gray-400 tracking-tighter">
                    Catalyst is an innovative online platform designed to
                    revolutionize the way students learn, collaborate, and grow
                    their skills.
                    <br />
                    more...
                  </p>
                </div>
              </div>

              <button className="px-6 py-2 rounded-md fixed text-gray-400 border-b-2 border-gray-200  bg-white/20 ml-[30%]  outline-none border-none">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-indigo-900 ">
        <div class="relative bg-opacity-75 bg-blue-700  h-[40vh] rounded-lg overflow-hidden">
          <div class="absolute inset-0 ">
            <svg class="absolute bottom-0" viewBox="0 0 1440 320">
              <path
                fill="#11111B bg-gradient-to-b from-blue-500 to-indigo-900 "
                fill-opacity="1"
                d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,122.7C840,128,960,160,1080,165.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div class="absolute h-[50vh] flex items-center m-5 justify-center">
            <div className="flex flex-wrap gap-1 ">
              <p class="text-white text-2xl  border-b-2 font-semibold ml-10">
                Test Section
              </p>
              <div className="text-white font-semibold text-xl ml-5 mt-2 ">
                <PiExamFill />
              </div>
            </div>
            <div className="flex flex-nowrap gap-10 m-32 mt-10">
              <div className="backdrop-blur-lg bg-white/10 w-[48vh] h-[20vh]   rounded-md">
                <div className="flex gap-3 m-8  items-center ">
                  <Image src={myImage} alt="My Image" width={60} height={60} />
                  <h1 className="text-white text-xl">Web Development</h1>
                </div>
                <button className="px-6 py-2 -m-10  rounded-full bg-white/20 ml-24  outline-none border-none">
                  Start Test
                </button>
              </div>
              <div className="backdrop-blur-lg bg-white/10 w-[48vh] h-[20vh]   rounded-md">
                <div className="flex gap-3 m-8  items-center ">
                  <Image src={myImage} alt="My Image" width={60} height={60} />
                  <h1 className="text-white text-xl">App Development</h1>
                </div>
                <button className="px-6 py-2 -m-10  rounded-full bg-white/20 ml-24  outline-none border-none">
                  Start Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatButton/>


    </>
  );
}

export default HomePage;
