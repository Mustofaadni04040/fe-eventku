export default function Stats() {
  return (
    <div className="mt-72 mb-10 max-w-3xl px-5 mx-auto flex gap-6 justify-center items-center">
      <div className="flex flex-col items-center gap-3 border-r-2 border-slate-300 pr-10">
        <h3 className="text-4xl font-semibold text-[#151A26]">190K+</h3>
        <span className="text-base text-slate-400">Events Created</span>
      </div>
      <div className="flex flex-col items-center gap-3 border-r-2 border-slate-300 pr-10">
        <h3 className="text-4xl font-semibold text-[#151A26]">19K+</h3>
        <span className="text-base text-slate-400">People Joined</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-4xl font-semibold text-[#151A26]">190K+</h3>
        <span className="text-base text-slate-400">Top Speakers</span>
      </div>
    </div>
  );
}
