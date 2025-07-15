"use client";

import { ToasterContext } from "@/context/ToasterContext";
import { ToasterType } from "@/types/toaster.type";
import { X } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";

const ToasterVariant: any = {
  success: {
    title: "Success",
    color: "#a3d9a5",
    barColor: "#3f9242",
  },
  danger: {
    title: "Error",
    color: "#f39b9a",
    barColor: "#bb2525",
  },
  warning: {
    title: "Warning",
    color: "#f8e3a2",
    barColor: "#e9d949",
  },
};

export default function Toaster() {
  const [lengthBar, setLengthBar] = useState(100);
  const timerRef = useRef<any>(null);
  const { toaster, setToaster }: ToasterType = useContext(ToasterContext);

  const timerStart = () => {
    timerRef.current = setInterval(() => {
      setLengthBar((prev) => prev - 0.14);
    }, 1);
  };

  useEffect(() => {
    timerStart();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (lengthBar < 0) {
      setToaster({});
    }
  }, [lengthBar, setToaster]);

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex bg-white shadow-md py-5 px-7 rounded-md overflow-hidden ${[
        `toaster--${toaster.variant}`,
      ]}`}
    >
      <div>
        <div className="border-solid border-slate-400 min-w-52">
          <p className="text-lg font-bold mb-1">
            {ToasterVariant[`${toaster.variant}`].title}
          </p>
          <p className="text-sm mb-1">{toaster.message}</p>
        </div>
        <X
          onClick={() => setToaster({})}
          size={15}
          className="absolute top-2 right-2 cursor-pointer text-2xl"
        />
      </div>
      <div
        className="w-full h-1 absolute bottom-0 left-0"
        style={{ backgroundColor: ToasterVariant[`${toaster.variant}`].color }}
      >
        <div
          style={{
            width: `${lengthBar}%`,
            height: "100%",
            backgroundColor: ToasterVariant[`${toaster.variant}`].barColor,
          }}
        />
      </div>
    </div>
  );
}
