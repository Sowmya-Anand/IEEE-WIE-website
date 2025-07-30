"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventInput } from '@fullcalendar/core';

interface FullCalendarEventInfo {
  event: {
    title: string;
    url: string;
    extendedProps: {
      description: string;
      gformLink: string;
      imageUrl: string;
      [key: string]: any;
    };
    start: Date | string;
    end?: Date | string;
    allDay: boolean;
  };
  timeText?: string;
  view: any;
}

const events: EventInput[] = [
  {
    date: "2025-07-24",
    title: "Event 1",
    extendedProps: {
      description: "This is the description for event 1.",
      gformLink: "https://docs.google.com/forms/d/e/1FAIpQLSd4aE5z5QWm7gCRIN3VF9rHFJysn6svB730_iqgTDk55GGXQA/viewform",
      imageUrl: "/images/event1.webp",
    },
  },
  {
    date: "2025-07-29",
    title: "Event 2",
    extendedProps: {
      description: "This is the description for event 2.",
      gformLink: "https://docs.google.com/forms/d/e/1FAIpQLSd4aE5z5QWm7gCRIN3VF9rHFJysn6svB730_iqgTDk55GGXQA/viewform",
      imageUrl: "/images/ssn_background.jpg",
    },
  },
  // Add more events here
];

export default function EventsPage() {
  const [calendarView, setCalendarView] = useState("dayGridMonth");

  const renderEventContent = (eventInfo: FullCalendarEventInfo) => {
    const { title, extendedProps } = eventInfo.event;
  
    return (
      <div className="relative w-full h-24 rounded-md group overflow-hidden">
        {/* Background image (fills tile fully) */}
        <img
          src={extendedProps.imageUrl}
          alt={title}
          className="absolute w-full h-full object-cover brightness-75 saturate-50"
        />
  
        {/* Title (always visible at bottom) */}
        <div className="absolute bottom-1 left-1 right-1 bg-purple-900/70 text-purple-100 text-xs font-semibold px-2 py-1 rounded-md backdrop-blur-sm z-10 pointer-events-none">
          {title}
        </div>
  
        {/* Hover overlay with scrollable content */}
        <div className="absolute inset-0 z-20 rounded-md 
          bg-gradient-to-br from-purple-800/90 to-pink-800/90 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 
          text-white text-xs px-3 py-2 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent">
          <p className="font-bold text-sm mb-1">{title}</p>
          <p className="leading-snug whitespace-pre-wrap">{extendedProps.description}</p>
        </div>
      </div>
    );
  };
  

  return (
    <div
      className="min-h-[calc(100vh-4rem)] bg-[url('/images/ssn_background.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start text-center p-8"
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
        {[{
          label: "Month",
          value: "dayGridMonth"
        }, ].map(({ label, value }) => (
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
          headerToolbar={false}
          height="auto"
          dayMaxEvents={true}
          weekends={true}
          eventDisplay="block" 
          eventColor="#ec4899"
          eventTextColor="#fff"
          dayHeaderClassNames={() => ["text-purple-300", "font-semibold"]}
          dayCellClassNames={() => [
            "rounded-lg",
            "transition",
            "duration-300",
            "hover:bg-purple-700/40",
            "cursor-pointer",
            "group",
            "relative",
          ]}
          events={events as EventInput[]}
          eventContent={renderEventContent} // Use the custom renderEventContent function
          dateClick={(arg) => {
            const clickedEvent = events.find(
              (event) => event.date === arg.dateStr
            );
            if (clickedEvent && clickedEvent.extendedProps?.gformLink) {
              window.open(clickedEvent.extendedProps.gformLink, "_blank");
            }
          }}
        />
      </div>
    </div>
  );
}
