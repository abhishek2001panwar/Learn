"use client";
import React from "react";
import Image from "next/image";
import myImage from "../images/Designer (1).png";
import myImage1 from "../images/logobulb.png";
import myImage2 from "../images/grow.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { PiExamFill } from "react-icons/pi";
import ChatButton from "./chatButton";
import { NextUIProvider } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Avatar,
  Button,
} from "@nextui-org/react";

function HomePage() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <NextUIProvider>
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
          <div className="w-[90%] max-h-[95%]  m-20 overflow-auto ">
            <div className="flex flex-wrap gap-10 m-52  mt-10 ">
              <Card className="backdrop-blur-lg text-white  bg-white/10 max-w-[500px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={myImage1}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">NextUI</p>

                    <p className="text-small text-default-500">nextui.org</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Make beautiful websites regardless of your design
                    experience.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                  >
                    Visit source code on GitHub.
                  </Link>
                </CardFooter>
              </Card>
              <Card className=" backdrop-blur-lg text-white  bg-white/10 max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={myImage1}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Make beautiful websites regardless of your design
                    experience.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                  >
                    Visit source code on GitHub.
                  </Link>
                </CardFooter>
              </Card>
              <Card className="backdrop-blur-lg text-white  bg-white/10 max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={myImage1}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Make beautiful websites regardless of your design
                    experience.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                  >
                    Visit source code on GitHub.
                  </Link>
                </CardFooter>
              </Card>
              <Card className=" backdrop-blur-lg text-white  bg-white/10 max-w-[500px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={myImage1}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Make beautiful websites regardless of your design
                    experience.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                  >
                    Visit source code on GitHub.
                  </Link>
                </CardFooter>
              </Card>
              <Card className="backdrop-blur-lg text-white  bg-white/10 max-w-[500px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={myImage1}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Make beautiful websites regardless of your design
                    experience.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                  >
                    Visit source code on GitHub.
                  </Link>
                </CardFooter>
              </Card>
              <Card className=" backdrop-blur-lg text-white  bg-white/10 max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={myImage1}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Make beautiful websites regardless of your design
                    experience.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                  >
                    Visit source code on GitHub.
                  </Link>
                </CardFooter>
              </Card>
              <Card className="backdrop-blur-lg text-white  bg-white/10 max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={myImage1}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Make beautiful websites regardless of your design
                    experience.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                  >
                    Visit source code on GitHub.
                  </Link>
                </CardFooter>
              </Card>
              <Card className=" backdrop-blur-lg text-white  bg-white/10 max-w-[500px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={myImage1}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">NextUI</p>
                    <p className="text-small text-default-500">nextui.org</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>
                    Make beautiful websites regardless of your design
                    experience.
                  </p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                  >
                    Visit source code on GitHub.
                  </Link>
                </CardFooter>
              </Card>
              {/* <div className="backdrop-blur-lg bg-white/10 w-[44vh] h-[40vh]  rounded-md">
                <div className="flex gap-3 m-4  items-center ">
                  <Image src={myImage} alt="My Image" width={30} height={20} />
                  <h1 className="text-white">Web Development</h1>
                </div>
                <div>
                  <p className="p-3 text-gray-400">
                    Web development involves creating websites or web
                    applications using programming languages like HTML, CSS,
                    JavaScript, and various frameworks and tools.
                  </p>
                </div>
                <button className="px-6 py-2 rounded-full  mt-10 bg-white/20 ml-7  outline-none border-none">
                  Explore
                </button>
              </div> */}
              {/* <div className="backdrop-blur-sm bg-white/10 w-[44vh] h-[40vh]  rounded-md">
                <div className="flex gap-3 m-4  items-center ">
                  <Image src={myImage} alt="My Image" width={30} height={20} />
                  <h1 className="text-white">Web Development</h1>
                </div>
                <div>
                  <p className="p-3 text-gray-400">
                    Web development involves creating websites or web
                    applications using programming languages like HTML, CSS,
                    JavaScript, and various frameworks and tools.
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
                    Web development involves creating websites or web
                    applications using programming languages like HTML, CSS,
                    JavaScript, and various frameworks and tools.
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
                    Web development involves creating websites or web
                    applications using programming languages like HTML, CSS,
                    JavaScript, and various frameworks and tools.
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
                    Web development involves creating websites or web
                    applications using programming languages like HTML, CSS,
                    JavaScript, and various frameworks and tools.
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
                    Web development involves creating websites or web
                    applications using programming languages like HTML, CSS,
                    JavaScript, and various frameworks and tools.
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
                    Web development involves creating websites or web
                    applications using programming languages like HTML, CSS,
                    JavaScript, and various frameworks and tools.
                  </p>
                </div>
                <button className="px-6 py-2 rounded-full mt-10 bg-white/20 ml-7  outline-none border-none">
                  Explore
                </button>
              </div> */}
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
              <Card className=" text-white backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900  max-w-[340px]">
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src={myImage1} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small  font-semibold leading-none text-white">
                        Zoey Lang
                      </h4>
                      <h5 className="text-small tracking-tight text-white">
                        @zoeylang
                      </h5>
                    </div>
                  </div>
                  <Button
                    className={
                      isFollowed
                        ? "bg-transparent text-foreground border-default-200"
                        : ""
                    }
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                  >
                    {isFollowed ? "Unfollow" : "Follow"}
                  </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-white">
                  <p>
                    Frontend developer and UI/UX enthusiast. Join me on this
                    coding adventure!
                  </p>
                  <span className="pt-2">
                    #FrontendWithZoey
                    <span className="py-2" aria-label="computer" role="img">
                      💻
                    </span>
                  </span>
                </CardBody>
                <CardFooter className="gap-3">
                  <div className="flex gap-1">
                    <p className="font-semibold p-1 text-default-400 text-small border-b-1 rounded-full">
                      AIML
                    </p>
                    <p className=" text-default-400 p-1 text-small border-b-1 rounded-full">
                      BLOCKCHAIN
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold p-1 text-default-400 text-small border-b-1 rounded-full">
                      ML
                    </p>
                    <p className="text-default-400 p-1 text-small border-b-1 rounded-full">
                      IOT
                    </p>
                  </div>
                </CardFooter>
              </Card>
              <Card className=" text-white backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900  max-w-[340px]">
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src={myImage2} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">
                        Zoey Lang
                      </h4>
                      <h5 className="text-small tracking-tight text-default-400">
                        @zoeylang
                      </h5>
                    </div>
                  </div>
                  <Button
                    className={
                      isFollowed
                        ? "bg-transparent text-foreground border-default-200"
                        : ""
                    }
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                  >
                    {isFollowed ? "Unfollow" : "Follow"}
                  </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                  <p>
                    Frontend developer and UI/UX enthusiast. Join me on this
                    coding adventure!
                  </p>
                  <span className="pt-2">
                    #FrontendWithZoey
                    <span className="py-2" aria-label="computer" role="img">
                      💻
                    </span>
                  </span>
                </CardBody>
                <CardFooter className="gap-3">
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small border-b-1 rounded-full">
                      AIML
                    </p>
                    <p className=" text-default-400 text-small border-b-1 rounded-full">
                      BLOCKCHAIN
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small border-b-1 rounded-full">
                      ML
                    </p>
                    <p className="text-default-400 text-small border-b-1 rounded-full">
                      IOT
                    </p>
                  </div>
                </CardFooter>
              </Card>
              <Card className=" text-white backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900  max-w-[340px]">
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src={myImage2} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">
                        Zoey Lang
                      </h4>
                      <h5 className="text-small tracking-tight text-default-400">
                        @zoeylang
                      </h5>
                    </div>
                  </div>
                  <Button
                    className={
                      isFollowed
                        ? "bg-transparent text-foreground border-default-200"
                        : ""
                    }
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                  >
                    {isFollowed ? "Unfollow" : "Follow"}
                  </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                  <p>
                    Frontend developer and UI/UX enthusiast. Join me on this
                    coding adventure!
                  </p>
                  <span className="pt-2">
                    #FrontendWithZoey
                    <span className="py-2" aria-label="computer" role="img">
                      💻
                    </span>
                  </span>
                </CardBody>
                <CardFooter className="gap-3">
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small border-b-1 rounded-full">
                      AIML
                    </p>
                    <p className=" text-default-400 text-small border-b-1 rounded-full">
                      BLOCKCHAIN
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small border-b-1 rounded-full">
                      ML
                    </p>
                    <p className="text-default-400 text-small border-b-1 rounded-full">
                      IOT
                    </p>
                  </div>
                </CardFooter>
              </Card>
              <Card className=" text-white backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900  max-w-[340px]">
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src={myImage2} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">
                        Zoey Lang
                      </h4>
                      <h5 className="text-small tracking-tight text-default-400">
                        @zoeylang
                      </h5>
                    </div>
                  </div>
                  <Button
                    className={
                      isFollowed
                        ? "bg-transparent text-foreground border-default-200"
                        : ""
                    }
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                  >
                    {isFollowed ? "Unfollow" : "Follow"}
                  </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                  <p>
                    Frontend developer and UI/UX enthusiast. Join me on this
                    coding adventure!
                  </p>
                  <span className="pt-2">
                    #FrontendWithZoey
                    <span className="py-2" aria-label="computer" role="img">
                      💻
                    </span>
                  </span>
                </CardBody>
                <CardFooter className="gap-3">
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small border-b-1 rounded-full">
                      AIML
                    </p>
                    <p className=" text-default-400 text-small border-b-1 rounded-full">
                      BLOCKCHAIN
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small border-b-1 rounded-full">
                      ML
                    </p>
                    <p className="text-default-400 text-small border-b-1 rounded-full">
                      IOT
                    </p>
                  </div>
                </CardFooter>
              </Card>
              <Card className=" text-white backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900  max-w-[340px]">
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src={myImage2} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">
                        Zoey Lang
                      </h4>
                      <h5 className="text-small tracking-tight text-default-400">
                        @zoeylang
                      </h5>
                    </div>
                  </div>
                  <Button
                    className={
                      isFollowed
                        ? "bg-transparent text-foreground border-default-200"
                        : ""
                    }
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                  >
                    {isFollowed ? "Unfollow" : "Follow"}
                  </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                  <p>
                    Frontend developer and UI/UX enthusiast. Join me on this
                    coding adventure!
                  </p>
                  <span className="pt-2">
                    #FrontendWithZoey
                    <span className="py-2" aria-label="computer" role="img">
                      💻
                    </span>
                  </span>
                </CardBody>
                <CardFooter className="gap-3">
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small border-b-1 rounded-full">
                      AIML
                    </p>
                    <p className=" text-default-400 text-small border-b-1 rounded-full">
                      BLOCKCHAIN
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small border-b-1 rounded-full">
                      ML
                    </p>
                    <p className="text-default-400 text-small border-b-1 rounded-full">
                      IOT
                    </p>
                  </div>
                </CardFooter>
              </Card>
              <Card className=" text-white backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900  max-w-[340px]">
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src={myImage2} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">
                        Zoey Lang
                      </h4>
                      <h5 className="text-small tracking-tight text-default-400">
                        @zoeylang
                      </h5>
                    </div>
                  </div>
                  <Button
                    className={
                      isFollowed
                        ? "bg-transparent text-foreground border-default-200"
                        : ""
                    }
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                  >
                    {isFollowed ? "Unfollow" : "Follow"}
                  </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                  <p>
                    Frontend developer and UI/UX enthusiast. Join me on this
                    coding adventure!
                  </p>
                  <span className="pt-2">
                    #FrontendWithZoey
                    <span className="py-2" aria-label="computer" role="img">
                      💻
                    </span>
                  </span>
                </CardBody>
                <CardFooter className="gap-3">
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small border-b-1 rounded-full">
                      AIML
                    </p>
                    <p className=" text-default-400 text-small border-b-1 rounded-full">
                      BLOCKCHAIN
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small border-b-1 rounded-full">
                      ML
                    </p>
                    <p className="text-default-400 text-small border-b-1 rounded-full">
                      IOT
                    </p>
                  </div>
                </CardFooter>
              </Card>
              <Card className=" text-white backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900  max-w-[340px]">
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src={myImage2} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">
                        Zoey Lang
                      </h4>
                      <h5 className="text-small tracking-tight text-default-400">
                        @zoeylang
                      </h5>
                    </div>
                  </div>
                  <Button
                    className={
                      isFollowed
                        ? "bg-transparent text-foreground border-default-200"
                        : ""
                    }
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                  >
                    {isFollowed ? "Unfollow" : "Follow"}
                  </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                  <p>
                    Frontend developer and UI/UX enthusiast. Join me on this
                    coding adventure!
                  </p>
                  <span className="pt-2">
                    #FrontendWithZoey
                    <span className="py-2" aria-label="computer" role="img">
                      💻
                    </span>
                  </span>
                </CardBody>
                <CardFooter className="gap-3">
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small border-b-1 rounded-full">
                      AIML
                    </p>
                    <p className=" text-default-400 text-small border-b-1 rounded-full">
                      BLOCKCHAIN
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small border-b-1 rounded-full">
                      ML
                    </p>
                    <p className="text-default-400 text-small border-b-1 rounded-full">
                      IOT
                    </p>
                  </div>
                </CardFooter>
              </Card>

              {/* <div className="backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900 w-[44vh] h-[43vh]  rounded-md md:w-[30%] md:h-[auto] ">
                <div className="flex gap-3 m-4  flex-col  items-center ">
                  <Image src={myImage} alt="My Image" width={30} height={20} />
                  <h1 className="text-white">Computer Society of India</h1>
                </div>
                <div>
                  <p className="p-3 text-gray-400">
                    Web development involves creating websites or web
                    applications using programming languages like HTML, CSS,
                    JavaScript, and various frameworks and tools.
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
               
              </div>
              <div className="backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900 w-[44vh] h-[43vh]  rounded-md md:w-[30%] md:h-[auto] ">
                <div className="flex gap-3 m-4  flex-col  items-center ">
                  <Image src={myImage} alt="My Image" width={30} height={20} />
                  <h1 className="text-white">Computer Society of India</h1>
                </div>
                <div>
                  <p className="p-3 text-gray-400">
                    Web development involves creating websites or web
                    applications using programming languages like HTML, CSS,
                    JavaScript, and various frameworks and tools.
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
               
              </div>
              <div className="backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900 w-[44vh] h-[43vh]  rounded-md md:w-[30%] md:h-[auto] ">
                <div className="flex gap-3 m-4  flex-col  items-center ">
                  <Image src={myImage} alt="My Image" width={30} height={20} />
                  <h1 className="text-white">Computer Society of India</h1>
                </div>
                <div>
                  <p className="p-3 text-gray-400">
                    Web development involves creating websites or web
                    applications using programming languages like HTML, CSS,
                    JavaScript, and various frameworks and tools.
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
               
              </div> */}
            </div>
          </div>
        </div>
        {/* projects*/}
        <div className="w-full h-screen bg-gray-900 pt-52 pb-52 overflow-hidden">
          <h1 className="text-3xl text-white font-thin flex justify-center items-center">
            Projects
          </h1>
          <div className="w-[90%] max-h-[100%]  m-10 overflow-auto">
            <div className="flex flex-wrap h-full gap-7 ml-16">
              <Card className="py-5 backdrop-blur-lg bg-white/10 text-white w-[50vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={myImage}
                    width={270}
                  />
                </CardBody>
              </Card>
              <Card className="py-5 backdrop-blur-lg bg-white/10 text-white w-[50vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={myImage}
                    width={270}
                  />
                </CardBody>
              </Card>
              <Card className="py-5 backdrop-blur-lg bg-white/10 text-white w-[50vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={myImage}
                    width={270}
                  />
                </CardBody>
              </Card>
              <Card className="py-5 backdrop-blur-lg bg-white/10 text-white w-[50vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={myImage}
                    width={270}
                  />
                </CardBody>
              </Card>
              <Card className="py-5 backdrop-blur-lg bg-white/10 text-white w-[50vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={myImage}
                    width={270}
                  />
                </CardBody>
              </Card>
              <Card className="py-5 backdrop-blur-lg bg-white/10 text-white w-[50vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={myImage}
                    width={270}
                  />
                </CardBody>
              </Card>
              {/* <div className="backdrop-blur-sm bg-gradient-to-b from-gray-500 to-zinc-900 w-[64vh] h-[30vh]  rounded-md">
                <div className="flex gap-3 m-4   items-center ">
                  <Image
                    src={myImage}
                    alt="My Image"
                    width={120}
                    height={120}
                  />

                  <div>
                    <h1 className="text-white ml-3">Catalyst</h1>
                    <p className="p-3 text-gray-400 tracking-tighter">
                      Catalyst is an innovative online platform designed to
                      revolutionize the way students learn, collaborate, and
                      grow their skills.
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
                  <Image
                    src={myImage}
                    alt="My Image"
                    width={120}
                    height={120}
                  />

                  <div>
                    <h1 className="text-white ml-3">Catalyst</h1>
                    <p className="p-3 text-gray-400 tracking-tighter">
                      Catalyst is an innovative online platform designed to
                      revolutionize the way students learn, collaborate, and
                      grow their skills.
                      <br />
                      more...
                    </p>
                  </div>
                </div>

                <button className="px-6 py-2 rounded-md fixed text-gray-400 border-b-2 border-gray-200  bg-white/20 ml-[30%]  outline-none border-none">
                  Explore
                </button>
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="w-full bg-indigo-900 ">
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
                    <Image
                      src={myImage}
                      alt="My Image"
                      width={60}
                      height={60}
                    />
                    <h1 className="text-white text-xl">Web Development</h1>
                  </div>
                  <button className="px-6 py-2 -m-10  rounded-full bg-white/20 ml-24  outline-none border-none">
                    Start Test
                  </button>
                </div>
                <div className="backdrop-blur-lg bg-white/10 w-[48vh] h-[20vh]   rounded-md">
                  <div className="flex gap-3 m-8  items-center ">
                    <Image
                      src={myImage}
                      alt="My Image"
                      width={60}
                      height={60}
                    />
                    <h1 className="text-white text-xl">App Development</h1>
                  </div>
                  <button className="px-6 py-2 -m-10  rounded-full bg-white/20 ml-24  outline-none border-none">
                    Start Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <ChatButton />

        <div className="w-full h-screen bg-gray-900 overflow-hidden">
          <h1 className="text-white ml-[70vh] font-thin  rounded-full justify-center items-center p-5 text-2xl">
            Upcoming Courses...
          </h1>
          <div className="w-full h-screen  pt-20 bg-gray-900 flex justify-center items-center">
            <div className="flex max-h-[90vh] overflow-auto flex-wrap justify-center gap-10">
              {/* First Card */}
              <Card className="py-5 backdrop-blur-lg bg-white/10 text-white w-[40vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={myImage}
                    width={270}
                  />
                </CardBody>
              </Card>

              {/* Second Card */}
              <Card className="py-5 backdrop-blur-lg bg-white/10 text-white w-[50vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={myImage}
                    width={270}
                  />
                </CardBody>
              </Card>

              {/* Third Card */}
              <Card className="py-5 backdrop-blur-lg bg-white/10 text-white w-[40vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={myImage}
                    width={270}
                  />
                </CardBody>
              </Card>
              <Card className="py-5 backdrop-blur-lg bg-white/10 text-white w-[50vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={myImage}
                    width={270}
                  />
                </CardBody>
              </Card>
              <Card className="py-5 backdrop-blur-lg bg-white/10 text-white w-[40vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={myImage}
                    width={270}
                  />
                </CardBody>
              </Card>
              <Card className="py-5 backdrop-blur-lg bg-white/10 text-white w-[50vh]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={myImage}
                    width={270}
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <div className="w-full h-screen p-20 bg-gray-900">
          <h1 className="text-white font-thin ml-[60vh] text-2xl">
            Test/Assignments
          </h1>
          <div className="backdrop-blur-lg mt-16 bg-white/20 flex gap-3">
          <Accordion
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
          >
            <AccordionItem key="1" className="text-white" aria-label="Accordion 1" title="Accordion 1">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
          </Accordion>
          </div>
          
        </div>
      </NextUIProvider>
    </>
  );
}

export default HomePage;
