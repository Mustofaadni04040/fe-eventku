import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button/index";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";

export default function AuthLayout({
  children,
  onSubmit,
  loading,
  textButton,
  textTitle,
  textForm,
  textLink,
}: any) {
  const pathname = usePathname();
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex items-center gap-10">
        {pathname === "/auth/signup" && (
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl leading-normal font-bold text-[#00466a] lineh">
              Expand Your <br />
              Knowledge & Skills
            </h1>
            <p className="text-sm leading-relaxed text-slate-400">
              Kami menyediakan berbagai acara terbaik untuk <br /> membantu anda
              dalam meningkatkan <br />
              skills di bidang teknologi
            </p>
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="min-w-96 flex flex-col gap-3 px-5 py-7 border border-slate-200 rounded-2xl"
        >
          <div className="my-3 flex flex-col items-center space-y-1">
            <Image
              src={"/EventKu-2.svg"}
              width={150}
              height={50}
              priority
              alt="logo"
              className="mx-auto w-36 h-auto"
            />
            <p className="text-lg">{textTitle}</p>
          </div>
          {children}
          <Button
            disabled={loading}
            loading={loading}
            type="submit"
            classname="w-full mt-3 p-1 disabled:opacity-50 disabled:cursor-not-allowed bg-[#00466a] text-white hover:bg-[#00466a]/90 duration-200 rounded-full"
          >
            {textButton}
          </Button>
          <span className="text-sm text-slate-500 mt-2 text-center">
            {textForm}
            <Link href={`/auth/${textLink}`} className="text-[#00466a]">
              {" "}
              {textLink}
            </Link>{" "}
            disini
          </span>
        </form>
      </div>
    </div>
  );
}
