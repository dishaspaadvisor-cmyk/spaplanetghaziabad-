"use client";
import Hero from "@/components/Hero";
import About from "./about/page";
import { services } from "@/data/Sitedata";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import ContactCard from "@/components/ContactCard";
import GoogleReviews from "@/components/GoogleReviews";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
const offers = [
  "/offer/offer1.webp",
  "/offer/offer2.webp",
  "/offer/offer3.webp",
];

const galleryImages = [
  "/services/servicesimage (1).jpg",
  "/services/servicesimage (4).webp",
  "/services/servicesimage (10).webp",
  "/services/servicesimage (12).webp",
  "/services/servicesimage (4).jpg",
  "/services/servicesimage (2).webp",
  "/services/servicesimage (9).webp",
  "/services/servicesimage (6).jpg",
];

export default function Home() {
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
      {/* hero */}
      <Hero />

      {/* about */}
      <About />

      {/* Services Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-12">

            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-600 text-sm font-semibold uppercase tracking-widest">
              Our Treatments
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
              Choose Your Perfect Therapy in Ghaziabad
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Experience luxury wellness with our premium spa treatments designed
              to relax your body, refresh your mind, and rejuvenate your soul.
            </p>

          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
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
            className="pb-20"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>

                <div className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

                  {/* Image */}

                  <div className="relative h-64 md:h-72 overflow-hidden">

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

                  </div>

                  {/* Content */}

                  <div className="p-6">

                    <h3 className="text-2xl font-bold text-center text-gray-900">
                      {service.title}
                    </h3>


                    <div className="mt-6 flex gap-3">

                      <a
                        href="tel:+919152885922"
                        className="flex-1 flex items-center justify-center gap-2 rounded-full bg-amber-500 py-3 text-white font-semibold hover:bg-amber-600 transition"
                      >
                        <FaPhoneAlt />
                        Call
                      </a>

                      <a
                        href="https://wa.me/919152885986"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-full bg-green-500 py-3 text-white font-semibold hover:bg-green-600 transition"
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



      {/* Gallery */}
      <section className="pb-12 md:pb-20 bg-[#faf8f6]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-12">

            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-600 font-semibold uppercase tracking-widest">
              Our Gallery
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
              Best Spa Services in Ghaziabad
            </h2>

          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  width={700}
                  height={900}
                  quality={100}
                  sizes="(max-width:640px) 50vw,
                               (max-width:1024px) 50vw,
                               33vw"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Desktop Overlay */}
                <div className="absolute inset-0 bg-transparent lg:bg-black/0 lg:group-hover:bg-black/20 transition-all duration-300" />

                {/* Desktop Only Button */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-300">

                  <button
                    type="button"
                    className="bg-white text-[#A67D7A] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#A67D7A] hover:text-white transition"
                  >
                    View Image
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-3xl hover:text-red-400 transition z-50"
          >
            <FaTimes />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 md:left-6 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition z-50"
          >
            <FaChevronLeft className="text-xl md:text-3xl" />
          </button>

          {/* Image */}
          <div
            className="w-full max-w-6xl px-10 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedIndex]}
              alt={`Gallery ${selectedIndex + 1}`}
              width={1800}
              height={2400}
              quality={100}
              priority
              className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 md:right-6 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition z-50"
          >
            <FaChevronRight className="text-xl md:text-3xl" />
          </button>
        </div>
      )}

      {/* Offers */}
      <section className="py-12 md:py-20 bg-[#faf8f6]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-10 md:mb-14">

            <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
              Exclusive Spa Offers
            </h2>

            <p className="text-gray-600 mt-3">
              Choose your favorite offer and book your appointment today.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {offers.map((offer, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                {/* Image */}
                <div className="overflow-hidden bg-white">

                  <Image
                    src={offer}
                    alt={`Offer ${index + 1}`}
                    width={600}
                    height={850}
                    className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105"
                  />

                </div>

                {/* Buttons */}
                <div className="p-5">

                  <div className="flex gap-3">

                    <a
                      href="https://wa.me/919152885986?text=Hello%20I%20am%20interested%20in%20your%20spa%20offer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                    >
                      <FaWhatsapp className="text-lg" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href="tel:+919152885922"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#A67D7A] hover:bg-[#8b6664] text-white py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                    >
                      <FaPhoneAlt />
                      <span>Call</span>
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* contact section */}
      <ContactCard />

      <GoogleReviews />

    </>
  );
}