import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="bg-[#FFFFFF26] p-1 w-[11rem] sm:w-[14.375rem] shrink-0 rounded-[5px]  font-Lora font-normal text-base focus:outline-none h-[3.8rem] text-white"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
