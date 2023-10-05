import React from "react";
import styles from "./hero.module.css";
const Hero = () => {
   return (
      <section
         className={`${styles.heroBg} lg:bg-contain bg-cover bg-no-repeat sm:bg-right-top bg-center h-[300px] relative px-4`}
      >
         <div className={`absolute top-0 left-0 w-full h-full z-10 ${styles.overlayHero}`} />
         <div className="hero-wrap flex h-full container mx-auto z-20 relative">
            <div className="hero-txt self-center max-w-xl">
               <h1 className="mb-6 sm:text-left text-center">Lorem ipsum dolor sit </h1>
               <p className="font-normal md:text-2xl text-xl sm:text-left text-center">
                  Neque porro quisquam est, qui dolorem ipsum
               </p>
            </div>
         </div>
      </section>
   );
};

export default Hero;
