// // import Image from "next/image";
// // import React from "react";
// // import endrolino from "@/app/_component/assets/endrolino.png";
// // import Link from "next/link";
// // import Downarrow from "@/app/_component/navbar/icons/downarrow";
// // import Sellbtn from "@/app/_component/navbar/sellbtn";
// // import Bellicon from "@/app/_component/navbar/icons/bellicon";
// // import Star from "@/app/_component/navbar/icons/star";
// // import Message from "@/app/_component/navbar/icons/message";
// // import Loginbtn from "@/app/_component/navbar/loginbtn";

// // const nabar = () => {
// //   return (
// //     <>
// //       <header className="bg-white">
// //         <nav className="flex justify-between items-center w-[80%]  mx-auto">
// //           <div>
// //             <Image
// //               className="min-w-32 cursor-pointer"
// //               src={endrolino}
// //               alt="..."
// //             />
// //           </div>
// //           <div className="nav-links duration-500  bg-white  md:w-auto  w-full flex items-center px-5">
// //             <ul className="flex md:flex-row flex-col items-center gap-8">
// //               <li>
// //                 <Link className="hover:text-gray-500 gap-2 flex" href="#">
// //                   Search
// //                   <Downarrow />
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link className="hover:text-gray-500" href="#">
// //                   News & Guides
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link className="hover:text-gray-500" href="#">
// //                   <Sellbtn />
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>
// //           <div className="">
// //             <ul className="flex flex-row  items-center gap-6 ">
// //               <li>
// //                 <Link className="gap-1 flex" href="#">
// //                   <Bellicon />
// //                   <Downarrow />
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link className="" href="#">
// //                   <Star />
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link className="hover:text-gray-500" href="#">
// //                   <Message />
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link className="" href="#">
// //                   <Loginbtn />
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>
// //         </nav>
// //       </header>
// //     </>
// //   );
// // };

// // export default nabar;
// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import endrolino from "@/app/_component/assets/endrolino.png";
// import Link from "next/link";
// import Downarrow from "@/app/_component/navbar/icons/downarrow";
// import Sellbtn from "@/app/_component/navbar/sellbtn";
// import Bellicon from "@/app/_component/navbar/icons/bellicon";
// import Star from "@/app/_component/navbar/icons/star";
// import Message from "@/app/_component/navbar/icons/message";
// import Loginbtn from "@/app/_component/navbar/loginbtn";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <header className="bg-white">
//         <nav className="flex justify-between items-center w-[80%] mx-auto">
//           <div>
//             <Image
//               className="min-w-32 cursor-pointer"
//               src={endrolino}
//               alt="..."
//             />
//           </div>
//           <div
//             className={` nav-links duration-500 bg-white md:w-auto w-full flex items-center px-5 `}
//           >
//             <ul className="flex md:flex-row flex-col items-center gap-8">
//               <li>
//                 <Link className="hover:text-gray-500 gap-2 flex" href="#">
//                   Search
//                   <Downarrow />
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:text-gray-500" href="#">
//                   News & Guides
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:text-gray-500" href="#">
//                   <Sellbtn />
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className={``}>
//             <ul className="flex flex-row items-center gap-6">
//               <li>
//                 <Link className="gap-1 flex" href="#">
//                   <Bellicon />
//                   <Downarrow />
//                 </Link>
//               </li>
//               <li>
//                 <Link className="" href="#">
//                   <Star />
//                 </Link>
//               </li>
//               <li>
//                 <Link className="hover:text-gray-500" href="#">
//                   <Message />
//                 </Link>
//               </li>
//               <li>
//                 <Link className="" href="#">
//                   <Loginbtn />
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="block text-gray-500 hover:text-gray-700"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;

// components/Navbar.js
"use client";
import Image from "next/image";
import { useState } from "react";
import endrolino from "@/app/_component/assets/endrolino.png";
import Link from "next/link";
import Downarrow from "@/app/_component/navbar/icons/downarrow";
import Sellbtn from "@/app/_component/navbar/sellbtn";
import Bellicon from "@/app/_component/navbar/icons/bellicon";
import Star from "@/app/_component/navbar/icons/star";
import Message from "@/app/_component/navbar/icons/message";
import Loginbtn from "@/app/_component/navbar/loginbtn";
import { Cross } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white relative ">
      <nav className="  w-[80%] mx-auto  flex justify-between items-center ">
        <Link className="text-3xl font-bold leading-none" href="#">
          <Image
            className="min-w-28 cursor-pointer"
            src={endrolino}
            alt="..."
          />
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            {/* Your burger icon SVG */}
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

        <ul
          className={`${
            isMenuOpen
              ? "absolute z-50 flex justify-center gap-8 flex-col items-center transition-all  left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6 w-full  bg-white min-h-[100vh] top-[207px] ms-[-0.5px]"
              : "hidden"
          } absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6 `}
        >
          <button
            className=" flex items-center lg:hidden text-blue-600 p-3 rotate-45"
            onClick={toggleMenu}
          >
            {/* Your burger icon SVG */}
            <Cross />
          </button>
          {/* Your menu items */}
          <li>
            <Link
              href="/CarsDetails"
              className="hover:text-gray-500 gap-2 flex"
            >
              Search
              <Downarrow />
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-500" href="#">
              News & Guides
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-500" href="#">
              <Sellbtn />
            </Link>
          </li>
          <li>
            {isMenuOpen && (
              <>
                <div className={`gap-4 flex flex-col`}>
                  <ul className="flex flex-row items-center gap-6">
                    <li>
                      <Link className="gap-1 flex" href="#">
                        <Bellicon />
                        <Downarrow />
                      </Link>
                    </li>
                    <li>
                      <Link className="" href="#">
                        <Star />
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-gray-500" href="#">
                        <Message />
                      </Link>
                    </li>
                  </ul>
                  <Link className="mt-2" href="#">
                    <Loginbtn />
                  </Link>
                </div>
              </>
            )}
          </li>
        </ul>
        <div className="hidden lg:block">
          <div className={``}>
            <ul className=" flex flex-row items-center gap-6">
              <li>
                <Link className="gap-1 flex" href="#">
                  <Bellicon />
                  <Downarrow />
                </Link>
              </li>
              <li>
                <Link className="" href="#">
                  <Star />
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" href="#">
                  <Message />
                </Link>
              </li>
              <li>
                <Link className="" href="#">
                  <Loginbtn />
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="block text-gray-500 hover:text-gray-700"
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
