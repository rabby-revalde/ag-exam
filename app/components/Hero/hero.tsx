import React from "react";
import styles from "./hero.module.css";
const Hero = () => {
   return (
      <section className={`${styles.heroBg} lg:bg-contain bg-cover bg-no-repeat bg-right-top h-[300px] relative`}>
         <div className={`absolute top-0 left-0 w-full h-full z-10 ${styles.overlayHero}`} />
         <div className="hero-wrap flex h-full container mx-auto z-20 relative">
            <div className="hero-txt self-center max-w-xl">
               <h1 className="mb-6">Lorem ipsum dolor sit </h1>
               <p className="font-normal md:text-2xl text-xl">Neque porro quisquam est, qui dolorem ipsum</p>
            </div>
         </div>
      </section>
   );
};

export default Hero;
