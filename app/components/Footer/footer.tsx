import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoWhite from "@/assets/logoWhite.png";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";
import youtube from "@/assets/youtube.png";

import styles from "./footer.module.css";
const Footer = () => {
   return (
      <>
         <section className={`${styles.bgGradient} relative md:py-24 py-16`}>
            <div className="container px-4 mx-auto relative z-20">
               <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-6 text-white">
                  <div className="col-span-1 lg:mb-2 mb-10 lg:order-1 order-2">
                     <h3 className="font-bold lg:text-2xl text-xl mb-4">Get Started</h3>
                     <ul>
                        <li className="w-full block py-1">
                           <Link className="font-normal text-base" href="/">
                              Login
                           </Link>
                        </li>
                        <li className="w-full block py-1">
                           <Link className="font-normal text-base" href="/">
                              Join Our Group
                           </Link>
                        </li>
                        <li className="w-full block py-1">
                           <Link className="font-normal text-base" href="/">
                              Visit Our Group
                           </Link>
                        </li>
                        <li className="w-full block py-1">
                           <Link className="font-normal text-base" href="/">
                              30 Day Trial Membership
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className="col-span-1 lg:mb-2 mb-10 lg:order-2 order-3">
                     <h3 className="font-bold lg:text-2xl text-xl mb-4">About</h3>
                     <ul>
                        <li className="w-full block py-1">
                           <Link className="font-normal text-base" href="/">
                              Why Lorem Ipsum?
                           </Link>
                        </li>
                        <li className="w-full block py-1">
                           <Link className="font-normal text-base" href="/">
                              Our Story
                           </Link>
                        </li>
                        <li className="w-full block py-1">
                           <Link className="font-normal text-base" href="/">
                              Community Involvement
                           </Link>
                        </li>
                        <li className="w-full block py-1">
                           <Link className="font-normal text-base" href="/">
                              Press
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className="sm:col-span-1 col-span-2 lg:mb-2 mb-10 lg:order-3 order-4">
                     <h3 className="font-bold lg:text-2xl text-xl mb-4">Contact Us</h3>
                     <ul>
                        <li className="py-2">
                           <a className="font-normal text-base" target="_blank" rel="noreferrer" href="/">
                              4517 Washington Ave. Manchester, Kentucky 39495
                           </a>
                        </li>
                        <li className="py-2">
                           <a className="font-normal text-base" href="tel:(555) 543 - 7653">
                              (555) 543 - 7653
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className="lg:col-span-2 col-span-3 lg:mb-2 mb-10 lg:mx-auto md:mx-0 mx-auto lg:order-4 order-1">
                     <div className="block mb-10">
                        <Link className="relative block" href="/">
                           <Image
                              className="lg:mx-auto"
                              height={154}
                              width={131}
                              objectFit="contain"
                              src={logoWhite}
                              alt="footer-logo"
                           />
                        </Link>
                     </div>
                     <div className="block">
                        <Link
                           href={"/"}
                           className="text-base font-normal relative gradient-green-btn rounded-lg lg:!px-16 px-10"
                        >
                           Join Our Group
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div className="bg-[#00144C] py-8">
            <div className="subFooter container mx-auto text-white md:flex grid">
               <div className="md:order-1 order-2 md:text-left text-center flex justify-center">
                  <p className="font-light text-sm">
                     Copyright © ${new Date().getFullYear()} Lorem Ipsum. All rights reserved. |{" "}
                     <a target="_blank" rel="noreferrer" href="/">
                        AGDP IT Solutions
                     </a>
                  </p>
               </div>
               <div className="md:ml-auto md:mr-0 mx-auto flex gap-6 md:order-2 order-1 md:mb-0 mb-6">
                  <Link href={"/"}>
                     <Image width={30} height={30} objectFit="cover" src={linkedin} alt="social-icons linkedin" />
                  </Link>
                  <Link href={"/"}>
                     <Image width={30} height={30} objectFit="cover" src={facebook} alt="social-icons facebook" />
                  </Link>
                  <Link href={"/"}>
                     <Image width={30} height={30} objectFit="cover" src={instagram} alt="social-icons instagram" />
                  </Link>
                  <Link href={"/"}>
                     <Image width={30} height={30} objectFit="cover" src={youtube} alt="social-icons youtube" />
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default Footer;
