import Image from "next/image";
import {
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

export const metadata = {
  title: "Authentic Thai Massage in Ghaziabad | Traditional Healing",
  description:
    "Experience the benefits of traditional Thai massage in Ghaziabad. Deep stretching, acupressure, and energy balancing to restore your body. Book your session today!",
};

export default function ThaiMassage() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        
        {/* Hero Image */}
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl mb-10">
          <Image
            src="/gallery/services6.png"
            alt="Traditional Thai Massage Therapy in Ghaziabad"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 90vw, 1200px"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Hero Text */}
          <div className="absolute inset-0 flex items-end">
      
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Content */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Thai Massage in Ghaziabad
            </h2>

            <p className="text-gray-700 text-lg leading-8 mb-6">
              Looking for a revitalizing{" "}
              <strong>Thai Massage in Ghaziabad</strong>? Unlike traditional oil
              massages, Thai massage is a dynamic full-body therapy that
              combines rhythmic compression, assisted yoga stretching, and
              pressure point techniques.
            </p>

            <p className="text-gray-700 text-lg leading-8 mb-6">
              Our experienced therapists use authentic Thai techniques to
              improve flexibility, relieve muscle stiffness, reduce stress, and
              restore your body's natural energy flow.
            </p>

            <p className="text-gray-700 text-lg leading-8">
              Whether you spend long hours at work, exercise regularly, or
              simply want to relax, our Thai massage therapy helps you feel
              refreshed, energized, and completely rejuvenated.
            </p>

            {/* Benefits */}
            <div className="mt-10">
              <h3 className="text-2xl bg-white text-black font-bold mb-6">
                Benefits of Thai Massage
              </h3>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Improves Flexibility
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Relieves Muscle Pain
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Boosts Blood Circulation
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Reduces Stress & Anxiety
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Restores Energy Balance
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Enhances Overall Well-being
                </div>

              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div>

            <div className="sticky top-24 bg-gradient-to-br from-yellow-50 to-white rounded-3xl shadow-xl border p-7">

              <h3 className="text-2xl  text-black font-bold mb-3">
                Book Your Session
              </h3>

              <p className="text-gray-600 mb-6">
                Experience the authentic Thai Massage at Spa Planet and enjoy
                complete relaxation.
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

              <div className="mt-8 border-t pt-6">

                <h4 className="font-bold text-black mb-3">
                  Why Choose Us?
                </h4>

                <ul className="space-y-3 text-gray-700">
                  <li>✔ Certified Thai Therapists</li>
                  <li>✔ Luxury Spa Rooms</li>
                  <li>✔ Clean & Hygienic Environment</li>
                  <li>✔ Affordable Pricing</li>
                  <li>✔ Relaxing Ambience</li>
                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}