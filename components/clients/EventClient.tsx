"use client";

import React from "react";
import EventCard from "../EventCard";

export default function EventClient() {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}
