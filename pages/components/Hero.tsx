import React from "react";
import config from "../index.json";
import Image from "next/image";
import Yiyi from "../../public/elyiyi2.jpg";

const Hero = () => {
  const hero = config.hero;

  return (
    <>
<section className="bg-white overflow-x-hidden">
  <div className="px-8 lg:px-32 flex flex-col-reverse lg:flex-row items-center justify-items-center mt-14 mb-20">
    <div>
      <h1 className="text-6xl font-Lato font-bold tracking-wide text-center sm:text-left mt-10 sm:mt-0">
        Me dicen
        <span
          className="ml-3 font-Lato font-bold whitespace-nowrap bg-gradient-to-r from-green-800 
via-green-500 to-green-300 bg-clip-text text-transparent block sm: mt-5 sm:mt-0"
        >
          {hero.name}
        </span>
      </h1>
      <h2 className="text-5xl md:text-4xl font-Lato font-bold tracking-wide mt-4 text-center sm:text-left">
        {hero.subtitle}
      </h2>
      <a
        href="#About"
        className="text-2xl font-bold p-0.5 mt-6 w-full sm:w-44"
      >
        <div className="bg-white w-full">
          <button
            className="w-full sm:w-auto text-center text-black py-3 px-12 font-Lato bg-white 
font-bold uppercase text-lg sm:text-base border-2 border-green-700 rounded-xl mt-10 sm:mt-0"
          >
            Conóceme
          </button>
        </div>
      </a>
    </div>

    <div className="flex justify-center items-center lg:ml-10">
      <Image
        src={Yiyi}
        alt="about"
        className="shadow-lg rounded-lg"
        width={400}
        height={400}
      />
    </div>
  </div>
</section>

    </>
  );
};

export default Hero;
