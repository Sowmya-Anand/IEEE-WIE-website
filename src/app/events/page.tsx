"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventInput } from "@fullcalendar/core";

interface FullCalendarEventInfo {
    event: {
        title: string;
        url: string;
        extendedProps: {
            description: string;
            gformLink: string;
            imageUrl: string;
            [key: string]: unknown;
        };
        start: Date | string;
        end?: Date | string;
        allDay: boolean;
    };
    timeText?: string;
    view: "month" | string;
}

const events: EventInput[] = [
    {
        date: "2025-07-24",
        title: "Event 1",
        extendedProps: {
            description: "This is the description for event 1.",
            gformLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSd4aE5z5QWm7gCRIN3VF9rHFJysn6svB730_iqgTDk55GGXQA/viewform",
            imageUrl: "/images/Logo_Dark.jpg",
        },
    },
    {
        date: "2025-07-29",
        title: "Event 2",
        extendedProps: {
            description: "This is the description for event 2.",
            gformLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSd4aE5z5QWm7gCRIN3VF9rHFJysn6svB730_iqgTDk55GGXQA/viewform",
            imageUrl: "/images/ssn_background.jpg",
        },
    },
    // Add more events here
];

export default function EventsPage() {
    const [calendarView, setCalendarView] = useState("dayGridMonth");
    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Format events for mobile list view
    const formatEventDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const renderEventContent = (eventInfo: FullCalendarEventInfo) => {
        const { title, extendedProps } = eventInfo.event;

        return (
            <div className="relative w-full h-24 rounded-md group overflow-hidden">
                {/* Background image (fills tile fully) */}
                <img
                    src={extendedProps.imageUrl}
                    alt={title}
                    className="relative w-full h-full object-cover brightness-75 saturate-50"
                />
                {/* Title (always visible at bottom) */}
                <div className="absolute bottom-1 left-1 right-1 bg-purple-900/70 text-purple-100 text-xs font-semibold px-2 py-1 rounded-md backdrop-blur-sm z-10 pointer-events-none">
                    {title}
                </div>

                {/* Hover overlay with scrollable content */}
                <div
                    className="absolute inset-0 z-20 rounded-md 
          bg-gradient-to-br from-purple-800/90 to-pink-800/90 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 
          text-white text-xs px-3 py-2 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent"
                >
                    <p className="font-bold text-sm mb-1">{title}</p>
                    <p className="leading-snug whitespace-pre-wrap">
                        {extendedProps.description}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div
            className="min-h-[calc(100vh-4rem)] bg-[url('/images/ssn_background.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start text-center p-4 md:p-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
        >
            {/* Header */}
            <div className="mt-6 md:mt-12 max-w-4xl px-4">
                <h1
                    className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white drop-shadow-md mb-4"
                    style={{ textShadow: "0 0 4px rgba(0,0,0,0.6)" }}
                >
                    Our Events
                </h1>
                <div className="bg-black/40 backdrop-blur-sm rounded-xl px-6 py-4 max-w-2xl mx-auto relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>
                    <p className="text-lg md:text-xl text-purple-200 font-semibold relative z-10">
                        Discover past and upcoming workshops, talks, and
                        competitions here.
                    </p>
                </div>
            </div>

            {/* Mobile List View */}
            {isMobile ? (
                <div className="mt-6 w-full max-w-md px-4">
                    <h2 className="text-xl font-bold text-white mb-4 text-center">
                        Upcoming Events
                    </h2>
                    <div className="space-y-4">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    if (event.extendedProps?.gformLink) {
                                        window.open(
                                            event.extendedProps.gformLink,
                                            "_blank"
                                        );
                                    }
                                }}
                                className="bg-gradient-to-br from-purple-900/80 via-purple-800/75 to-pink-900/80 
                  backdrop-blur-xl shadow-lg rounded-xl p-4 relative
                  cursor-pointer active:scale-95 transform transition-all duration-200
                  border border-transparent bg-clip-padding
                  before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r 
                  before:from-transparent before:via-purple-400/20 before:to-transparent before:-z-10"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={
                                                event.extendedProps?.imageUrl ||
                                                "/images/Logo_Dark.jpg"
                                            }
                                            alt={event.title || "Event"}
                                            className="w-20 h-20 rounded-lg object-cover border border-purple-500/30"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0 text-left">
                                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                                            {event.title}
                                        </h3>
                                        <p className="text-purple-200 text-sm mb-3 font-medium">
                                            {formatEventDate(
                                                event.date as string
                                            )}
                                        </p>
                                        <p className="text-purple-100 text-sm leading-relaxed overflow-hidden max-h-16">
                                            {event.extendedProps?.description ||
                                                "Click to learn more"}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 text-left">
                                    <span
                                        className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 
                    text-white text-sm font-semibold rounded-full"
                                    >
                                        Tap to Register
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    {/* View switcher buttons - Desktop only */}
                    <div className="mt-10 flex justify-center gap-4">
                        {[
                            {
                                label: "Month",
                                value: "dayGridMonth",
                            },
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

                    {/* Calendar container - Desktop only */}
                    <div
                        className="bg-black mt-12 w-full max-w-7xl p-8 rounded-3xl relative
              bg-gradient-to-br from-purple-900/80 via-purple-800/75 to-pink-900/80
              backdrop-blur-3xl shadow-2xl border border-transparent bg-clip-padding
              before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r 
              before:from-transparent before:via-purple-400/25 before:to-transparent before:-z-10"
                        style={{ boxShadow: "0 0 40px rgba(168,85,247,0.6)" }}
                    >
                        <FullCalendar
                            plugins={[
                                dayGridPlugin,
                                timeGridPlugin,
                                interactionPlugin,
                            ]}
                            initialView={calendarView}
                            headerToolbar={false}
                            height={950}
                            dayMaxEvents={true}
                            weekends={true}
                            eventDisplay="block"
                            eventColor="#ec4899"
                            eventTextColor="#fff"
                            dayHeaderClassNames={() => [
                                "text-purple-300",
                                "font-semibold",
                            ]}
                            dayCellClassNames={() => [
                                "rounded-lg",
                                "transition",
                                "duration-300",
                                "hover:bg-purple-700/40",
                                "cursor-pointer",
                                "group",
                                "relative",
                            ]}
                            dayCellContent={(arg) => (
                                <>
                                    <div className="text-center font-semibold text-white">
                                        {arg.date.getDate()}
                                    </div>
                                </>
                            )}
                            events={events as EventInput[]}
                            eventContent={renderEventContent}
                            dateClick={(arg) => {
                                const clickedEvent = events.find(
                                    (event) => event.date === arg.dateStr
                                );
                                if (
                                    clickedEvent &&
                                    clickedEvent.extendedProps?.gformLink
                                ) {
                                    window.open(
                                        clickedEvent.extendedProps.gformLink,
                                        "_blank"
                                    );
                                }
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
