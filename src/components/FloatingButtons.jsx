"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919152885986"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition duration-300 hover:scale-110 hover:bg-green-600"
      >
        <FaWhatsapp size={34} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919152885986"
        aria-label="Call Now"
        className="fixed bottom-28 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition duration-300 hover:scale-110 hover:bg-blue-700"
      >
        <FaPhoneAlt size={28} />
      </a>
    </>
  );
}