import React from "react";
import Navbar from "@/app/_component/navbar/nabar";
import Footer from "@/app/_component/footer/footer";
import Image from "next/image";
import mainCar from "@/app/_component/assets/main-car.png";
import SmallCard from "@/app/_component/carsCards/smallCard";
import LargeCard from "@/app/_component/carsCards/largeCard";

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
        {/* <div>
          <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
              <div className="mx-auto max-w-md">
                <div className="divide-y divide-gray-300/50">
                  <div className="space-y-6 py-8 text-base leading-7 text-gray-600"></div>
                  <div className="pt-8 text-base font-semibold leading-7">
                    <p className="text-sky-500 hover:text-sky-600">
                      Want to dig deeper into Tailwind?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div> */}
      </header>
      <section>
        <div className="flex justify-between ">
          <aside className="w-1/3"></aside>
          <div className=" w-9/12 flex flex-col">
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
