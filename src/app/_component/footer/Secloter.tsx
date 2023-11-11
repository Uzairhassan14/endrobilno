"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Arrowdown from "./Iicon/Arrowdown";

interface Country {
  name: string;
}

const Secloter: React.FC = () => {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data: Country[]) => {
        setCountries(data);
      });
  }, []);

  return (
    <div className="w-72 font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full ps-3 flex items-center justify-between border-2 border-[#B8B8B8]  rounded-lg ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        <div
          className={`${
            open && "rotate-180"
          } h-14 w-14 flex justify-center  bg-[#b8b8b826] text-base  text-[#444444] border-2 border-[#B8B8B8]  items-center rounded-lg m-[-2px] `}
        >
          <Arrowdown />
        </div>
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {countries?.map((country: Country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Secloter;
