import { formatDate } from "@/utils/formatDate";
import { formatIDR } from "@/utils/formatIDR";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EventCard({ data }: any) {
  return (
    <Link href={`/event/${data?._id}`}>
      <div className="relative rounded-lg bg-white max-w-xs shadow-sm hover:shadow-md duration-200">
        <div className="relative w-full h-[200px] flex-shrink-0 rounded-t-lg overflow-hidden">
          <Image
            className="object-cover"
            src={
              data?.image
                ? `${process.env.NEXT_PUBLIC_API_IMAGE}/${data?.image?.name}`
                : "/images/hero-1.jpg"
            }
            alt="event"
            fill
            sizes="100%"
            priority
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
            {data?.title?.length > 20
              ? `${data?.title?.slice(0, 20)}...`
              : data?.title}
          </h5>
          <p className="mb-10 text-sm text-slate-400">{data?.category?.name}</p>

          <span className="text-sm text-neutral-800 font-medium">
            {data?.venueName}, {formatDate(data?.date)}
          </span>
        </div>

        <div className="top-3 right-3 absolute bg-gradient-to-r from-purple-400 to-purple-600 px-5 rounded-full">
          <span className="text-sm text-white">
            Mulai dari{" "}
            {data.tickets[0].price === 0
              ? "Gratis"
              : formatIDR(data?.tickets[0].price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
