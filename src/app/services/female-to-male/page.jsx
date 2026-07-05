import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export const metadata = {
  title: "Professional Female to Male Massage in Ghaziabad | Relaxing Spa Experience",
  description:
    "Experience professional Female to Male massage therapy in Ghaziabad. Our expert female therapists provide a relaxing, hygienic, and stress-relieving environment. Book your session now!",
};

export default function FemaleToMaleMassage() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">

        {/* Hero Image */}
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl mb-12">
          <Image
            src="/gallery/services2.png"
            alt="Professional Female to Male Massage Therapy in Ghaziabad"
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
              Expert Female to Male Massage in Ghaziabad
            </h2>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              If you are looking for a high-quality <strong>Female to Male massage in Ghaziabad</strong>, 
              we provide a professional and serene space designed for your comfort. Our 
              certified female therapists are trained in various techniques to help 
              you alleviate chronic muscle pain, recover from physical fatigue, 
              and de-stress from a hectic lifestyle.
            </p>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              We prioritize hygiene, privacy, and professional etiquette above all 
              else. Every session is conducted in a clean, luxurious, and calming environment 
              to ensure that you feel completely rejuvenated and at ease from the moment 
              you walk in until you leave.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              Our goal is to provide a therapeutic experience that targets specific 
              areas of tension, improves your blood circulation, and enhances your 
              overall sense of well-being.
            </p>

            {/* Benefits */}
            <div className="mt-12">

              <h3 className="text-2xl text-black font-bold mb-6">
                Why Choose Our Therapy Services?
              </h3>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Certified & Experienced Female Therapists
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Deep Tissue & Relaxation Techniques
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Calm & Private Spa Environment
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Strict Hygiene & Sanitization
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Customized Pressure Preferences
                </div>

                <div className="bg-white text-black rounded-xl p-5">
                  ✅ Professional & Respectful Service
                </div>

              </div>

            </div>

          </div>

          {/* Sidebar */}
          <div>

            <div className="sticky top-24 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-100 p-7">

              <h3 className="text-2xl  text-black font-bold mb-3">
                Book Your Session
              </h3>

              <p className="text-gray-600 mb-6">
                Take the first step toward relaxation. Contact us to schedule 
                your appointment with our expert therapists today.
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
                  Spa Planet Commitments
                </h4>

                <ul className="space-y-3 text-gray-700">
                  <li>✔ Verified Staff</li>
                  <li>✔ Modern Spa Facilities</li>
                  <li>✔ Client Privacy Guaranteed</li>
                  <li>✔ Personalized Care</li>
                  <li>✔ Convenient Location</li>
                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}