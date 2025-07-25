"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Team = {
  name: string;
  images: {
    src: string;
    alt: string;
  }[];
};

export default function TeamPage() {
  const router = useRouter();
  
  const teams: Team[] = [
    {
      name: "Office Bearers",
      images: [
        { src: "/team-images/office-bearers/coverpic.png", alt: "Office Bearers" },
        { src: "/team-images/office-bearers/Ann.png", alt: "Office Bearer 1" },
        { src: "/team-images/office-bearers/Sanjay.png", alt: "Office Bearer 2" },
        { src: "/team-images/office-bearers/Ritujaa.png", alt: "Office Bearer 3" },
        { src: "/team-images/office-bearers/Akshatha.png", alt: "Office Bearer 4" },
        { src: "/team-images/office-bearers/Anjana.png", alt: "Office Bearer 5" },
        { src: "/team-images/office-bearers/Tanusha.png", alt: "Office Bearer 6" },
        { src: "/team-images/office-bearers/Tanisha.png", alt: "Office Bearer 7" },
      ],
    },
    {
      name: "Technical Team",
      images: [
        { src: "/team-images/technical/coverpic.png", alt: "Technical Team" },
        { src: "/team-images/technical/Sowmya.png", alt: "Technical Member 1" },
        { src: "/team-images/technical/Sanjana.png", alt: "Technical Member 2" },
        { src: "/team-images/technical/Bagavati.png", alt: "Technical Member 3" },
        { src: "/team-images/technical/Navdeep.png", alt: "Technical Member 4" },
        { src: "/team-images/technical/Uthaya.png", alt: "Technical Member 5" },
        { src: "/team-images/technical/Shivaprakash.png", alt: "Technical Member 6" },
      ],
    },
    {
      name: "Design Team",
      images: [
        { src: "/team-images/design/coverpic.png", alt: "Design Team" },
        { src: "/team-images/design/Hiba.png", alt: "Design Member 1" },
        { src: "/team-images/design/Harshikaa.png", alt: "Design Member 2" },
        { src: "/team-images/design/Gokul.png", alt: "Design Member 3" },
        { src: "/team-images/design/Maanasvini.png", alt: "Design Member 4" },
        { src: "/team-images/design/Tushyent.png", alt: "Design Member 5" },
        { src: "/team-images/design/Saranya.png", alt: "Design Member 6" },
      ],
    },
    {
      name: "Public Relations",
      images: [
        { src: "/team-images/pr/coverpic.png", alt: "Public Relations Team" },
        { src: "/team-images/pr/Aishwarya.png", alt: "PR Member 1" },
        { src: "/team-images/pr/Gopika.png", alt: "PR Member 2" },
        { src: "/team-images/pr/Madussree.png", alt: "PR Member 3" },
        { src: "/team-images/pr/Sowkya.png", alt: "PR Member 4" },
        { src: "/team-images/pr/Deeksha.png", alt: "PR Member 5" },
        { src: "/team-images/pr/Madhav.png", alt: "PR Member 6" },
      ],
    },
    {
      name: "Event Management",
      images: [
        { src: "/team-images/event/coverpic.png", alt: "Event Management" },
        { src: "/team-images/event/Madhangi.png", alt: "Event Manager 1" },
        { src: "/team-images/event/Yaazhini.png", alt: "Event Manager 2" },
        { src: "/team-images/event/Ananya.png", alt: "Event Manager 3" },
        { src: "/team-images/event/Jaswanth.png", alt: "Event Manager 4" },
        { src: "/team-images/event/Keerthana.png", alt: "Event Manager 5" },
        { src: "/team-images/event/Samyuktha.png", alt: "Event Manager 6" },
      ],
    },
    {
      name: "Editorial",
      images: [
        { src: "/team-images/editorial/coverpic.png", alt: "Editorial Team" },
        { src: "/team-images/editorial/Faatina.png", alt: "Editorial Member 1" },
        { src: "/team-images/editorial/Kushaal.png", alt: "Editorial Member 2" },
        { src: "/team-images/editorial/Vihashni.png", alt: "Editorial Member 3" },
        { src: "/team-images/editorial/Sruthi.png", alt: "Editorial Member 4" },
        { src: "/team-images/editorial/Niveditha.png", alt: "Editorial Member 5" },
        { src: "/team-images/editorial/Yasasvini.png", alt: "Editorial Member 6" },
      ],
    },
  ];

  const TeamCarousel = ({ team }: { team: Team }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const groupedImages = [];
    for (let i = 0; i < team.images.length; i += 2) {
      groupedImages.push(team.images.slice(i, i + 2));
    }
  
    const goToPrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? groupedImages.length - 1 : prev - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prev) => (prev === groupedImages.length - 1 ? 0 : prev + 1));
    };
   
    return (
      <div className="w-full relative overflow-hidden">
        <div className="relative w-full max-w-[800px] mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {groupedImages.map((imagePair, index) => (
              <div key={index} className="w-full flex-shrink-0 flex">
                {imagePair.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`w-1/2 aspect-[3/4] relative overflow-hidden ${
                      imgIndex === 0 ? 'rounded-l-lg' : 'rounded-r-lg'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      priority={index === 0 && imgIndex === 0}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
  
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/60 backdrop-blur-md rounded-full w-10 h-10 text-xl shadow-md z-20 hover:scale-110 transition"
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/60 backdrop-blur-md rounded-full w-10 h-10 text-xl shadow-md z-20 hover:scale-110 transition"
            aria-label="Next slide"
          >
            &#10095;
          </button>
        </div>
  
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {groupedImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-[#2b0a3a]" : "bg-[#2b0a3a]/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-center p-4 md:p-8">
      <div className="w-full max-w-7xl">
        <Head>
          <title>Team - IEEE WIE SSN</title>
          <meta name="description" content="Meet our IEEE WIE SSN team members" />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Cormorant+Garamond:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        {/* Main Content */}
        <div className="mx-auto my-8 w-full rounded-[30px] md:rounded-[40px] p-6 md:p-8 text-center relative z-10 
                bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#2b0a3a] mb-8 font-bold">
            Meet Our Teams
          </h1>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {teams.map((team, idx) => (
              <div
                key={idx}
                className="w-full rounded-3xl p-4 md:p-6 transition hover:scale-[1.01]"
              >
                <h2 className="text-2xl font-semibold mb-4 text-[#2b0a3a]">{team.name}</h2>
                <TeamCarousel team={team} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}