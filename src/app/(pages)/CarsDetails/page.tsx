import React from "react";
import Navbar from "@/app/_component/navbar/nabar";
import Footer from "@/app/_component/footer/footer";
import Image from "next/image";
import mainCar from "@/app/_component/assets/main-car.png";
import SmallCard from "@/app/_component/carsCards/smallCard";
import LargeCard from "@/app/_component/carsCards/largeCard";
import DetailSearch from "@/app/_component/carsCards/detailSearch";
import RedCar from "@/app/_component/assets/redCra32.png";
import Car from "@/app/_component/assets/car-32.png";

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
        <div className="flex justify-between px-24 ">
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
              <LargeCard />
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
