import React from "react";
import Navbar from "@/app/_component/navbar/nabar";
import Footer from "@/app/_component/footer/footer";
import Image from "next/image";
import mainCar from "@/app/_component/assets/main-car.png";
import SmallCard from "@/app/_component/carsCards/smallCard";
import LargeCard from "@/app/_component/carsCards/largeCard";
import DetailSearch from "@/app/_component/carsCards/detailSearch";
import RedCar from "@/app/_component/assets/card32red.png";
import Car from "@/app/_component/assets/car-32.png";

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
      <section className="px-24 bg-slate-100 pb-12 font-Poppins">
        <nav className="flex p-2 py-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#003087] hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="ms-1 text-sm font-medium text-[#003087] hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  My car search
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-[#003087] md:ms-2 dark:text-gray-400">
                  1,421,546 offers
                </span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-[#003087] md:ms-2 dark:text-gray-400">
                  Kia Stonic 1.4 MPI EX URBAN A/T
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex justify-between  ">
          <aside className="hidden lg:block md:w-[28%]">
            <DetailSearch />
          </aside>
          <div className="w-full lg:w-[72%] flex flex-col bg-white  border-[1px] border-[#B8B8B8] rounded-[5px] p-2 shadow-md m-2 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-3  justify-center  md:justify-between px-2 items-baseline">
              <SmallCard
                imageSrc={Car}
                title={"Volkswagen Tiguan"}
                price={"20,300 €"}
                year={2019}
                kilometers={185.0}
                engine={"Petrol"}
                classname={""}
              />
              <SmallCard
                imageSrc={RedCar}
                title={"Ford Mondeo ST"}
                price={"20,300 €"}
                year={2019}
                kilometers={185.0}
                engine={"Petrol"}
                classname={""}
              />
              <SmallCard
                imageSrc={Car}
                title={"Ford Mondeo ST"}
                price={"20,300 €"}
                year={2019}
                kilometers={185.0}
                engine={"Petrol"}
                classname={""}
              />
            </div>
            <div>
              <LargeCard />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
