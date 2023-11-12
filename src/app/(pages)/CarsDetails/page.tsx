import React from "react";
import Navbar from "@/app/_component/navbar/nabar";
import Footer from "@/app/_component/footer/footer";
import Image from "next/image";
import mainCar from "@/app/_component/assets/main-car.png";
import SmallCard from "@/app/_component/carsCards/smallCard";
import LargeCard from "@/app/_component/carsCards/largeCard";
import Tab from "@/app/_component/tabs";

const page = () => {
  return (
    <section className="flex flex-col justify-between  min-h-screen">
      <header>
        <Navbar />
        <div>
          <Image
            src={mainCar}
            className=" top-0 w-full h-auto"
            alt="main-car"
          />
        </div>
      </header>
      <section>
        <div className="flex justify-between ">
          <aside className="w-1/3"></aside>
          <div className=" w-9/12 flex flex-col bg-white  border-[1px] border-slate-400 rounded-[5px] p-2 shadow-md m-2 ">
            <div className="flex gap-3  justify-between items-baseline">
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
            <div>
              <LargeCard />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#003087] w-full">
        <Footer />
      </footer>
    </section>
  );
};

export default page;
