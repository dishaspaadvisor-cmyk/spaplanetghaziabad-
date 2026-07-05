import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export const metadata = {
  title: "Professional Swedish Massage in Ghaziabad | Relax & Rejuvenate",
  description:
    "Looking for the best Swedish massage in Ghaziabad? Experience deep relaxation and stress relief with our expert therapists. Book your session today!",
};

export default function SwedishMassage() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">

        {/* Hero Image */}
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl mb-12">
          <Image
            src="/gallery/services1.png"
            alt="Professional Swedish Massage Therapy in Ghaziabad"
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
              Swedish Massage in Ghaziabad
            </h2>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              Experience complete relaxation with our premium
              <strong> Swedish Massage in Ghaziabad</strong>. Swedish massage is
              one of the world's most popular massage therapies, using long,
              flowing strokes, gentle kneading, circular movements, and light
              pressure to relax muscles and improve blood circulation.
            </p>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              Our experienced therapists customize every session according to
              your body's needs, helping relieve muscle stiffness, reduce
              stress, improve flexibility, and promote overall wellness in a
              calm and luxurious spa environment.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              Whether you're dealing with work-related stress, muscle fatigue,
              or simply looking for a peaceful escape, our Swedish massage
              therapy offers the perfect balance of relaxation and healing.
            </p>

            {/* Benefits */}
            <div className="mt-12">

              <h3 className="text-2xl text-black font-bold mb-6">
                Benefits of Swedish Massage
              </h3>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Relieves Stress & Anxiety
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Improves Blood Circulation
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Reduces Muscle Tension
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Promotes Better Sleep
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Enhances Flexibility
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Improves Overall Wellness
                </div>

              </div>

            </div>

          </div>

          {/* Sidebar */}
          <div>

            <div className="sticky top-24 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-100 p-7">

              <h3 className="text-2xl bg-white text-black font-bold mb-3">
                Book Your Massage
              </h3>

              <p className="text-gray-600 mb-6">
                Enjoy a relaxing Swedish Massage from our certified therapists
                in a peaceful and luxurious spa environment.
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

                <h4 className="font-bold text-black mb-4">
                  Why Choose Spa Planet?
                </h4>

                <ul className="space-y-3 text-gray-700">

                  <li>✔ Certified Massage Therapists</li>

                  <li>✔ Premium Swedish Massage</li>

                  <li>✔ Luxury Private Spa Rooms</li>

                  <li>✔ Clean & Hygienic Environment</li>

                  <li>✔ Affordable Pricing</li>

                  <li>✔ Relaxing & Peaceful Ambience</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}