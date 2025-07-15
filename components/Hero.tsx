"use client";

import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="mt-28">
        <h1 className="text-[45px] font-bold text-center mb-4 text-white">
          Join the{" "}
          <span className="bg-gradient-to-r from-indigo-300 to-indigo-600 inline-block text-transparent bg-clip-text">
            Best Event
          </span>
          <br />
          to{" "}
          <span className="bg-gradient-to-r from-pink-300 to-pink-600 inline-block text-transparent bg-clip-text">
            Level Up
          </span>{" "}
          Your Tech Journey
        </h1>
        <p className="text-center text-slate-400 mt-10 mb-6">
          Bergabunglah dalam event-event terbaik kami untuk mengembangkan skill
          <br />
          dan membangun masa depan karier anda di bidang teknologi.
        </p>
        <button
          onClick={() => {}}
          className="mt-10 flex mx-auto bg-purple-600 text-white font-normal px-6 py-3 rounded-full hover:bg-purple-700 transition-colors shadow-md shadow-purple-500/50"
        >
          Browse Now
        </button>
      </div>

      <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center gap-5 header-image">
        {/* <Image
          src="/images/1.png"
          width={100}
          height={100}
          alt="semina"
          className="img-1"
        />
        <Image
          src="/images/2.png"
          width={100}
          height={100}
          alt="semina"
          className="img-2"
        />
        <Image
          src="/images/1.png"
          width={100}
          height={100}
          alt="semina"
          className="img-1"
        /> */}
      </div>
    </>
  );
}
