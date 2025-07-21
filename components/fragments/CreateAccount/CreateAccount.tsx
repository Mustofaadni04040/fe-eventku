"use client";

import Button from "@/components/ui/Button";
import { useSelector } from "react-redux";

export default function CreateAccount() {
  const { token } = useSelector((state: any) => state.auth);

  if (!token) {
    return (
      <div className="max-w-7xl my-10 py-20 px-5 mx-auto border border-slate-200 rounded-md">
        <h2 className="text-center text-2xl mb-5">Tunggu apa lagi?</h2>
        <p className="text-center text-sm text-slate-500">
          Bergabunglah dalam event-event terbaik kami untuk mengembangkan skill
        </p>

        <Button
          classname="flex mx-auto mt-8 bg-indigo-500 text-white font-normal px-6 py-3 rounded-md hover:bg-indigo-600 transition-colors shadow-md shadow-indigo-500/50"
          type="button"
        >
          Buat Akun
        </Button>
      </div>
    );
  }
}
