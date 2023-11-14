import Image from "next/image";
import React from "react";
import Car32 from "@/app/_component/assets/car-32.png";
import RedCra32 from "@/app/_component/assets/redCra32.png";
import RedCra01 from "@/app/_component/assets/redCra01.png";
import RedCra02 from "@/app/_component/assets/redCra02.png";
import RedCra03 from "@/app/_component/assets/redCra03.png";

const largeCard = () => {
  return (
    <>
      <div className=" rounded-[5px] mt-5 justify-around my-2 shadow-sm bg-white p-1 border-slate-300 border px-3 shadow-indigo-100 w-full flex">
        <div className="">
          <Image
            alt="Home"
            src={RedCra32}
            className="h-auto w-[500px] rounded-[5px] object-cover rotate-90"
          />
          {/* <div className="flex flex-row justify-between">
            <Image
              alt="Home"
              src={RedCra01}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
            <Image
              alt="Home"
              src={RedCra02}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
            <Image
              alt="Home"
              src={RedCra03}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
          </div> */}
        </div>

        <div className=" px-4 flex  flex-col  justify-around w-full">
          <div>
            <dl>
              <div className="flex justify-between items-baseline">
                <dd className="font-semibold text-xl  text-[#000000]">
                  Volkswagen Polo 1.2 TDI
                </dd>
                <dd className=" text-sm  text-[#000000]">
                  <span>Date Published: </span> <span>12/10/2023</span>
                </dd>
              </div>

              <div className="mt-3 ">
                <div className="flex gap-3">
                  <dd className="text-xl  font-semibold text-[#EF2C2E]">
                    20,300 €
                  </dd>
                  <span className="line-through">20,300 €</span>
                </div>

                <p className="text-[#444] mt-2 text-sm">+ Omregistrering</p>
              </div>
            </dl>

            <div className="mt-3  items-center  text-xs grid grid-cols-4 w-full ">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-[#444] text-start ">Vehicle type</p>

                  <p className="font-bold text-start text-sm">Sedan</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500 text-start">Gearbox type</p>

                  <p className="font-bold text-start text-sm">Auto</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">Kilometers</p>

                  <p className="font-bold text-start text-sm">150,000 km</p>
                </div>
              </div>
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">150,000 km</p>

                  <p className="font-bold text-start text-sm">2019</p>
                </div>
              </div>
            </div>
            <div className="mt-3  items-center  text-xs grid grid-cols-4 w-full ">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-[#444] text-start ">HP/kW</p>

                  <p className="font-bold text-start text-sm">55/75</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500 text-start">Doors number</p>

                  <p className="font-bold text-start text-sm">4</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">cm3</p>

                  <p className="font-bold text-start text-sm">2000</p>
                </div>
              </div>
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">Fuel type</p>

                  <p className="font-bold text-start text-sm">2000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between w-full gap-2">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-sm rounded-[5px] text-center text-[#003087] ">
                Damaged
              </div>
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-sm rounded-[5px] text-center text-[#003087] ">
                (Not)Registered
              </div>
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-centertext-sm  rounded-[5px] text-center text-[#003087] ">
                Guarantee
              </div>
            </div>
            <div className="flex justify-center items-center">
              <dd className=" text-base  flex items-center gap-2   text-[#000000]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M8.99991 10.0726C10.2923 10.0726 11.3399 9.02492 11.3399 7.73258C11.3399 6.44023 10.2923 5.39258 8.99991 5.39258C7.70757 5.39258 6.65991 6.44023 6.65991 7.73258C6.65991 9.02492 7.70757 10.0726 8.99991 10.0726Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.71527 6.3675C4.19277 -0.127498 13.8153 -0.119998 15.2853 6.375C16.1478 10.185 13.7778 13.41 11.7003 15.405C10.1928 16.86 7.80777 16.86 6.29277 15.405C4.22277 13.41 1.85277 10.1775 2.71527 6.3675Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                  </svg>{" "}
                </span>{" "}
                <span>Prigrevica</span>
              </dd>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-[5px] mt-5 justify-around my-2 shadow-sm bg-[#EF2C2E26] p-1 border-slate-300 border px-3 shadow-indigo-100 w-full flex">
        <div className="">
          <Image
            alt="Home"
            src={RedCra32}
            className="h-auto w-[500px] rounded-[5px] object-cover rotate-90"
          />
          {/* <div className="flex flex-row justify-between">
            <Image
              alt="Home"
              src={RedCra01}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
            <Image
              alt="Home"
              src={RedCra02}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
            <Image
              alt="Home"
              src={RedCra03}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
          </div> */}
        </div>

        <div className=" px-4 flex  flex-col  justify-around w-full">
          <div>
            <dl>
              <div className="flex justify-between items-baseline">
                <dd className="font-semibold text-xl  text-[#000000]">
                  Volkswagen Polo 1.2 TDI
                </dd>
                <dd className=" text-sm  text-[#000000]">
                  <span>Date Published: </span> <span>12/10/2023</span>
                </dd>
              </div>

              <div className="mt-3 ">
                <div className="flex gap-3">
                  <dd className="text-xl  font-semibold text-[#EF2C2E]">
                    20,300 €
                  </dd>
                  <span className="line-through">20,300 €</span>
                </div>

                <p className="text-[#444] mt-2 text-sm">+ Omregistrering</p>
              </div>
            </dl>

            <div className="mt-3  items-center  text-xs grid grid-cols-4 w-full ">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-[#444] text-start ">Vehicle type</p>

                  <p className="font-bold text-start text-sm">Sedan</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500 text-start">Gearbox type</p>

                  <p className="font-bold text-start text-sm">Auto</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">Kilometers</p>

                  <p className="font-bold text-start text-sm">150,000 km</p>
                </div>
              </div>
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">150,000 km</p>

                  <p className="font-bold text-start text-sm">2019</p>
                </div>
              </div>
            </div>
            <div className="mt-3  items-center  text-xs grid grid-cols-4 w-full ">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-[#444] text-start ">HP/kW</p>

                  <p className="font-bold text-start text-sm">55/75</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500 text-start">Doors number</p>

                  <p className="font-bold text-start text-sm">4</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">cm3</p>

                  <p className="font-bold text-start text-sm">2000</p>
                </div>
              </div>
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">Fuel type</p>

                  <p className="font-bold text-start text-sm">2000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between w-full gap-2">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-sm rounded-[5px] text-center text-[#003087] ">
                Damaged
              </div>
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-sm rounded-[5px] text-center text-[#003087] ">
                (Not)Registered
              </div>
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-centertext-sm  rounded-[5px] text-center text-[#003087] ">
                Guarantee
              </div>
            </div>
            <div className="flex justify-center items-center">
              <dd className=" text-base  flex items-center gap-2   text-[#000000]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M8.99991 10.0726C10.2923 10.0726 11.3399 9.02492 11.3399 7.73258C11.3399 6.44023 10.2923 5.39258 8.99991 5.39258C7.70757 5.39258 6.65991 6.44023 6.65991 7.73258C6.65991 9.02492 7.70757 10.0726 8.99991 10.0726Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.71527 6.3675C4.19277 -0.127498 13.8153 -0.119998 15.2853 6.375C16.1478 10.185 13.7778 13.41 11.7003 15.405C10.1928 16.86 7.80777 16.86 6.29277 15.405C4.22277 13.41 1.85277 10.1775 2.71527 6.3675Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                  </svg>{" "}
                </span>{" "}
                <span>Prigrevica</span>
              </dd>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-[5px] mt-5 my-2 shadow-sm bg-white p-1 border-slate-300 border px-3 shadow-indigo-100 w-full flex">
        <div className="flex flex-col">
          <Image
            alt="Home"
            src={RedCra32}
            className="h-auto w-[500px] rounded-[5px] object-cover rotate-90"
          />
          <div className="flex flex-row justify-between">
            <Image
              alt="Home"
              src={RedCra01}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
            <Image
              alt="Home"
              src={RedCra02}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
            <Image
              alt="Home"
              src={RedCra03}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
          </div>
        </div>

        <div className=" px-4 flex  flex-col  justify-around w-full">
          <div>
            <dl>
              <div className="flex justify-between items-baseline">
                <dd className="font-semibold text-xl  text-[#000000]">
                  Volkswagen Polo 1.2 TDI
                </dd>
                <dd className=" text-sm  text-[#000000]">
                  <span>Date Published: </span> <span>12/10/2023</span>
                </dd>
              </div>

              <div className="mt-3">
                <dd className="text-xl  font-semibold text-[#EF2C2E]">
                  20,300 €
                </dd>
                <p className="text-[#444] mt-2 text-sm">+ Omregistrering</p>
              </div>
            </dl>

            <div className="mt-6  items-center  text-xs grid grid-cols-4 w-full ">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-[#444] text-start ">Vehicle type</p>

                  <p className="font-bold text-start text-sm">Sedan</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500 text-start">Gearbox type</p>

                  <p className="font-bold text-start text-sm">Auto</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">Kilometers</p>

                  <p className="font-bold text-start text-sm">150,000 km</p>
                </div>
              </div>
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">150,000 km</p>

                  <p className="font-bold text-start text-sm">2019</p>
                </div>
              </div>
            </div>
            <div className="mt-6  items-center  text-xs grid grid-cols-4 w-full ">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-[#444] text-start ">HP/kW</p>

                  <p className="font-bold text-start text-sm">55/75</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500 text-start">Doors number</p>

                  <p className="font-bold text-start text-sm">4</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">cm3</p>

                  <p className="font-bold text-start text-sm">2000</p>
                </div>
              </div>
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">Fuel type</p>

                  <p className="font-bold text-start text-sm">2000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6  flex flex-row justify-between w-full gap-2">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-sm rounded-[5px] text-center text-[#003087] ">
                Damaged
              </div>
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-sm rounded-[5px] text-center text-[#003087] ">
                (Not)Registered
              </div>
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-centertext-sm  rounded-[5px] text-center text-[#003087] ">
                Guarantee
              </div>
            </div>
            <div className="flex justify-center items-center">
              <dd className=" text-base  flex items-center gap-2   text-[#000000]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M8.99991 10.0726C10.2923 10.0726 11.3399 9.02492 11.3399 7.73258C11.3399 6.44023 10.2923 5.39258 8.99991 5.39258C7.70757 5.39258 6.65991 6.44023 6.65991 7.73258C6.65991 9.02492 7.70757 10.0726 8.99991 10.0726Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.71527 6.3675C4.19277 -0.127498 13.8153 -0.119998 15.2853 6.375C16.1478 10.185 13.7778 13.41 11.7003 15.405C10.1928 16.86 7.80777 16.86 6.29277 15.405C4.22277 13.41 1.85277 10.1775 2.71527 6.3675Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                  </svg>{" "}
                </span>{" "}
                <span>Prigrevica</span>
              </dd>
            </div>
          </div>
        </div>
      </div>

      <div className=" rounded-[5px] mt-5 justify-around my-2 shadow-sm bg-[#00308726] p-1 border-slate-300 border px-3 shadow-indigo-100 w-full flex">
        <div className="">
          <Image
            alt="Home"
            src={RedCra32}
            className="h-auto w-[500px] rounded-[5px] object-cover rotate-90"
          />
          {/* <div className="flex flex-row justify-between">
            <Image
              alt="Home"
              src={RedCra01}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
            <Image
              alt="Home"
              src={RedCra02}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
            <Image
              alt="Home"
              src={RedCra03}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
          </div> */}
        </div>

        <div className=" px-4 flex  flex-col  justify-around w-full">
          <div>
            <dl>
              <div className="flex justify-between items-baseline">
                <dd className="font-semibold text-xl  text-[#000000]">
                  Volkswagen Polo 1.2 TDI
                </dd>
                <dd className=" text-sm  text-[#000000]">
                  <span>Date Published: </span> <span>12/10/2023</span>
                </dd>
              </div>

              <div className="mt-3 ">
                <div className="flex gap-3">
                  <dd className="text-xl  font-semibold text-[#EF2C2E]">
                    20,300 €
                  </dd>
                  <span className="line-through">20,300 €</span>
                </div>

                <p className="text-[#444] mt-2 text-sm">+ Omregistrering</p>
              </div>
            </dl>

            <div className="mt-3  items-center  text-xs grid grid-cols-4 w-full ">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-[#444] text-start ">Vehicle type</p>

                  <p className="font-bold text-start text-sm">Sedan</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500 text-start">Gearbox type</p>

                  <p className="font-bold text-start text-sm">Auto</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">Kilometers</p>

                  <p className="font-bold text-start text-sm">150,000 km</p>
                </div>
              </div>
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">150,000 km</p>

                  <p className="font-bold text-start text-sm">2019</p>
                </div>
              </div>
            </div>
            <div className="mt-3  items-center  text-xs grid grid-cols-4 w-full ">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-[#444] text-start ">HP/kW</p>

                  <p className="font-bold text-start text-sm">55/75</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500 text-start">Doors number</p>

                  <p className="font-bold text-start text-sm">4</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">cm3</p>

                  <p className="font-bold text-start text-sm">2000</p>
                </div>
              </div>
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">Fuel type</p>

                  <p className="font-bold text-start text-sm">2000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between w-full gap-2">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-sm rounded-[5px] text-center text-[#003087] ">
                Damaged
              </div>
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-sm rounded-[5px] text-center text-[#003087] ">
                (Not)Registered
              </div>
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-centertext-sm  rounded-[5px] text-center text-[#003087] ">
                Guarantee
              </div>
            </div>
            <div className="flex justify-center items-center">
              <dd className=" text-base  flex items-center gap-2   text-[#000000]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M8.99991 10.0726C10.2923 10.0726 11.3399 9.02492 11.3399 7.73258C11.3399 6.44023 10.2923 5.39258 8.99991 5.39258C7.70757 5.39258 6.65991 6.44023 6.65991 7.73258C6.65991 9.02492 7.70757 10.0726 8.99991 10.0726Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.71527 6.3675C4.19277 -0.127498 13.8153 -0.119998 15.2853 6.375C16.1478 10.185 13.7778 13.41 11.7003 15.405C10.1928 16.86 7.80777 16.86 6.29277 15.405C4.22277 13.41 1.85277 10.1775 2.71527 6.3675Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                  </svg>{" "}
                </span>{" "}
                <span>Prigrevica</span>
              </dd>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-[5px] mt-5 justify-around my-2 shadow-sm bg-white p-1 border-slate-300 border px-3 shadow-indigo-100 w-full flex">
        <div className="">
          <Image
            alt="Home"
            src={RedCra32}
            className="h-auto w-[500px] rounded-[5px] object-cover rotate-90"
          />
          {/* <div className="flex flex-row justify-between">
            <Image
              alt="Home"
              src={RedCra01}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
            <Image
              alt="Home"
              src={RedCra02}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
            <Image
              alt="Home"
              src={RedCra03}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
          </div> */}
        </div>

        <div className=" px-4 flex  flex-col  justify-around w-full">
          <div>
            <dl>
              <div className="flex justify-between items-baseline">
                <dd className="font-semibold text-xl  text-[#000000]">
                  Volkswagen Polo 1.2 TDI
                </dd>
                <dd className=" text-sm  text-[#000000]">
                  <span>Date Published: </span> <span>12/10/2023</span>
                </dd>
              </div>

              <div className="mt-3 ">
                <div className="flex gap-3">
                  <dd className="text-xl  font-semibold text-[#EF2C2E]">
                    20,300 €
                  </dd>
                  <span className="line-through">20,300 €</span>
                </div>

                <p className="text-[#444] mt-2 text-sm">+ Omregistrering</p>
              </div>
            </dl>

            <div className="mt-3  items-center  text-xs grid grid-cols-4 w-full ">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-[#444] text-start ">Vehicle type</p>

                  <p className="font-bold text-start text-sm">Sedan</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500 text-start">Gearbox type</p>

                  <p className="font-bold text-start text-sm">Auto</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">Kilometers</p>

                  <p className="font-bold text-start text-sm">150,000 km</p>
                </div>
              </div>
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">150,000 km</p>

                  <p className="font-bold text-start text-sm">2019</p>
                </div>
              </div>
            </div>
            <div className="mt-3  items-center  text-xs grid grid-cols-4 w-full ">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-[#444] text-start ">HP/kW</p>

                  <p className="font-bold text-start text-sm">55/75</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500 text-start">Doors number</p>

                  <p className="font-bold text-start text-sm">4</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">cm3</p>

                  <p className="font-bold text-start text-sm">2000</p>
                </div>
              </div>
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">Fuel type</p>

                  <p className="font-bold text-start text-sm">2000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between w-full gap-2">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-sm rounded-[5px] text-center text-[#003087] ">
                Damaged
              </div>
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-sm rounded-[5px] text-center text-[#003087] ">
                (Not)Registered
              </div>
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-centertext-sm  rounded-[5px] text-center text-[#003087] ">
                Guarantee
              </div>
            </div>
            <div className="flex justify-center items-center">
              <dd className=" text-base  flex items-center gap-2   text-[#000000]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M8.99991 10.0726C10.2923 10.0726 11.3399 9.02492 11.3399 7.73258C11.3399 6.44023 10.2923 5.39258 8.99991 5.39258C7.70757 5.39258 6.65991 6.44023 6.65991 7.73258C6.65991 9.02492 7.70757 10.0726 8.99991 10.0726Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.71527 6.3675C4.19277 -0.127498 13.8153 -0.119998 15.2853 6.375C16.1478 10.185 13.7778 13.41 11.7003 15.405C10.1928 16.86 7.80777 16.86 6.29277 15.405C4.22277 13.41 1.85277 10.1775 2.71527 6.3675Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                  </svg>{" "}
                </span>{" "}
                <span>Prigrevica</span>
              </dd>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-[5px] mt-5 justify-around my-2 shadow-sm bg-white p-1 border-slate-300 border px-3 shadow-indigo-100 w-full flex">
        <div className="">
          <Image
            alt="Home"
            src={RedCra32}
            className="h-auto w-[500px] rounded-[5px] object-cover rotate-90"
          />
          {/* <div className="flex flex-row justify-between">
            <Image
              alt="Home"
              src={RedCra01}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
            <Image
              alt="Home"
              src={RedCra02}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
            <Image
              alt="Home"
              src={RedCra03}
              className="h-auto w-20 rounded-[5px] object-cover "
            />
          </div> */}
        </div>

        <div className=" px-4 flex  flex-col  justify-around w-full">
          <div>
            <dl>
              <div className="flex justify-between items-baseline">
                <dd className="font-semibold text-xl  text-[#000000]">
                  Volkswagen Polo 1.2 TDI
                </dd>
                <dd className=" text-sm  text-[#000000]">
                  <span>Date Published: </span> <span>12/10/2023</span>
                </dd>
              </div>

              <div className="mt-3 ">
                <div className="flex gap-3">
                  <dd className="text-xl  font-semibold text-[#EF2C2E]">
                    20,300 €
                  </dd>
                  <span className="line-through">20,300 €</span>
                </div>

                <p className="text-[#444] mt-2 text-sm">+ Omregistrering</p>
              </div>
            </dl>

            <div className="mt-3  items-center  text-xs grid grid-cols-4 w-full ">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-[#444] text-start ">Vehicle type</p>

                  <p className="font-bold text-start text-sm">Sedan</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500 text-start">Gearbox type</p>

                  <p className="font-bold text-start text-sm">Auto</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">Kilometers</p>

                  <p className="font-bold text-start text-sm">150,000 km</p>
                </div>
              </div>
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">150,000 km</p>

                  <p className="font-bold text-start text-sm">2019</p>
                </div>
              </div>
            </div>
            <div className="mt-3  items-center  text-xs grid grid-cols-4 w-full ">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-[#444] text-start ">HP/kW</p>

                  <p className="font-bold text-start text-sm">55/75</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500 text-start">Doors number</p>

                  <p className="font-bold text-start text-sm">4</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">cm3</p>

                  <p className="font-bold text-start text-sm">2000</p>
                </div>
              </div>
              <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                <div className="mt-1.5 sm:mt-0">
                  <p className=" text-[#444] text-start">Fuel type</p>

                  <p className="font-bold text-start text-sm">2000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between w-full gap-2">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-sm rounded-[5px] text-center text-[#003087] ">
                Damaged
              </div>
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-sm rounded-[5px] text-center text-[#003087] ">
                (Not)Registered
              </div>
              <div className="bg-[#00308726] py-2 px-3 flex justify-center items-centertext-sm  rounded-[5px] text-center text-[#003087] ">
                Guarantee
              </div>
            </div>
            <div className="flex justify-center items-center">
              <dd className=" text-base  flex items-center gap-2   text-[#000000]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M8.99991 10.0726C10.2923 10.0726 11.3399 9.02492 11.3399 7.73258C11.3399 6.44023 10.2923 5.39258 8.99991 5.39258C7.70757 5.39258 6.65991 6.44023 6.65991 7.73258C6.65991 9.02492 7.70757 10.0726 8.99991 10.0726Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.71527 6.3675C4.19277 -0.127498 13.8153 -0.119998 15.2853 6.375C16.1478 10.185 13.7778 13.41 11.7003 15.405C10.1928 16.86 7.80777 16.86 6.29277 15.405C4.22277 13.41 1.85277 10.1775 2.71527 6.3675Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                  </svg>{" "}
                </span>{" "}
                <span>Prigrevica</span>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default largeCard;
