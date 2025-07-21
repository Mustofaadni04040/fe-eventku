export default function Stats({ data }: any) {
  const upcomingEvents = data?.data?.filter(
    (item: any) => new Date(item?.date) > new Date()
  ).length;

  const allCategories = data?.data?.map((item: any) => item?.category?.name);
  const totalCategories = new Set(allCategories);

  return (
    <div className="mt-72 mb-10 max-w-3xl px-5 mx-auto flex gap-6 justify-center items-center">
      <div className="flex flex-col items-center gap-3 border-r-2 border-slate-300 pr-10">
        <h3 className="text-4xl font-semibold text-[#151A26]">
          {data?.data?.length}
        </h3>
        <span className="text-base text-slate-400">Active Events</span>
      </div>
      <div className="flex flex-col items-center gap-3 border-r-2 border-slate-300 pr-10">
        <h3 className="text-4xl font-semibold text-[#151A26]">
          {upcomingEvents}
        </h3>
        <span className="text-base text-slate-400">Upcoming Events</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-4xl font-semibold text-[#151A26]">
          {totalCategories?.size}
        </h3>
        <span className="text-base text-slate-400">Category Events</span>
      </div>
    </div>
  );
}
