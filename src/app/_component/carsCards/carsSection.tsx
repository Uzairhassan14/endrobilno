"use client";
import React, { useState } from "react";
import Navbar from "@/app/_component/navbar/nabar";
import Footer from "@/app/_component/footer/footer";
import Image from "next/image";
import mainCar from "@/app/_component/assets/main-car.png";
import SmallCard from "@/app/_component/carsCards/smallCard";
import LargeCard from "@/app/_component/carsCards/largeCard";
import DetailSearch from "@/app/_component/carsCards/detailSearch";
import RedCar from "@/app/_component/assets/card32red.png";
import Car from "@/app/_component/assets/car-32.png";

//---------------modal---------------- //
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { X } from "lucide-react";
const carsSection = () => {
  //---------------modal---------------- //
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  //---------------modal---------------- //
  return (
    <>
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
        <section className="px-4  md:px-24 bg-slate-100 pb-12 font-Poppins">
          <div className="flex gap-4 flex-row">
            <div className="block xl:hidden">
              <button
                type="button"
                className="w-12 mt-3 bg-slate-300 border flex justify-center  text-slate-700 p-1 rounded-md shadow-sm items-center"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex p-2 py-4" aria-label="Breadcrumb">
              <ol className="inline-flex flex-wrap gap-3 md:flex-nowrap items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-[12px] sm:text-sm font-medium text-[#003087] hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
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
                      className="ms-1 text-[12px] sm:text-sm  font-medium text-[#003087] hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
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
                    <span className="ms-1 text-[12px] sm:text-sm  font-medium text-[#003087] md:ms-2 dark:text-gray-400">
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
                    <span className="ms-1 text-[12px] sm:text-sm  font-medium text-[#003087] md:ms-2 dark:text-gray-400">
                      Kia Stonic 1.4 MPI EX URBAN A/T
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="flex justify-between  ">
            <aside className="hidden xl:block md:w-[28%]">
              <DetailSearch />
            </aside>
            <div className="w-full xl:w-[72%] flex flex-col bg-white  border-[1px] border-[#B8B8B8] rounded-[5px] p-2 shadow-md m-2 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-3  justify-center  md:justify-between px-2 items-baseline">
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
      <div className="block lg:hidden">
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-[10px] bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        <X />
                      </button>
                    </div>
                    <DetailSearch />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
};

export default carsSection;
