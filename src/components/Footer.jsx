import Image from "next/image";
import Link from "next/link";

import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer
            className="relative  bg-center text-white"
            style={{
                backgroundImage: "url('/background image/61-background-light.webp')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0"></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Logo Section */}

                    <div>
                        <Image
                            src="/logo/logo.webp"
                            alt="Auric wellness spa"
                            width={180}
                            height={180}
                        />

                        <p className="mt-6 text-black leading-8">
                            Escape into a world of luxury and relaxation Spa in Ghaziabad.
                            auric wellness spa  offers premium wellness experiences,
                            rejuvenating massages,Massage spa near me body treatments, and
                            professional care that refreshes your mind,
                            body, and soul.Neck & Shoulder Massage
                            Balinese Massage, Hot Stone Massage,Professional Massage Body spa in Ghaziabad
                        </p>
                    </div>

                    {/* Quick Links */}

                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-black">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">

                            <li>
                                <Link href="/" className=" text-black transition">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" className="hover:text-[#A67D7A] text-black transition">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link href="/services" className="hover:text-[#A67D7A] text-black transition">
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link href="/gallery" className="hover:text-[#A67D7A] text-black transition">
                                    Gallery
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-[#A67D7A] text-black transition">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Services */}

                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-black">
                            Our Services
                        </h3>

                        <ul className="space-y-4 text-black">

                            <li>• Swedish Massage</li>

                            <li>• Deep Tissue Massage</li>

                            <li>• Aroma Therapy</li>

                            <li>• Couple Massage</li>

                            <li>• Moroccan Bath</li>

                            <li>• Body Scrub</li>

                            <li> • Pain Relief Massage  </li>

                            <li> •  Spa Therapy     </li>

                        </ul>
                    </div>

                    {/* Contact */}

                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-black">
                            Contact Us
                        </h3>

                        <div className="space-y-5">

                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-black  size-7 mt-1" />
                                <p className="text-black ">
                                    Shop No. 201, Second Floor, D-30 Building, Opposite Gaur Mall,
                                    <br />
                                    Above Starbucks Rajnagar
                                    <br />
                                    Ghaziabad, Uttar Pradesh 201001
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-black" />
                                <a
                                    href="tel:+91 9152885922"
                                    className="hover:text-[#A67D7A] text-black"
                                >
                                    +91 9152885922

                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-black" />
                                <a
                                    href=" spaplanet.ghaziabad@gmail.com"
                                    className="hover:text-[#A67D7A] text-black"
                                >
                                    spaplanet.ghaziabad@gmail.com
                                </a>
                            </div>

                        </div>

                        {/* Contact Buttons */}

                        <div className="flex flex-wrap gap-4 mt-8">

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919152885986
"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-green-600 hover:bg-[#8E6663] text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                <FaWhatsapp className="text-lg" />
                                <span className="font-medium">WhatsApp</span>
                            </a>

                            {/* Call */}
                            <a
                                href="tel:+91 9152885922
"
                                className="flex items-center gap-2 border border-[#A67D7A] text-[#A67D7A] hover:bg-[#A67D7A] hover:text-white px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105"
                            >
                                <FaPhoneAlt className="text-lg" />
                                <span className="font-medium">Call Now</span>
                            </a>

                        </div>

                        {/* Social Icons */}

                        <div className="flex items-center gap-4 mt-8">

                            <a
                                href="https://www.facebook.com/profile.php?id=61588027945170"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/80 text-[#A67D7A] hover:bg-[#A67D7A] hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.instagram.com/spaplanet.ghaziabad/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/80 text-[#A67D7A] hover:bg-[#A67D7A] hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.youtube.com/@SpaPlanetGhaziabad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/80 text-[#A67D7A] hover:bg-[#A67D7A] hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="https://www.youtube.com/@SpaPlanetGhaziabad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/80 text-[#A67D7A] hover:bg-[#A67D7A] hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://x.com/spaplanetghazi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/80 text-[#A67D7A] hover:bg-[#A67D7A] hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <FaXTwitter />
                            </a>



                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-gray-400 text-center">
                        © {new Date().getFullYear()} Spa Planet. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0">

                        <Link
                            href="/privacy-policy"
                            className="text-gray-400 hover:text-[#A67D7A]"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/privacy-policy"
                            className="text-gray-400 hover:text-[#A67D7A]"
                        >
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>
        </footer>
    );
}