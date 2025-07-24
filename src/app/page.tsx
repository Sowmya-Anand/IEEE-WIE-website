// src/app/page.tsx

import Image from "next/image";
import Link from "next/link";
import DynamicText from "@/components/DynamicText"; 
import { FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] pt-16 -mt-16">
        <div className="relative w-[1000px] h-[500px] bg-[url('/images/ssn_background.jpg')] bg-cover bg-center rounded-[40px] shadow-2xl flex flex-col justify-end">
          <div className="w-full h-2/5 p-8 bg-white/30 backdrop-blur-md rounded-b-[40px] flex flex-col items-center justify-center text-center">
            <h1 className="font-garamond text-5xl font-bold text-dark-purple">
              We Are WIE
            </h1>
            <DynamicText />
            <div className="flex gap-8 mt-4 text-4xl">
              <Link
                href="https://www.linkedin.com/company/ssn-ieee-wie/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-purple hover:text-light-lavender transition-transform duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.instagram.com/ssn_ieee_wie/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-purple hover:text-light-lavender transition-transform duration-300 hover:scale-110"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center">
          <h2 className="font-garamond text-4xl font-bold mb-4 text-primary-purple">
            About Us
          </h2>
          <p className="font-garamond text-xl text-gray-800 leading-relaxed mb-8">
            IEEE Women in Engineering (WIE) is one of the world’s largest
            technical communities dedicated to inspiring, engaging, and advancing
            women in technical disciplines. Our SSN chapter focuses on building a
            strong foundation for collaboration and innovation among women in STEM.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <Image
              src="/images/AboutUsImage.jpg" 
              alt="Team Image 1"
              width={350}
              height={250}
              className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            />
            <Image
              src="/images/AboutUsImage2.jpg"
              alt="Team Image 2"
              width={350}
              height={250}
              className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
}