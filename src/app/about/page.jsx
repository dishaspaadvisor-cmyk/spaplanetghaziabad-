"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function About() {


  const services = [
    "Deep Tissue Massage",
    "Full Body Massage",
    "Aromatherapy Massage",
    "Couple Spa",
    "Thai Massage",
    "Ayurvedic Spa",
    "Swedish Massage",
    "Hot Stone Therapy",
  ];

  return (
    <section
      className="relative overflow-hidden py-14 lg:py-24"
      aria-labelledby="about-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background image/61-background-light.webp"
          alt="Luxury Spa Background"
          fill
          priority
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= Images ================= */}
          <div className="relative h-[460px] sm:h-[550px] lg:h-[650px]">

            {/* Main Image */}
            <div className="absolute left-0 top-0 w-[72%] h-[68%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/services/servicesimage (4).jpg"
                alt="Best Full Body Massage Spa in Ghaziabad"
                fill
                priority
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,40vw"
                className="object-cover object-top transition duration-500 hover:scale-105"
              />
            </div>

            {/* Second Image */}
            <div className="absolute right-0 bottom-0 w-[68%] h-[52%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/services/servicesimage (11).webp"
                alt="Luxury Couple Spa Massage in Ghaziabad"
                fill
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,40vw"
                className="object-cover object-top transition duration-500 hover:scale-105"
              />
            </div>


          </div>

          {/* ================= Content ================= */}
          <article>

            <span className="inline-flex items-center rounded-full bg-amber-500 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-white">
              About Spa Planet
            </span>

            <h1
              id="about-heading"
              className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900"
            >
              Best Spa & Body Massage Centre in{" "}
              <span className="text-amber-600">
                Ghaziabad
              </span>
            </h1>

            <p className="mt-6 text-gray-700 text-base sm:text-lg leading-8">
              <strong>Spa Planet</strong> is one of the most trusted luxury spa
              and wellness destinations in <strong>Ghaziabad</strong>. Our
              certified therapists provide premium{" "}
              <strong>Full Body Massage</strong>,
              <strong> Deep Tissue Massage</strong>,
              <strong> Swedish Massage</strong>,
              <strong> Aromatherapy</strong>,
              <strong> Couple Spa</strong>, and holistic wellness therapies in
              a peaceful and hygienic environment.
            </p>

            <p className="mt-5 text-gray-700 text-base sm:text-lg leading-8">
              Whether you're looking to relieve stress, reduce muscle pain,
              improve blood circulation, or simply relax after a busy day, Spa
              Planet offers personalized massage therapies designed to restore
              your body, mind, and soul.
            </p>

            {/* Services */}
            <div className="mt-8 rounded-3xl bg-white/70 backdrop-blur-md p-6 border border-amber-100 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Popular Spa Services
              </h2>

              <ul className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2 text-gray-700 font-medium"
                  >
                    <span className="text-amber-500 text-lg">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919152885922?text=Hello%20Spa%20Planet,%20I%20would%20like%20to%20book%20a%20spa%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center rounded-xl bg-green-600 hover:bg-green-700 px-8 py-4 text-white font-bold shadow-lg transition"
              >
                Book on WhatsApp
              </a>

              <a
                href="tel:+919152885922"
                className="flex justify-center items-center rounded-xl border-2 border-amber-500 px-8 py-4 text-amber-600 hover:bg-amber-50 font-bold transition"
              >
                Call Now: +91 91528 85922
              </a>

            </div>



          </article>
        </div>
      </div>
    </section>
  );
}