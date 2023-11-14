"use client";
import React, { useState } from "react";
import Secloter from "../footer/Secloter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkboxitem } from "../checkbox";

const detailSearch = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const options = ["Option1", "Option2", "Option3" /* Add more options */];

  const handleItemSelect = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <div className="flex flex-col bg-white  border-[1px] gap-4 border-[#B8B8B8] rounded-[5px] p-4 shadow-sm m-2 ">
      <h1 className="text-[#EF2C2E]  font-normal text-lg border-b pb-4 border-[#B8B8B8]  font-Lora">
        Detailed Search
      </h1>
      <h1 className=" text-[#1E1E1E] text-base font-semibold font-Poppins ">
        Mark, model, variant
      </h1>
      <div className=" flex flex-row gap-2 justify-between">
        <div className="w-[48%]">
          <Secloter
            options={options}
            selectedItem={selectedItem}
            defaultoption={"Form"}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className="w-[48%]">
          <Secloter
            options={options}
            selectedItem={selectedItem}
            defaultoption={"To"}
            onItemSelect={handleItemSelect}
          />
        </div>
      </div>
      <Input
        type="text"
        className="w-full  border placeholder:text-[#003087]  rounded-[5px] h-12 border-[#003087]"
        placeholder="Variant"
      />
      <button className="text-[#EF2C2E] text-end underline  text-base ">
        More
      </button>
      <hr className=" pb-2 border-[#B8B8B8]" />
      <h1 className=" text-[#1E1E1E] text-base font-semibold font-Poppins ">
        Payment type
      </h1>
      <div className="w-full rounded-[5px] bg-[#FFFFFF] flex flex-row  ">
        <Button
          variant="outline"
          className="bg-[#EF2C2E]  text-white font-light gap-2 hover:bg-[#EF2C2E] hover:text-white    w-1/2   border-none rounded-[5px] rounded-e-[0px] h-12 d-flex justify-start"
        >
          Buy
        </Button>
        <Button
          variant="outline"
          className="bg-white text-[#003087] hover:text-[#003087] font-light gap-2  w-1/2 border border-[#003087]  border-s-0     rounded-[5px] rounded-s-[0px] h-12 d-flex justify-start"
        >
          Leasing
        </Button>
      </div>
      <h1 className=" text-[#1E1E1E] text-base font-semibold font-Poppins ">
        Year
      </h1>
      <div className=" flex flex-row gap-2 justify-between">
        <div className="w-[48%]">
          <Secloter
            options={options}
            selectedItem={selectedItem}
            defaultoption={"Form"}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className="w-[48%]">
          <Secloter
            options={options}
            selectedItem={selectedItem}
            defaultoption={"To"}
            onItemSelect={handleItemSelect}
          />
        </div>
      </div>
      <h1 className=" text-[#1E1E1E] text-base font-semibold font-Poppins ">
        Kilometers
      </h1>
      <div className=" flex flex-row gap-2 justify-between">
        <div className="w-[48%]">
          <Secloter
            options={options}
            selectedItem={selectedItem}
            defaultoption={"Form"}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className="w-[48%]">
          <Secloter
            options={options}
            selectedItem={selectedItem}
            defaultoption={"To"}
            onItemSelect={handleItemSelect}
          />
        </div>
      </div>
      <Button
        variant="outline"
        className="bg-[#EF2C2E] text-white font-light gap-2 hover:bg-[#EF2C2E] hover:text-white w-full     border-none rounded-[5px] h-12"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        5.221.456 results
      </Button>
      <Button
        variant="outline"
        className="bg-[#003087] text-white border border-[#003087]  font-light gap-2 hover:bg-[#003087] hover:text-white w-full      rounded-[5px] h-12"
      >
        Save Search
      </Button>
      <hr className=" pb-2 border-[#B8B8B8]" />
      <div className=" flex flex-row gap-2 justify-between">
        <div className="w-[48%]">
          <Label htmlFor="" className="space-x-0   font-semibold text-[13px]  ">
            Fuel Type
          </Label>
          <Secloter
            options={options}
            selectedItem={selectedItem}
            defaultoption={"Diesel"}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className="w-[48%]">
          <Label htmlFor="" className="space-x-0   font-semibold text-[13px]  ">
            Vehicle type
          </Label>
          <Secloter
            options={options}
            selectedItem={selectedItem}
            defaultoption={"Coupe"}
            onItemSelect={handleItemSelect}
          />
        </div>
      </div>
      <Label htmlFor="" className="space-x-0   font-semibold text-[13px]  ">
        Power (hp)
      </Label>
      <div className=" flex justify-between">
        <div className="w-[48%]">
          <Secloter
            options={options}
            selectedItem={selectedItem}
            defaultoption={"From"}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className="w-[48%]">
          <Secloter
            options={options}
            selectedItem={selectedItem}
            defaultoption={"To"}
            onItemSelect={handleItemSelect}
          />
        </div>
      </div>
      <div className=" ">
        <Label htmlFor="" className="space-x-0   font-semibold text-[13px]  ">
          Transmission
        </Label>
        <div className="w-full mt-1">
          <Secloter
            options={options}
            selectedItem={selectedItem}
            defaultoption={"Automatic"}
            onItemSelect={handleItemSelect}
          />
        </div>
      </div>
      <h1 className=" text-[#1E1E1E] text-base font-semibold font-Poppins ">
        Wheel drive
      </h1>
      <Checkboxitem lable="Rear-wheel drive" />
      <Checkboxitem lable="Front-wheel drive" />
      <Checkboxitem lable="Four-wheel drive" />
      <h1 className=" text-[#1E1E1E] text-base font-semibold font-Poppins ">
        Electric vehicles
      </h1>
      <div className=" flex flex-row gap-2 justify-between">
        <div className="w-[48%]">
          <Label htmlFor="" className="space-x-0   font-semibold text-[13px]  ">
            Range
          </Label>
          <div className="mt-1">
            <Secloter
              options={options}
              selectedItem={selectedItem}
              defaultoption={"Diesel"}
              onItemSelect={handleItemSelect}
            />
          </div>
        </div>
        <div className="w-[48%]">
          <Label htmlFor="" className="space-x-0   font-semibold text-[13px]  ">
            Charge time
          </Label>
          <div className="mt-1">
            <Secloter
              options={options}
              selectedItem={selectedItem}
              defaultoption={"Coupe"}
              onItemSelect={handleItemSelect}
            />
          </div>
        </div>
      </div>
      <div className=" ">
        <Label htmlFor="" className="space-x-0   font-semibold text-[13px]  ">
          Fast charge time
        </Label>
        <div className="w-full mt-1">
          <Secloter
            options={options}
            selectedItem={selectedItem}
            defaultoption={"."}
            onItemSelect={handleItemSelect}
          />
        </div>
      </div>
      <div className=" flex flex-row gap-2 justify-between">
        <div className="w-[48%]">
          <Label htmlFor="" className="space-x-0   font-semibold text-[13px]  ">
            Battery capacity
          </Label>
          <div className="mt-1">
            <Secloter
              options={options}
              selectedItem={selectedItem}
              defaultoption={"From kWh"}
              onItemSelect={handleItemSelect}
            />
          </div>
        </div>
        <div className="w-[48%]">
          <Label
            htmlFor=""
            className="space-x-0 text-white  font-semibold text-[13px]  "
          >
            .
          </Label>
          <div className="mt-1">
            <Secloter
              options={options}
              selectedItem={selectedItem}
              defaultoption={"Up to kWh"}
              onItemSelect={handleItemSelect}
            />
          </div>
        </div>
      </div>
      <button className="text-[#EF2C2E] text-end underline  text-base ">
        More
      </button>
      <hr className=" pb-2 border-[#B8B8B8]" />
      <h1 className=" text-[#1E1E1E] text-base font-semibold font-Poppins ">
        Exterior Colour
      </h1>
      <div className="grid grid-cols-7  justify-between  ">
        <div className="bg-[#D5B786] rounded-full h-6 w-6"></div>
        <div className="bg-[#7F6029] rounded-full h-6 w-6"></div>
        <div className="bg-[#E3C143] rounded-full h-6 w-6"></div>
        <div className="bg-[#8BB849] rounded-full h-6 w-6"></div>
        <div className="bg-[#EB5149] rounded-full h-6 w-6"></div>
        <div className="bg-[#F2F2F2] rounded-full h-6 w-6"></div>
        <div className="bg-[white] border border-[black] rounded-full h-6 w-6"></div>
      </div>
      <div className="grid grid-cols-7  justify-between  ">
        <div className="bg-[#456DD4] rounded-full h-6 w-6"></div>
        <div className="bg-[#EFD447] rounded-full h-6 w-6"></div>
        <div className="bg-[#ABABAB] rounded-full h-6 w-6"></div>
        <div className="bg-[#EF863E] rounded-full h-6 w-6"></div>
        <div className="bg-[#333333] rounded-full h-6 w-6"></div>
        <div className="bg-[#8C63F6] rounded-full h-6 w-6"></div>
        <div className="bg-[#1E1F24] rounded-full h-6 w-6"></div>
      </div>
      <hr className=" pb-2 border-[#B8B8B8]" />

      <h1 className=" text-[#1E1E1E] text-base font-semibold font-Poppins ">
        Wheel set
      </h1>

      <Checkboxitem lable="One set of wheels" />
      <Checkboxitem lable="Two wheel sets" />
      <hr className=" pb-2 border-[#B8B8B8]" />

      <h1 className=" text-[#1E1E1E] text-base font-semibold font-Poppins ">
        Equipment
      </h1>
      <Checkboxitem lable="Towbar" />
      <Checkboxitem lable="Engine heater" />
      <Checkboxitem lable="Navigation system" />
      <Checkboxitem lable="Radio DAB+" />
      <Checkboxitem lable="Leather Interior" />
      <hr className=" pb-2 border-[#B8B8B8]" />
      <h1 className=" text-[#1E1E1E] text-base font-semibold font-Poppins ">
        Area
      </h1>
      <Checkboxitem lable="Agder" />
      <Checkboxitem lable="More and Romsdal" />
      <Checkboxitem lable="Nordland" />
      <Checkboxitem lable="Oslo" />
      <Checkboxitem lable="Rogaland" />
      <Checkboxitem lable="Troms and Finnmark" />
      <Checkboxitem lable="Trondelag" />
      <Checkboxitem lable="Vestfold and Telemark" />
      <Checkboxitem lable="Westland" />
      <Checkboxitem lable="Viken" />
      <hr className=" pb-2 border-[#B8B8B8]" />
      <h1 className="text-[#EF2C2E]  font-normal text-lg border-b pb-4 border-[#B8B8B8]  font-Lora">
        Detailed Search
      </h1>
    </div>
  );
};

export default detailSearch;
