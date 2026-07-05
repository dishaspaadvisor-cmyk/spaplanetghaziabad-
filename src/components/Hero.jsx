"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { heroSlides } from "@/data/Sitedata";

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const slider = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(slider);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">

            {/* Slides */}
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${current === index ? "opacity-100 z-20" : "opacity-0 z-10"
                        }`}
                >
                    {/* Desktop Image */}

                    <Image
                        src={slide.desktopImage}
                        alt={slide.title}
                        fill
                        priority
                        className="hidden md:block object-cover"
                    />

                    {/* Mobile Image */}

                    <Image
                        src={slide.mobileImage}
                        alt={slide.title}
                        fill
                        priority
                        className="block md:hidden object-cover"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-black/55" />

                    {/* Content */}

                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

                            <div className="max-w-2xl">

                    

                                <h1 className="text-white font-bold leading-tight text-4xl md:text-6xl lg:text-7xl">
                                    {slide.title}
                                </h1>

                        

                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Bottom Buttons */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-3">

                {/* WhatsApp */}
                <a
                    href="https://wa.me/919152885986"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-green-600 md:gap-3 md:px-6 md:py-4 md:text-base"
                >
                    <FaWhatsapp className="text-base md:text-xl" />
                    <span>WhatsApp</span>
                </a>

                {/* Call */}
                <a
                    href="tel:+919152885922"
                    className="flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-amber-600 md:gap-3 md:px-6 md:py-4 md:text-base"
                >
                    <FaPhoneAlt className="text-sm text-black md:text-lg" />
                    <span>Call</span>
                </a>

            </div>

        </section>
    );
}