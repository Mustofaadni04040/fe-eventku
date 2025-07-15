import Image from "next/image";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

const navUrls = [
  { name: "Home", url: "/" },
  { name: "Browse", url: "/browse" },
  { name: "Stories", url: "/stories" },
  { name: "About", url: "/about" },
];

export default function Navbar() {
  const token = null;
  return (
    <div className="h-14 bg-transparent">
      <div className="max-w-7xl px-5 h-full container flex items-center justify-between mx-auto py-12">
        <Image
          src={"/EventKu.svg"}
          width={0}
          height={0}
          alt="logo"
          className="w-[100px] h-auto"
          priority
        />

        <nav>
          <ul className="flex items-center gap-16">
            {navUrls.map((nav) => (
              <li key={nav.name}>
                <a
                  href={nav.url}
                  className="text-white hover:text-primary transition-colors"
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {token ? (
          <Popover>
            <PopoverTrigger>
              <Image
                src="/default.jpeg"
                width={50}
                height={50}
                alt="profile"
                className="rounded-full w-8 h-auto object-cover"
              />
            </PopoverTrigger>
            <PopoverContent className="w-fit p-0">
              <PopoverClose asChild>
                <button
                  type="button"
                  className="bg-transparent text-primary hover:bg-slate-100"
                  // onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </PopoverClose>
            </PopoverContent>
          </Popover>
        ) : (
          <button
            type="button"
            className="bg-transparent border border-white text-white rounded-full px-6 py-2"
            //   onClick={() => router.push("/auth/signin")}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
