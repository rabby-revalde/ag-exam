"use client";
import React from "react";
import Multiselect from "multiselect-react-dropdown";
import Link from "next/link";

const Meeting = () => {
   return (
      <section className="py-20">
         <div className="container mx-auto">
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
                  className="py-2 text-sm text-gray border rounded pl-10 focus:outline-none focus:bg-white focus:text-gray-900 block w-full"
                  placeholder="Search..."
                  autoComplete="off"
               />
            </div>
            <div className="flex gap-6 justify-between">
               <div>
                  <label htmlFor="">Country</label>
                  <Multiselect
                     placeholder="Select Country"
                     displayValue="key"
                     // onKeyPressFn={function noRefCheck() {}}
                     // onRemove={function noRefCheck() {}}
                     // onSearch={function noRefCheck() {}}
                     // onSelect={function noRefCheck() {}}
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
               <div>
                  <label htmlFor="">State</label>
                  <Multiselect
                     displayValue="key"
                     // onKeyPressFn={function noRefCheck() {}}
                     // onRemove={function noRefCheck() {}}
                     // onSearch={function noRefCheck() {}}
                     // onSelect={function noRefCheck() {}}
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
               <div>
                  <label htmlFor="">City</label>
                  <Multiselect
                     displayValue="key"
                     // onKeyPressFn={function noRefCheck() {}}
                     // onRemove={function noRefCheck() {}}
                     // onSearch={function noRefCheck() {}}
                     // onSelect={function noRefCheck() {}}
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
               <div>
                  <label htmlFor="">City</label>
                  <Multiselect
                     displayValue="key"
                     // onKeyPressFn={function noRefCheck() {}}
                     // onRemove={function noRefCheck() {}}
                     // onSearch={function noRefCheck() {}}
                     // onSelect={function noRefCheck() {}}
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

               <Link className="text-base font-normal relative gradient-blue-btn rounded-md text-white" href="/">
                  Clear Filter
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Meeting;
