import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EventCard() {
  return (
    <Link href="/event/1">
      <div className="relative rounded-lg bg-white max-w-xs shadow-sm hover:shadow-md duration-200">
        <div className="relative w-full h-[200px] flex-shrink-0 rounded-t-lg overflow-hidden">
          <Image
            className="object-cover"
            src="/images/hero-1.jpg"
            alt="event"
            fill
            sizes="100%"
            priority
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {"Team Management for Startups and Small Businesses".slice(0, 20)}
            ...
          </h5>
          <p className="mb-10 text-sm text-slate-400">Product Design</p>

          <span className="text-sm text-purple-500 font-medium">
            Jakarta, 12 Januari 2023
          </span>
        </div>

        <div className="top-3 right-3 absolute bg-gradient-to-r from-purple-400 to-purple-600 px-5 rounded-full">
          <span className="text-sm text-white">Free</span>
        </div>
      </div>
    </Link>
  );
}
