import Image from "next/image";
import React from "react";
import Car32 from "@/app/_component/assets/car-32.png";

const smallCard = () => {
  return (
    <div className="block rounded-lg m-2 shadow-sm bg-white shadow-indigo-100 w-80">
      <Image
        alt="Home"
        src={Car32}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-3 px-4 pb-5">
        <dl>
          <div>
            <dd className="font-semibold text-lg  text-[#000000]">
              Volkswagen Tiguan
            </dd>
          </div>

          <div>
            <dd className="text-xl  font-semibold text-[#EF2C2E]">20,300 €</dd>
          </div>
        </dl>

        <div className="mt-6  items-center  text-xs grid grid-cols-3 ">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-start sm:gap-2">
            <div className="mt-1.5 sm:mt-0">
              <p className="text-[#444] text-center ">Year</p>

              <p className="font-bold text-center text-sm">2019</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-center border border-x-1 border-t-0  border-b-0 border-[#B8B8B8]  sm:gap-2">
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500 text-center">Kilometers</p>

              <p className="font-bold text-center text-sm">185.000</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center justify-end sm:gap-2">
            <div className="mt-1.5 sm:mt-0">
              <p className=" text-[#444] text-center">Engine</p>

              <p className="font-bold text-center text-sm">Petrol</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default smallCard;
