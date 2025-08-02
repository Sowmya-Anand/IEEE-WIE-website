"use client";

import { useState } from "react";
import {
    FaLinkedin,
    FaInstagram,
    FaEnvelope,
    FaUser,
    FaComment,
} from "react-icons/fa";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:ssnieeewie@ssn.edu.in?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-center p-4 md:p-8">
            <div className="w-full max-w-4xl">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-[30px] md:rounded-[40px] p-6 md:p-8">
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white drop-shadow-lg mb-4">
                            Contact Us
                        </h1>
                        <p className="text-lg md:text-xl text-light-lavender max-w-2xl mx-auto">
                            Get in touch with IEEE WIE SSN. We'd love to hear
                            from you!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-garamond font-bold text-white mb-6">
                                Send us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="text-primary-purple" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-light-lavender focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-300"
                                    />
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="text-primary-purple" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-light-lavender focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-300"
                                    />
                                </div>

                                <div className="relative">
                                    <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                                        <FaComment className="text-primary-purple" />
                                    </div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        required
                                        rows={5}
                                        className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-light-lavender focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-300 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-garamond ring-2 ring-purple-500/60 hover:ring-pink-400/80 focus:outline-none focus:ring-4"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-garamond font-bold text-white mb-6">
                                Connect With Us
                            </h2>

                            <a
                                href="mailto:ssnieeewie@ssn.edu.in"
                                className="block bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-6 hover:bg-white/15 hover:scale-105 transform transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                        <FaEnvelope className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white font-garamond">
                                            Email
                                        </h3>
                                        <p className="text-light-lavender hover:text-white transition-colors duration-300">
                                            ssnieeewie@ssn.edu.in
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/company/ssn-ieee-wie/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-6 hover:bg-white/15 hover:scale-105 transform transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                        <FaLinkedin className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white font-garamond">
                                            LinkedIn
                                        </h3>
                                        <p className="text-light-lavender hover:text-white transition-colors duration-300">
                                            SSN IEEE WIE
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/ssn_ieee_wie/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-6 hover:bg-white/15 hover:scale-105 transform transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                        <FaInstagram className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white font-garamond">
                                            Instagram
                                        </h3>
                                        <p className="text-light-lavender hover:text-white transition-colors duration-300">
                                            @ssn_ieee_wie
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
