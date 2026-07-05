"use client";


import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Menu,
  X,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const services = [
    {
      name: "Female to Male Massage",
      link: "/services/female-to-male",
    },
    {
      name: "Deep Tissue Massage",
      link: "/services/deep-tissue-massage",
    },
    {
      name: "Swedish Massage",
      link: "/services/swedish-massage",
    },
    {
      name: "Thai Massage",
      link: "/services/thai-massage",
    },
    {
      name: "Couple Massage",
      link: "/services/couple-massage",
    },
    {
      name: "Full Body Massage",
      link: "/services/full-body-massage",
    },
  ];

  return (
    <>
      {/* ================= TOP BAR ================= */}
      {/* Desktop */}
      <div className="hidden md:block bg-white text-black text-sm">
        <div className="max-w-7xl mx-auto px-6 h-10 flex justify-between items-center">

          {/* Left */}
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span> Gaur Mall, Rajnagar ,Ghaziabad, Uttar Pradesh 201001</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-8">
            <a
              href="tel:+919152885922"
              className="flex items-center gap-2 hover:text-amber-500 transition"
            >
              <Phone size={16} />
              +91 9152885922
            </a>

            <a
              href="mailto:spaplanet.ghaziabad@gmail.com"
              className="flex items-center gap-2 hover:text-amber-500 transition"
            >
              <Mail size={16} />
              spaplanet.ghaziabad@gmail.com
            </a>
          </div>

        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden bg-white border-b border-gray-200 text-xs">
        <div className="px-4 py-2 flex flex-col gap-2">

          {/* Address */}
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin size={14} className="text-amber-500" />
            <span>Rajnagar Ghaziabad, Uttar Pradesh 201001</span>
          </div>

          {/* Phone & Email */}
          <div className="flex items-center justify-between">

            <a
              href="tel:+919152885922"
              className="flex items-center gap-1 text-gray-700 hover:text-amber-500"
            >
              <Phone size={14} />
              <span>Call</span>
            </a>

            <a
              href="mailto:spaplanet.ghaziabad@gmail.com"
              className="flex items-center gap-1 text-gray-700 hover:text-amber-500"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>

            <a
              href="https://wa.me/919152885986"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-700"
            >
              <FaWhatsapp size={15} />
              <span>WhatsApp</span>
            </a>

          </div>

        </div>
      </div>

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 bg-white shadow-md text-black">

        <div className="max-w-7xl mx-auto px-6">

          <div className="h-20 flex justify-between items-center">

            {/* Logo */}

            <Link href="/">
              <Image
                src="/logo/logo.webp"
                alt="Logo"
                width={170}
                height={60}
                priority
              />
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-10">

              <Link
                href="/"
                className="font-medium hover:text-amber-500  text-black transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-medium hover:text-amber-500 text-black  transition"
              >
                About
              </Link>

              <div className="relative group">
                <Link
                  href="/services"
                  className="flex items-center gap-1 font-medium hover:text-amber-500"
                >
                  Services
                  <ChevronDown size={18} />
                </Link>

                <div className="absolute left-0 top-full pt-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-300 z-50">
                  <div className="bg-white rounded-xl shadow-xl w-72 overflow-hidden">

                    <Link
                      href="/services"
                      className="block px-6 py-4 font-semibold text-amber-600 border-b hover:bg-amber-50"
                    >
                      All Services
                    </Link>
                    {services.map((item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        onClick={() => {
                          setMobileOpen(false);
                          setServiceOpen(false);
                        }}
                        className="block px-4 py-3 border-b last:border-0 hover:bg-amber-50"
                      >
                        {item.name}
                      </Link>
                    ))}

                  </div>
                </div>
              </div>

              <Link
                href="/gallery"
                className="font-medium hover:text-amber-500  text-black  transition"
              >
                Gallery
              </Link>



              <Link
                href="/offers"
                className="font-medium hover:text-amber-500 text-black  transition"
              >
                Offers
              </Link>

              <Link
                href="/contact"
                className="font-medium hover:text-amber-500 text-black  transition"
              >
                Contact
              </Link>

            </nav>

            {/* Buttons */}

            <div className="hidden lg:flex items-center gap-3">

              <a
                href="https://wa.me/919152885986"
                target="_blank"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-5 py-3 rounded-full transition"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href="tel:+919152885922"
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-5 py-3 rounded-full transition"
              >
                <Phone size={18} />
                Call
              </a>

            </div>

            {/* Mobile */}

            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

        </div>
        {/* ================= MOBILE MENU ================= */}

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="p-6 space-y-5">

              {/* Home */}
              <Link
                href="/"
                className="block font-medium text-gray-800 hover:text-amber-500 transition"
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="flex items-center justify-between w-full font-medium text-gray-800 hover:text-amber-500"
                >
                  <span>Services</span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform ${serviceOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {serviceOpen && (
                  <div className="mt-4 rounded-xl bg-gray-50 border overflow-hidden">

                    <Link
                      href="/services"
                      onClick={() => {
                        setMobileOpen(false);
                        setServiceOpen(false);
                      }}
                      className="block px-5 py-4 font-semibold text-amber-600 border-b hover:bg-amber-50"
                    >
                      All Services
                    </Link>

                    {services.map((item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        onClick={() => {
                          setMobileOpen(false);
                          setServiceOpen(false);
                        }}
                        className="block px-5 py-3 border-b last:border-0 hover:bg-amber-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Gallery */}
              <Link
                href="/gallery"
                className="block font-medium text-gray-800 hover:text-amber-500 transition"
              >
                Gallery
              </Link>

              {/* Offers */}
              <Link
                href="/offers"
                className="block font-medium text-gray-800 hover:text-amber-500 transition"
              >
                Offers
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="block font-medium text-gray-800 hover:text-amber-500 transition"
              >
                Contact
              </Link>

              {/* Buttons */}
              <div className="pt-6 space-y-3">

                <a
                  href="https://wa.me/919152885986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-green-500 py-3 text-white font-semibold hover:bg-green-600 transition"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp
                </a>

                <a
                  href="tel:+919152885922"
                  className="flex items-center justify-center gap-2 rounded-full bg-amber-500 py-3 text-white font-semibold hover:bg-amber-600 transition"
                >
                  <Phone size={18} />
                  Call Now
                </a>

              </div>

            </div>
          </div>
        )}

      </header>
    </>
  );
}