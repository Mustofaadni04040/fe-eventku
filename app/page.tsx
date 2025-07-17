import EventClient from "@/components/clients/EventClient";
import CreateAccount from "@/components/fragments/CreateAccount/CreateAccount";
import Features from "@/components/fragments/Features/Features";
import Header from "@/components/fragments/Header/Header";
import Stats from "@/components/fragments/stats/Stats";

export default async function HomePage() {
  const token = null;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/events`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <>
      <Header />
      <Stats />
      <div className="mt-20 bg-[#f5f7f9] py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-end justify-between">
            <h2 className="flex flex-col gap-1 text-3xl text-slate-700 font-medium">
              <span className="text-lg bg-gradient-to-r from-purple-300 to-purple-900 inline-block text-transparent bg-clip-text">
                Grow Today
              </span>
              Latest Events
            </h2>

            <span className="text-sm text-slate-400">
              <a href="#">Lihat semua event &gt;</a>
            </span>
          </div>

          <EventClient data={data.data} />
        </div>
      </div>
      <Features />
      {!token && <CreateAccount />}
    </>
  );
}
