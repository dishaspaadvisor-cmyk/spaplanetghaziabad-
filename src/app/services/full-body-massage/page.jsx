import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export const metadata = {
  title: "Professional Full Body Massage in Ghaziabad | Total Relaxation",
  description:
    "Experience the ultimate Full Body Massage in Ghaziabad. Our skilled therapists help relieve stress, improve circulation, ease muscle tension, and rejuvenate your body. Book your session today!",
};

export default function FullBodyMassage() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">

        {/* Hero Image */}
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl mb-12">
          <Image
            src="/hero/servicesgallery2.png"
            alt="Professional Full Body Massage in Ghaziabad"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 90vw, 1200px"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35"></div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-end">
  
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Content */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Full Body Massage in Ghaziabad
            </h2>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              Escape the stress of everyday life with our professional
              <strong> Full Body Massage in Ghaziabad</strong>. This relaxing
              therapy is designed to release muscle tension, improve blood
              circulation, reduce fatigue, and promote complete physical and
              mental wellness.
            </p>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              Our certified therapists use premium massage oils and personalized
              techniques to target your neck, shoulders, back, arms, legs, and
              feet, leaving your entire body feeling refreshed and energized.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              Whether you need relief from long working hours, body pain,
              fatigue, or simply want to enjoy a luxurious spa experience, our
              Full Body Massage provides the perfect balance of relaxation,
              healing, and rejuvenation.
            </p>

            {/* Benefits */}
            <div className="mt-12">

              <h3 className="text-2xl text-black font-bold mb-6">
                Benefits of Full Body Massage
              </h3>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Relieves Muscle Tension
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Improves Blood Circulation
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Reduces Stress & Anxiety
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Promotes Better Sleep
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Boosts Energy Levels
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Supports Overall Wellness
                </div>

              </div>

            </div>

          </div>

          {/* Sidebar */}
          <div>

            <div className="sticky top-24 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl border border-blue-100 p-7">

              <h3 className="text-2xl font-bold mb-3">
                Book Your Massage
              </h3>

              <p className="text-gray-600 mb-6">
                Enjoy a relaxing Full Body Massage from our experienced
                therapists in a peaceful and luxurious spa environment.
              </p>

              <a
                href="tel:+919152885986"
                className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition mb-4"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href="https://wa.me/919152885986"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>

              <div className="border-t mt-8 pt-6">

                <h4 className="font-bold mb-4">
                  Why Choose Spa Planet?
                </h4>

                <ul className="space-y-3 text-black">
                  <li>✔ Professional Certified Therapists</li>
                  <li>✔ Premium Full Body Massage</li>
                  <li>✔ Luxury Private Spa Rooms</li>
                  <li>✔ Clean & Hygienic Environment</li>
                  <li>✔ Affordable Pricing</li>
                  <li>✔ Calm & Relaxing Ambience</li>
                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}