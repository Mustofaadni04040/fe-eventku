"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const disabledFooter = ["sign-in", "sign-up", "profile", "recruiter"];

export default function Footer() {
  const pathname = usePathname();

  if (disabledFooter.includes(pathname.split("/")[1])) {
    return null;
  }

  return (
    <div className="w-full bg-[#151A26] pt-20">
      <div className="max-w-7xl p-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full justify-between px-5 lg:px-0 py-10">
          <div className="max-w-96 mb-7">
            <Image
              src="/EventKu.svg"
              alt="logo"
              className="w-28 h-auto"
              width={0}
              height={0}
            />
            <p className="mt-3 text-base text-slate-400">
              Eventku adalah tempat di mana <br /> anda dapat mencari event
              sesuai <br /> dengan minat & terdekat.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-base md:text-lg font-medium md:mb-2">
              About Eventku
            </h2>
            <div className="text-slate-400 text-sm md:text-base">
              <Link href="/" className="hover:text-slate-500">
                Beranda
              </Link>
            </div>
            <div className="text-slate-400 text-sm md:text-base">
              <Link href="/all-jobs" className="hover:text-slate-500">
                Daftar Event
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-white text-base md:text-lg font-medium mb-2 mt-5 md:mt-0">
              Call Us
            </h2>
            <div className="text-slate-400 text-sm md:text-base">
              Jl. Menteng Raya No.62, RT.3/RW.9, Kb. Sirih, Kec. Menteng, Kota
              Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10340
            </div>
          </div>
        </div>

        <p className="text-center mb-4 text-slate-400 text-sm md:text-base">
          Copyright 2025 • All rights reserved • Eventku
        </p>
      </div>
    </div>
  );
}
