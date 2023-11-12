import React, { useState } from "react";
import Arrowdown from "./Iicon/Arrowdown";

interface SecloterProps {
  options: string[];
  selectedItem: string | null;
  defaultoption: string;
  onItemSelect: (item: string) => void;
}

const Secloter: React.FC<SecloterProps> = ({
  options,
  selectedItem,
  defaultoption,
  onItemSelect,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleDropdown = () => {
    setOpen(!open);
  };

  const handleItemClick = (item: string) => {
    onItemSelect(item);
    setOpen(false);
  };

  return (
    <div className="w-full font-medium h-auto">
      <div
        onClick={handleToggleDropdown}
        className={` bg-white w-full ps-3 text-sm flex items-center justify-between border border-[#B8B8B8] rounded-xl ${
          !selectedItem ? "text-gray-700" : ""
        }`}
      >
        {selectedItem
          ? selectedItem.length > 25
            ? selectedItem.substring(0, 25) + "..."
            : selectedItem
          : `${defaultoption}`}
        <div
          className={`h-14 w-10 flex justify-center bg-[#b8b8b826]  text-[#444444]   border-l-[1px] border-[#B8B8B8] items-center rounded-xl m-[-2px] ${
            open && "rotate-180"
          }`}
        >
          <Arrowdown />
        </div>
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto rounded-[3px]  shadow-md ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        {options.map((option) => (
          <li
            key={option}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white ${
              option === selectedItem ? "bg-sky-600 text-white" : ""
            } `}
            onClick={() => handleItemClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Secloter;
