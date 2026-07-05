"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { services } from "@/data/Sitedata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Renamed to match the variable used in navigation functions


export default function ServicesPage() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const closeModal = () => setSelectedIndex(null);

    const prevImage = () => {
        setSelectedIndex((prev) =>
            prev === 0 ? galleryImages.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setSelectedIndex((prev) =>
            prev === galleryImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[45vh] md:h-[60vh] overflow-hidden">
                <Image
                    src="/hero/hero1.png"
                    alt="Spa Services"
                    fill
                    priority
                    className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-6">

                        <h1 className="text-4xl md:text-6xl font-bold">
                            Our Spa Services
                        </h1>

                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-white  md:py-20">

                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    <div className="text-center mb-12">

                        <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-600 text-sm font-semibold uppercase tracking-widest">
                            Our Treatments
                        </span>

                        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
                            Choose Your Perfect Therapy
                        </h2>

                        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                            Experience luxury wellness with our premium spa treatments designed
                            to relax your body, refresh your mind, and rejuvenate your soul.
                        </p>

                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-16 bg-white"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
                                    {/* Image */}
                                    <div className="relative h-72 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-600 mb-5 line-clamp-3">
                                            {service.description}
                                        </p>

                                        <div className="mt-auto flex gap-3">
                                            <a
                                                href="tel:+918422902212"
                                                className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-full font-semibold transition"
                                            >
                                                <FaPhoneAlt />
                                                Call Now
                                            </a>

                                            <a
                                                href={`https://wa.me/918422902212?text=Hello, I want to book ${encodeURIComponent(
                                                    service.title
                                                )}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition"
                                            >
                                                <FaWhatsapp />
                                                WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </section>
        </>
    );
}