import React from "react";
import Navbar from "@/app/_component/navbar/nabar";
import Footer from "@/app/_component/footer/footer";
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
      </header>
      <section>
        <Tab />
      </section>
    </section>
  );
};

export default page;
