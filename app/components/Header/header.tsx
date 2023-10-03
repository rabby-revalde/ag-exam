"use client";
import React from "react";
import Link from "next/link";
import Sticky from "react-sticky-el";
import Image from "next/image";
import logo from "@/assets/mainLogo.png";

const Header = () => {
   const [menu, setMenu] = React.useState(false);
   const showMenu = () => {
      setMenu((prevState) => !prevState);
   };
   return (
      <section className="block w-full">
         <Sticky topOffset={80} stickyClassName="sticky-nav z-50 shadow-md">
            <nav className="relative py-6 nav-wrap bg-white">
               <div className="container mx-auto flex relative">
                  <Link className="relative" href="/">
                     <Image height={97} width={82} objectFit="contain" src={logo} alt="navigation-logo" />
                  </Link>
                  <div className="md:hidden ml-auto flex">
                     <button
                        aria-label="Navbar Menu button"
                        className="navbar-burger flex items-center p-3 !text-pro-green"
                        onClick={showMenu}
                     >
                        <svg
                           className="block h-4 w-4 fill-current"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <title>Mobile menu</title>
                           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                     </button>
                  </div>
                  <ul className="absolute right-0 top-1/2 hidden -translate-y-1/2 transform lg:flex lg:w-auto lg:items-center lg:space-x-6">
                     <li>
                        <Link className="text-base font-normal relative" href="/">
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link className="text-base font-normal relative" href="/">
                           Why NLX?
                        </Link>
                     </li>
                     <li>
                        <Link className="text-base font-normal relative" href="/">
                           News
                        </Link>
                     </li>
                     <li>
                        <Link className="text-base font-normal relative" href="/">
                           Events
                        </Link>
                     </li>
                     <li>
                        <div className="flex">
                           <Link
                              className="text-base font-normal relative gradient-blue-btn rounded-tl-lg rounded-bl-lg text-white"
                              href="/"
                           >
                              Find A Group
                           </Link>
                           <Link
                              className="text-base font-normal relative gradient-green-btn rounded-tr-lg rounded-br-lg"
                              href="/"
                           >
                              Start A Group
                           </Link>
                        </div>
                     </li>
                     <li>
                        <Link className="text-base font-normal relative" href="/">
                           Login
                        </Link>
                     </li>
                  </ul>
                  <ul className="lg:hidden hidden absolute right-0 top-1/2 -translate-y-1/2 transform md:flex md:w-auto md:items-center md:space-x-6">
                     <li>
                        <div className="flex">
                           <Link
                              className="text-base font-normal relative gradient-blue-btn rounded-tl-lg rounded-bl-lg text-white"
                              href="/"
                           >
                              Find A Group
                           </Link>
                           <Link
                              className="text-base font-normal relative gradient-green-btn rounded-tr-lg rounded-br-lg"
                              href="/"
                           >
                              Start A Group
                           </Link>
                        </div>
                     </li>
                  </ul>
               </div>
            </nav>
         </Sticky>
         <div className={`${menu ? null : "hidden"} navbar-menu relative z-50`}>
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={showMenu}></div>
            <nav className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6">
               <div className="mb-8 flex items-center text-agdp-black">
                  <button aria-label="Navbar Menu button" className="navbar-close" onClick={showMenu}>
                     <svg
                        className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M6 18L18 6M6 6l12 12"
                        ></path>
                     </svg>
                  </button>
               </div>
               <div>
                  <ul>
                     <li className="mb-1">
                        <Link
                           className="block p-4 text-base font-normal hover:font-bold font-heading relative"
                           href="/"
                        >
                           Home
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="mt-auto">
                  <p className="my-4 text-center text-xs">
                     <span>{`Copyright © ${new Date().getFullYear()} Lorem Ipsum. All rights reserved. | AGDP IT Solutions`}</span>
                  </p>
               </div>
            </nav>
         </div>
      </section>
   );
};

export default Header;
