"use client";
import React, { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import Link from "next/link";
import Image from "next/image";
import styles from "./meetups.module.css";
import { meetupsArray } from "./meetupsData";
import VirtualIcon from "@/assets/virtual.png";
import InpersonIcon from "@/assets/inpersonIcon.png";

interface MeetsType {
   icon: any;
   title: string;
   meetType: string[];
   link: string;
}
interface loadMoreType {
   items: MeetsType[];
   visible: number;
}

const Meeting = () => {
   const [loadMore, setLoadMore] = useState<loadMoreType>({
      items: [],
      visible: 9,
   });

   useEffect(() => {
      setLoadMore((prev) => ({ ...prev, items: meetupsArray }));
   }, []);

   const handleLoadMore = () => {
      setLoadMore((prev: loadMoreType) => ({ ...prev, visible: prev?.visible + 3 }));
   };

   return (
      <section className={`${styles.meetups}`}>
         <div className="container mx-auto px-4 pb-20">
            <div className="relative text-gray-600 focus-within:text-gray-400 mb-8">
               <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                     <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                     >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                     </svg>
                  </button>
               </span>
               <input
                  type="search"
                  name="q"
                  className="py-2 text-sm text-gray border rounded !pl-10 focus:outline-none focus:bg-white focus:text-gray-900 block w-full"
                  placeholder="Search..."
                  autoComplete="off"
               />
            </div>
            <div className="sm:flex flex-wrap lg:gap-6 gap-4 justify-between">
               <div className="sm:mb-0 mb-4 ">
                  <label htmlFor="">Country</label>
                  <Multiselect
                     className={`${styles.selectItem} lg:!w-[280px] md:!w-[200px] sm:!w-[250px] w-full mx-auto sm:inline-block block`}
                     placeholder="Select Country"
                     displayValue="key"
                     options={[
                        {
                           cat: "usa",
                           key: "USA",
                        },
                        {
                           cat: "colorado spring",
                           key: "Colorado Spring",
                        },
                     ]}
                     singleSelect
                  />
               </div>
               <div className="sm:mb-0 mb-4 ">
                  <label htmlFor="">State</label>
                  <Multiselect
                     className={`${styles.selectItem} lg:!w-[280px] md:!w-[200px] sm:!w-[250px] w-full mx-auto sm:inline-block block`}
                     placeholder="Select State"
                     displayValue="key"
                     options={[
                        {
                           cat: "Group 1",
                           key: "Option 1",
                        },
                        {
                           cat: "Group 1",
                           key: "Option 2",
                        },
                     ]}
                     singleSelect
                  />
               </div>
               <div className="sm:mb-0 mb-4 ">
                  <label htmlFor="">City</label>
                  <Multiselect
                     className={`${styles.selectItem} lg:!w-[280px] md:!w-[200px] sm:!w-[250px] w-full mx-auto sm:inline-block block`}
                     placeholder="Select City"
                     displayValue="key"
                     options={[
                        {
                           cat: "cebu",
                           key: "Cebu",
                        },
                        {
                           cat: "lapu-lapu",
                           key: "Lapu-lapu",
                        },
                     ]}
                     singleSelect
                  />
               </div>
               <div className="sm:mb-0 mb-4 ">
                  <label htmlFor="">Meeting Type</label>
                  <Multiselect
                     className={`${styles.selectItem} lg:!w-[280px] md:!w-[200px] sm:!w-[250px] w-full mx-auto sm:inline-block block`}
                     placeholder="Select Type"
                     displayValue="key"
                     options={[
                        {
                           cat: "in-person",
                           key: "In-person",
                        },
                        {
                           cat: "virtual",
                           key: "Virtual",
                        },
                     ]}
                     singleSelect
                  />
               </div>
               <div className="flex">
                  <button className="text-base font-normal relative gradient-blue-btn rounded-md text-white self-end sm:inline-block block w-full">
                     Clear Filter
                  </button>
               </div>
            </div>
            <div className="meetup-boxes">
               <h2 className="font-bold text-[26px] text-agdp-black text-center py-10">Commodo Con</h2>
               <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                  {loadMore?.items?.slice(0, loadMore?.visible).map((meet, idx) => (
                     <div
                        key={idx}
                        className="h-[353px] rounded-md border-2 border-[#D2D2D2] xl:p-10 p-6 text-center relative"
                     >
                        <div className="flex justify-center">
                           <Image
                              className="mx-auto self-center"
                              // width={98}
                              // height={30}
                              objectFit="contain"
                              src={meet?.icon}
                              alt={"meet"}
                           />
                        </div>
                        <h5 className="text-center font-semibold text-xl py-8">{meet?.title}</h5>
                        <div className="flex justify-center gap-6">
                           {meet?.meetType.map((item, index) => (
                              <div key={index} className="self-end text-center">
                                 <Image
                                    className="mx-auto"
                                    src={item === "Virtual" ? VirtualIcon : InpersonIcon}
                                    alt={item}
                                 />
                                 <p>{item}</p>
                              </div>
                           ))}
                        </div>
                        <Link
                           className="bottom-10 gradient-green-btn rounded-md w-40 font-bold text-base absolute transform left-2/4 -translate-x-2/4"
                           href={"/"}
                        >
                           Visit Group
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         {meetupsArray.length >= loadMore.visible ? (
            <div className={`${styles.customOverlay} -mt-[24rem] relative z-50 h-52 flex justify-center pb-10`}>
               <div className="text-center self-end">
                  <button onClick={handleLoadMore} className="gradient-blue-btn text-white mx-auto rounded-md !px-16">
                     Load More
                  </button>
               </div>
            </div>
         ) : (
            ""
         )}
      </section>
   );
};

export default Meeting;
