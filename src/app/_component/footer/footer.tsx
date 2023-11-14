import React from "react";
import Button from "./button";
import Link from "next/link";
import Facebook from "./Iicon/facebook";
import Linkdin from "./Iicon/linkdin";
import Youtube from "./Iicon/youtube";
import Instagram from "./Iicon/instagram";
import Twitter from "./Iicon/twitter";
import Image from "next/image";
import AppStore from "@/app/_component/assets/AppStoreBanner.png";
import Googleplay from "@/app/_component/assets/GooglePlayBanner.png";

import Secloter from "@/app/_component/footer/Secloter";

const footer = () => {
  return (
    <>
      <div className="px-12 lg:px-24  flex flex-wrap  justify-between pt-14  align-baseline ">
        <div className="w-full md:w-1/2    lg:w-[44%] ">
          <h1 className="text-[1.8rem] xl:text-[2rem]   font-lora not-italic text-white font-semibold leading-noraml">
            The Most wanted makes and models
          </h1>
          <div className="flex flex-row flex-wrap gap-2 justify-center sm:justify-start sm:flex-row  sm:flex-wrap   mt-14">
            <Button title={"Audi A4"} />
            <Button title={"Volkswagen"} />
            <Button title={"Skota Octavia"} />
            <Button title={"BMW 5 Series"} />
            <Button title={"Faint Punto"} />
            <Button title={"Renault Cilo"} />
          </div>
        </div>
        <div className="w-full md:w-1/2    lg:w-[33%] ">
          <h1 className="text-[1.8rem] xl:text-[2rem]   font-lora not-italic text-white font-semibold leading-noraml">
            Quick Links
          </h1>
          <div className="grid gap-4  text-white">
            <ul>
              <li>
                <Link
                  href="/"
                  className="leading-[2.5rem]  hover:bg-[#FFFFFF26] p-1"
                >
                  Vehicle assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="leading-[2.5rem] hover:bg-[#FFFFFF26] p-1 "
                >
                  Safe, sca-free used car shppping
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="leading-[2.5rem] hover:bg-[#FFFFFF26] p-1"
                >
                  Email ads
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="leading-[2.5rem] hover:bg-[#FFFFFF26] p-1"
                >
                  Book of impressions
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="leading-[2.5rem] hover:bg-[#FFFFFF26] p-1"
                >
                  Advantage of advertising
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="leading-[2.5rem] hover:bg-[#FFFFFF26] p-1"
                >
                  Frequently asked questoin
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="leading-[2.5rem] hover:bg-[#FFFFFF26] p-1"
                >
                  Digital advertising
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="leading-[2.5rem] hover:bg-[#FFFFFF26] p-1"
                >
                  About us{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="leading-[2.5rem] hover:bg-[#FFFFFF26] p-1"
                >
                  Terms of use{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="leading-[2.5rem] hover:bg-[#FFFFFF26] p-1"
                >
                  Privacy notice
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="leading-[2.5rem] hover:bg-[#FFFFFF26] p-1"
                >
                  You Provide car services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="leading-[2.5rem] hover:bg-[#FFFFFF26] p-1"
                >
                  Mobile application
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="leading-[2.5rem] hover:bg-[#FFFFFF26] p-1"
                >
                  Friend of the site{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full  md:w-1/2   lg:w-[22%]  ">
          <h1 className=" text-[1.8rem]  xl:text-[2rem] flex  lg:justify-end mb-2  gap-2 font-lora not-italic text-white font-semibold leading-noraml">
            Let's connect
          </h1>
          <div className="flex justify-between sm:justify-start sm:gap-4 shrink-0 align-middle xl:justify-end">
            <div className="">
              <Facebook />
            </div>
            <div className="">
              <Instagram />
            </div>
            <div className="">
              <Linkdin />
            </div>
            <div className="">
              <Youtube />
            </div>
            <div className="">
              {/* <Twitter /> */}
              <Youtube />
            </div>
          </div>
          <div className="flex mt-12 flex-wrap sm:flex-nowrap xl:justify-end">
            <Image src={AppStore} alt="AppStore" />
            <Image src={Googleplay} alt="Googleplay" />
          </div>
        </div>
        {/* <Secloter /> */}
      </div>
      <div className="px-12 sm:px-24">
        <hr className="my-5 " />
        <div className="text-center my-5 text-white">
          Copyright 2023 Endrobil.no. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default footer;
