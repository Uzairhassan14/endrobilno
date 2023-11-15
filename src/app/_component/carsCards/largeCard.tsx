"use client";

import Image from "next/image";
import React, { useState } from "react";
import Car32 from "@/app/_component/assets/car-32.png";
import RedCra32 from "@/app/_component/assets/redCra32.png";
import RedCra01 from "@/app/_component/assets/redCra01.png";
import RedCra02 from "@/app/_component/assets/redCra02.png";
import RedCra03 from "@/app/_component/assets/redCra03.png";

const largeCard = () => {
  const [carsData, setCarsData] = useState([
    {
      id: 1,
      img: RedCra32,
      items: [],
      heading: " Volkswagen Polo 1.2 TDI",
      Published: "12/10/2023",
      price: "20,300 €",
      type: "+ Omregistrering",
      Vehicletype: "Sedan",
      Gearboxtype: "auto",
      Kilometers: "150,000 km",
      year: "2019",
      HPkW: "55/75",
      Doorsnumber: "4",
      cm3: "2000",
      Fueltype: "2000",
      loaction: "Prigrevica",
      Damaged: "Damaged ",
      Registered: "(Not)Registered",
      Guarantee: "Guarantee",
    },
    {
      id: 2,

      img: RedCra32,
      items: [],
      heading: " Volkswagen Polo 1.2 TDI",
      Published: "12/10/2023",
      price: "20,300 €",
      type: "+ Omregistrering",
      Vehicletype: "Sedan",
      Gearboxtype: "auto",
      Kilometers: "150,000 km",
      year: "2019",
      HPkW: "55/75",
      Doorsnumber: "4",
      cm3: "2000",
      Fueltype: "2000",
      loaction: "Prigrevica",
      Damaged: "Damaged ",
      Registered: "(Not)Registered",
      Guarantee: "Guarantee",
    },
    {
      id: 3,

      img: RedCra32,
      items: [RedCra01, RedCra02, RedCra03],
      heading: " Volkswagen Polo 1.2 TDI",
      Published: "12/10/2023",
      price: "20,300 €",
      type: "+ Omregistrering",
      Vehicletype: "Sedan",
      Gearboxtype: "auto",
      Kilometers: "150,000 km",
      year: "2019",
      HPkW: "55/75",
      Doorsnumber: "4",
      cm3: "2000",
      Fueltype: "2000",
      loaction: "Prigrevica",
      Damaged: "Damaged ",
      Registered: "(Not)Registered",
      Guarantee: "Guarantee",
    },
    {
      id: 4,

      img: RedCra32,
      items: [],
      heading: " Volkswagen Polo 1.2 TDI",
      Published: "12/10/2023",
      price: "20,300 €",
      type: "+ Omregistrering",
      Vehicletype: "Sedan",
      Gearboxtype: "auto",
      Kilometers: "150,000 km",
      year: "2019",
      HPkW: "55/75",
      Doorsnumber: "4",
      cm3: "2000",
      Fueltype: "2000",
      loaction: "Prigrevica",
      Damaged: "Damaged ",
      Registered: "(Not)Registered",
      Guarantee: "Guarantee",
    },
    {
      id: 5,

      img: RedCra32,
      items: [],
      heading: " Volkswagen Polo 1.2 TDI",
      Published: "12/10/2023",
      price: "20,300 €",
      type: "+ Omregistrering",
      Vehicletype: "Sedan",
      Gearboxtype: "auto",
      Kilometers: "150,000 km",
      year: "2019",
      HPkW: "55/75",
      Doorsnumber: "4",
      cm3: "2000",
      Fueltype: "2000",
      loaction: "Prigrevica",
      Damaged: "Damaged ",
      Registered: "(Not)Registered",
      Guarantee: "Guarantee",
    },
    {
      id: 6,

      img: RedCra32,
      items: [],
      heading: " Volkswagen Polo 1.2 TDI",
      Published: "12/10/2023",
      price: "20,300 €",
      type: "+ Omregistrering",
      Vehicletype: "Sedan",
      Gearboxtype: "auto",
      Kilometers: "150,000 km",
      year: "2019",
      HPkW: "55/75",
      Doorsnumber: "4",
      cm3: "2000",
      Fueltype: "2000",
      loaction: "Prigrevica",
      Damaged: "Damaged ",
      Registered: "(Not)Registered",
      Guarantee: "Guarantee",
    },
  ]);

  return (
    <>
      {carsData.map((item) => {
        return (
          <>
            <div
              className={` rounded-[5px] mt-5 justify-start lg:justify-between my-2 shadow-sm  p-1 border-slate-300 border px-3 shadow-indigo-100 w-full flex flex-wrap lg:flex-nowrap ${
                item.id == 2
                  ? "bg-[#EF2C2E26]"
                  : item.id == 4
                  ? "bg-[#00308726]"
                  : "bg-white"
              } `}
            >
              <div className="flex flex-row lg:flex-col gap-4">
                <Image
                  alt="Home"
                  src={item.img}
                  className="h-auto w-full md:w-[250px] lg:w-[500px] rounded-[5px] object-cover rotate-90"
                />
                {item.items.length > 0 && (
                  <>
                    <div className="flex flex-col lg:flex-row justify-between">
                      {item.items.map((item, index) => {
                        return (
                          <>
                            <Image
                              alt="Home"
                              key={index}
                              src={item}
                              className="h-auto w-24 border-slate-200 border-2 lg:border-none  lg:w-20 rounded-[5px] object-cover "
                            />
                          </>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>

              <div className=" md:px-4 flex  flex-col  justify-between py-3 w-full">
                {/* <div> */}
                <dl>
                  <div className="flex flex-col md:flex-row justify-between items-baseline">
                    <dd className="font-semibold text-xl  text-[#000000]">
                      {item.heading}
                    </dd>
                    <dd className=" text-sm  text-[#000000]">
                      <span>Date Published: </span>{" "}
                      <span>{item.Published}</span>
                    </dd>
                  </div>

                  <div className="mt-3 ">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <dd className="text-xl  font-semibold text-[#EF2C2E]">
                        {item.price}
                      </dd>
                      <span className="line-through">20,300 €</span>
                    </div>

                    <p className="text-[#444] mt-2 text-sm">{item.type}</p>
                  </div>
                </dl>

                <div className=" grid  gap-2 grid-cols-2 sm:grid-cols-3 md:gap-0  md:grid-cols-4 w-full  mt-3  items-center  text-xs">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-[#444] text-start ">Vehicle type</p>

                      <p className="font-bold text-start text-sm">
                        {item.Vehicletype}
                      </p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500 text-start">Gearbox type</p>

                      <p className="font-bold text-start text-sm">
                        {item.Gearboxtype}
                      </p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                    <div className="mt-1.5 sm:mt-0">
                      <p className=" text-[#444] text-start">Kilometers</p>

                      <p className="font-bold text-start text-sm">
                        {item.Kilometers}
                      </p>
                    </div>
                  </div>
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                    <div className="mt-1.5 sm:mt-0">
                      <p className=" text-[#444] text-start">150,000 km</p>

                      <p className="font-bold text-start text-sm">
                        {item.year}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid  gap-2 grid-cols-2 sm:grid-cols-3 md:gap-0  md:grid-cols-4 w-full  mt-3  items-center  text-xs">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-[#444] text-start ">HP/kW</p>

                      <p className="font-bold text-start text-sm">
                        {item.HPkW}
                      </p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start  sm:gap-2">
                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500 text-start">Doors number</p>

                      <p className="font-bold text-start text-sm">
                        {item.Doorsnumber}
                      </p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                    <div className="mt-1.5 sm:mt-0">
                      <p className=" text-[#444] text-start">cm3</p>

                      <p className="font-bold text-start text-sm">{item.cm3}</p>
                    </div>
                  </div>
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
                    <div className="mt-1.5 sm:mt-0">
                      <p className=" text-[#444] text-start">Fuel type</p>

                      <p className="font-bold text-start text-sm">
                        {item.Fueltype}
                      </p>
                    </div>
                  </div>
                </div>
                {/* </div> */}

                <div className="flex flex-col flex-wrap gap-4 mt-4 lg:mt-0 md:gap-2 md:flex-row md:flex-nowrap justify-between w-full ">
                  <div className="grid mt-4 grid-cols-2 gap-4 md:mt-0 md:grid-cols-3 md:gap-3">
                    <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-[13px] rounded-[5px] text-center text-[#003087] ">
                      {item.Damaged}
                    </div>
                    <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-[13px] rounded-[5px] text-center text-[#003087] ">
                      {item.Registered}
                    </div>
                    <div className="bg-[#00308726] py-2 px-3 flex justify-center items-center text-[13px]  rounded-[5px] text-center text-[#003087] ">
                      {item.Guarantee}
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
                      <span>{item.loaction}</span>
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default largeCard;
