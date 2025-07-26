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
      <div className="relative w-full max-w-[600px] mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {groupedImages.map((imagePair, index) => (
  <div key={index} className="w-full flex-shrink-0 flex">
    {imagePair.map((image, imgIndex) => (
      <div
        key={imgIndex}
        className={`w-1/2 aspect-[4/5] relative overflow-hidden ${
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
    <div className="min-h-screen overflow-x-hidden overflow-y-auto relative">
      <Head>
        <title>Team - IEEE WIE SSN</title>
        <meta name="description" content="Meet our IEEE WIE SSN team members" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Cormorant+Garamond:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-[150%] h-[200%] rounded-full bg-opacity-50 backdrop-blur-lg
              ${i === 0 ? 'top-[-40%] left-[-20%] bg-[rgba(119,37,131,0.75)]' : ''}
              ${i === 1 ? 'top-[-30%] left-[70%] bg-[rgba(186,85,211,0.6)] animate-delay-1000' : ''}
              ${i === 2 ? 'top-[20%] left-[-30%] bg-[rgba(221,160,221,0.6)] animate-delay-2000' : ''}
              ${i === 3 ? 'top-[50%] left-[60%] bg-[rgba(255,240,245,0.6)] animate-delay-3000' : ''}
              ${i === 4 ? 'top-[-50%] left-[-50%] bg-[rgba(153,50,204,0.6)] animate-delay-4000' : ''}
              ${i === 5 ? 'top-[40%] left-[50%] bg-[rgba(221,160,221,0.5)] animate-delay-5000' : ''}
              ${i === 6 ? 'top-[10%] left-[-40%] bg-[rgba(238,130,238,0.644)] animate-delay-6000' : ''}
              ${i === 7 ? 'top-[-10%] left-[80%] bg-[rgba(186,85,211,0.4)] animate-delay-7000' : ''}
              ${i === 8 ? 'top-[70%] left-[-10%] bg-[rgba(255,240,245,0.4)] animate-delay-7000' : ''}
              ${i === 9 ? 'top-[-60%] left-[40%] bg-[rgba(153,50,204,0.5)] animate-delay-6000' : ''}
              ${i === 10 ? 'top-[30%] left-[-60%] bg-[rgba(238,130,238,0.743)] animate-delay-5000' : ''}
              ${i === 11 ? 'top-[60%] left-[70%] bg-[rgba(119,37,131,0.4)] animate-delay-4000' : ''}
              ${i === 12 ? 'top-[0%] left-[20%] bg-[rgba(38,1,47,0.784)] animate-delay-3000' : ''}
              ${i === 13 ? 'top-[80%] left-[-20%] bg-[rgba(221,160,221,0.3)] animate-delay-2000' : ''}
              ${i === 14 ? 'top-[-70%] left-[50%] bg-[rgba(255,240,245,0.3)] animate-delay-1000' : ''}
              animate-waveMove animate-duration-[6s] animate-infinite animate-ease-in-out`}
          />
        ))}
      </div>


      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 md:p-8 bg-[rgba(119,37,131,0.5)] backdrop-blur-sm relative z-10">
        <div className="flex gap-4">
          <Image
            src="/images/ieeewie_logo.png"
            alt="IEEE Logo"
            width={80}
            height={80}
            className="h-16 md:h-20 w-auto"
          />
          <Image
            src="/images/ssn_logo.png"
            alt="SSN Logo"
            width={80}
            height={80}
            className="h-16 md:h-20 w-auto"
          />
        </div>
        <ul className="flex gap-2 md:gap-4">
          <li>
            <Link
              href="/"
              className={`text-white text-xl md:text-2xl transition-colors hover:text-[#ffccff] ${
                router.pathname === "/" ? "font-medium" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="text-white text-xl md:text-2xl transition-colors hover:text-[#ffccff]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className={`text-white text-xl md:text-2xl transition-colors hover:text-[#ffccff] ${
                router.pathname === "/team" ? "font-medium" : ""
              }`}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="text-white text-xl md:text-2xl transition-colors hover:text-[#ffccff]"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white text-xl md:text-2xl transition-colors hover:text-[#ffccff]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="mx-auto my-8 w-[90%] rounded-[30px] md:rounded-[40px] p-8 text-center relative z-10 
              bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
        <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#2b0a3a] mb-8 font-bold">
          Meet Our Teams
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {teams.map((team, idx) => (
            <div
              key={idx}
              className="w-full  rounded-3xl p-6 transition hover:scale-[1.01]"
            >
              <TeamCarousel team={team} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
