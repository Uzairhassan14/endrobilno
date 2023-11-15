import React from "react";
import Image from "next/image";
import mainCar from "@/app/_component/assets/main-car.png";
import SmallCard from "@/app/_component/carsCards/smallCard";
import Tab from "@/app/_component/tabs";

const page = () => {
  return (
    <section className="flex flex-col justify-between  min-h-screen">
      <header>
        <div>
          <Image
            src={mainCar}
            className=" top-0 w-full h-auto"
            alt="main-car"
          />
        </div>
        <div className="mt-[-150px]">
          <Tab />
        </div>
      </header>
    </section>
  );
};

export default page;
