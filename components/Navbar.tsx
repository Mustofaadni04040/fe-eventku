"use client";

import Image from "next/image";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { usePathname, useRouter } from "next/navigation";
import Button from "./ui/Button";
import Link from "next/link";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setFirstName, setLastName, setToken } from "@/redux/auth/authSlice";

const navUrls = [
  { name: "Home", url: "/" },
  { name: "Browse", url: "/browse" },
  { name: "Stories", url: "/stories" },
  { name: "About", url: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { token, firstName, lastName } = useSelector(
    (state: any) => state.auth
  );
  const dispatch = useDispatch();

  const handleSignOut = () => {
    Cookies.remove("token");
    dispatch(setToken(null));
    dispatch(setFirstName(null));
    dispatch(setLastName(null));
  };

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
            {navUrls.map((nav) => {
              return (
                <li key={nav.name}>
                  <Link
                    href={nav.url}
                    className={` hover:text-purple-500 transition-colors ${
                      pathname.startsWith(nav.url)
                        ? "text-purple-500"
                        : "text-white"
                    }`}
                  >
                    {nav.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {token ? (
          <div className="flex items-center gap-5">
            <span className="text-white text-sm">
              Hi, {firstName} {lastName}
            </span>
            <Popover>
              <PopoverTrigger>
                <Image
                  src="/images/default.jpeg"
                  width={50}
                  height={50}
                  alt="profile"
                  className="rounded-full w-8 h-auto object-cover"
                />
              </PopoverTrigger>
              <PopoverContent className="w-fit p-0">
                <PopoverClose asChild>
                  <Button
                    type="button"
                    classname="bg-transparent text-primary hover:bg-slate-100 py-1 px-3"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </PopoverClose>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button
            type="button"
            classname="bg-transparent border border-white text-white rounded-full px-6 py-2 hover:bg-slate-700 hover:border-slate-700 duration-200"
            onClick={() => router.push("/auth/signin")}
          >
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
}
