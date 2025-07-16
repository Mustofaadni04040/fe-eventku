"use client";

import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

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
        <Button
          type="button"
          onClick={() => {}}
          classname="mt-10 flex mx-auto bg-purple-600 text-white font-normal px-6 py-3 rounded-full hover:bg-purple-700 transition-colors shadow-md shadow-purple-500/50"
        >
          Browse Now
        </Button>
      </div>

      {/* Hero Images */}
      <div className="overflow-hidden flex items-center justify-center gap-10 mt-20">
        <div className="relative w-[662px] h-[400px] flex-shrink-0 rounded-3xl overflow-hidden">
          <Image
            src="/images/hero-1.jpg"
            alt="hero 1"
            fill
            className="object-cover"
            priority
            sizes="100%"
          />
        </div>

        <div className="relative w-[880px] h-[520px] shrink-0 rounded-3xl overflow-hidden">
          <Image
            src="/images/hero-2.jpg"
            alt="hero 2"
            fill
            className="object-center"
            priority
            sizes="100%"
          />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
        </div>

        <div className="relative w-[662px] h-[400px] flex-shrink-0 rounded-3xl overflow-hidden">
          <Image
            src="/images/hero-3.jpg"
            alt="hero 3"
            fill
            className="object-cover"
            priority
            sizes="100%"
          />
        </div>
      </div>
    </>
  );
}
