import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export const metadata = {
    title: "Premium Couple Massage in Ghaziabad | Luxury Couple Spa",
    description:
        "Enjoy a relaxing Couple Massage in Ghaziabad at Spa Planet. Experience side-by-side massage therapy with your partner in a luxurious and peaceful spa environment. Book your couple spa session today!",
};

export default function CoupleMassage() {
    return (
        <section className="bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">

                {/* Hero Banner */}
                <div className="relative w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl mb-12">
                    <Image
                        src="/gallery/services7.jpg"
                        alt="Luxury Couple Massage in Ghaziabad"
                        fill
                        priority
                        className="object-cover object-top"
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 90vw, 1200px"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/35"></div>

                    {/* Hero Content */}
                    <div className="absolute inset-0 flex items-end">
                        <div className="p-6 md:p-10 text-white">

                        

                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-10">

                    {/* Left Content */}
                    <div className="lg:col-span-2">

                        <h2 className="text-3xl md:text-4xl text-black font-bold text-gray-900 mb-6">
                            Couple Massage in Ghaziabad
                        </h2>

                        <p className="text-lg leading-8 text-gray-700 mb-6">
                            Enjoy a memorable wellness experience with our
                            <strong> Couple Massage in Ghaziabad</strong>. Designed for
                            couples who want to relax together, our side-by-side massage
                            sessions provide the perfect combination of comfort, tranquility,
                            and rejuvenation in a luxurious spa setting.
                        </p>

                        <p className="text-lg leading-8 text-gray-700 mb-6">
                            Whether you're celebrating an anniversary, birthday, honeymoon,
                            date, or simply spending quality time together, our experienced
                            therapists deliver personalized treatments that help both partners
                            feel refreshed, relaxed, and completely renewed.
                        </p>

                        <p className="text-lg leading-8 text-gray-700">
                            Escape from everyday stress and immerse yourselves in a peaceful
                            spa atmosphere where every detail is designed to create a calming,
                            romantic, and unforgettable experience.
                        </p>

                        {/* Benefits */}
                        <div className="mt-12">

                            <h3 className="text-2xl text-black font-bold mb-6">
                                Benefits of Couple Massage
                            </h3>

                            <div className="grid sm:grid-cols-2 text-black gap-5">

                                <div className="bg-white text-black rounded-xl p-5">
                                    Relax Together
                                </div>

                                <div className="bg-white text-black rounded-xl p-5">
                                    Strengthens Connection
                                </div>

                                <div className="bg-white text-black rounded-xl p-5">
                                    Reduces Stress & Anxiety
                                </div>

                                <div className="bg-white text-black rounded-xl p-5">
                                    Relieves Muscle Tension
                                </div>

                                <div className="bg-white text-black rounded-xl p-5">
                                    Luxury Private Spa Room
                                </div>

                                <div className="bg-white text-black rounded-xl p-5">
                                    Perfect for Special Occasions
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="sticky top-24 bg-white text-black p-7 rounded-2xl shadow-2xl border border-gray-200">

                            <h3 className="text-2xl font-bold mb-3 text-black">
                                Book Your Couple Spa
                            </h3>

                            <p className="text-gray-600 mb-6">
                                Create beautiful memories with a luxurious Couple Massage
                                experience at Spa Planet in Ghaziabad.
                            </p>

                            {/* Call Button */}
                            <a
                                href="tel:+919152885986"
                                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-900 text-black py-4 rounded-xl font-semibold transition mb-4"
                            >
                                <FaPhoneAlt />
                                Call Now
                            </a>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/919152885986"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition"
                            >
                                <FaWhatsapp className="text-xl" />
                                WhatsApp
                            </a>

                            <div className="border-t border-gray-200 mt-8 pt-6">

                                <h4 className="text-xl font-bold text-black mb-4">
                                    Why Choose Spa Planet?
                                </h4>

                                <ul className="space-y-3 text-gray-700">
                                    <li>✔ Premium Couple Spa Rooms</li>
                                    <li>✔ Professional Certified Therapists</li>
                                    <li>✔ Relaxing & Romantic Ambience</li>
                                    <li>✔ Clean & Hygienic Environment</li>
                                    <li>✔ Affordable Couple Packages</li>
                                    <li>✔ Personalized Wellness Experience</li>
                                </ul>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}