"use client";

import { ToasterContext } from "@/context/ToasterContext";
import { useContext } from "react";

export default function Home() {
  const { setToaster } = useContext(ToasterContext);
  return (
    <div>
      Hello World
      <button
        className="border border-slate-400 py-1 px-2 rounded-md"
        onClick={() =>
          setToaster({
            variant: "success",
            message: "This is a success message!",
          })
        }
      >
        Show Toaster
      </button>
    </div>
  );
}
