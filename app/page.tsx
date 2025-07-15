import EventClient from "@/components/clients/EventClient";
import Features from "@/components/fragments/Features/Features";
import Header from "@/components/fragments/Header/Header";
import Stats from "@/components/fragments/stats/Stats";

export default function HomePage() {
  return (
    <>
      <Header />
      <Stats />
      <div className="mt-20 px-5 mx-auto bg-[#f5f7f9] py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="flex flex-col gap-1 text-3xl text-slate-700 font-medium">
            <span className="text-lg bg-gradient-to-r from-purple-300 to-purple-900 inline-block text-transparent bg-clip-text">
              Grow Today
            </span>
            Latest Events
          </h2>

          <EventClient />
        </div>
      </div>
      <Features />
    </>
  );
}
