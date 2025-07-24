"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function EventsPage() {
  const [calendarView, setCalendarView] = useState("dayGridMonth");

  return (
    <div
      className="min-h-[calc(100vh-4rem)] bg-[url('/your-background.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start text-center p-8"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* Header */}
      <div className="mt-12 max-w-4xl">
        <h1
          className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-md"
          style={{ textShadow: "0 0 4px rgba(0,0,0,0.6)" }}
        >
          Our Events
        </h1>
        <p className="mt-5 text-xl max-w-2xl mx-auto text-purple-200 font-semibold">
          Discover past and upcoming workshops, talks, and competitions here.
        </p>
      </div>

      {/* View switcher buttons */}
      <div className="mt-10 flex justify-center gap-4">
        {[
          { label: "Month", value: "dayGridMonth" },
        ].map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setCalendarView(value)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition 
              ${
                calendarView === value
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-purple-900/50 text-purple-300 hover:bg-purple-800 hover:text-white"
              }
              `}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Calendar container */}
      <div
        className="mt-12 w-full max-w-7xl p-8 rounded-3xl
          bg-gradient-to-br from-purple-900/80 via-purple-800/75 to-pink-900/80
          backdrop-blur-3xl shadow-2xl border border-purple-700/60"
        style={{ boxShadow: "0 0 40px rgba(168,85,247,0.6)" }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={calendarView}
          headerToolbar={false} // hide default toolbar
          height="auto"
          dayMaxEvents={true}
          weekends={true}
          eventColor="#ec4899"
          eventTextColor="#fff"
          dayHeaderClassNames={() => ["text-purple-300", "font-semibold"]}
          dayCellClassNames={() => [
            "rounded-lg",
            "transition",
            "duration-300",
            "hover:bg-purple-700/40",
            "cursor-pointer",
          ]}
        />
      </div>
    </div>
  );
}
