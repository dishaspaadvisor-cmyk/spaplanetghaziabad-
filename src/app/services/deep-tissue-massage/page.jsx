import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export const metadata = {
  title: "Deep Tissue Massage in Ghaziabad | Chronic Pain & Tension Relief",
  description:
    "Experience professional Deep Tissue Massage in Ghaziabad at Spa Planet. Our expert therapists help relieve chronic muscle pain, stiffness, improve flexibility, and support faster recovery.",
};

export default function DeepTissueMassage() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">

        {/* Hero Image */}
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl mb-12">
          <Image
            src="/gallery/services10.png"
            alt="Deep Tissue Massage Therapy in Ghaziabad"
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

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Deep Tissue Massage in Ghaziabad
            </h2>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              Our <strong>Deep Tissue Massage in Ghaziabad</strong> is designed
              for people experiencing chronic muscle pain, stiffness, poor
              posture, sports injuries, or long hours of desk work. This therapy
              targets the deeper layers of muscles and connective tissues using
              slow, firm pressure and specialized massage techniques.
            </p>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              Our experienced therapists focus on relieving muscle knots,
              improving blood circulation, reducing inflammation, and increasing
              flexibility. Every session is personalized according to your body
              condition and wellness goals.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              Whether you're recovering from physical activity, managing
              long-term muscle tension, or simply looking for a therapeutic
              massage, our Deep Tissue Massage provides lasting relief and total
              body relaxation.
            </p>

            {/* Benefits */}
            <div className="mt-12">

              <h3 className="text-2xl text-black font-bold mb-6">
                Benefits of Deep Tissue Massage
              </h3>

              <div className="grid sm:grid-cols-2 gap-5">

                <div className="bg-white rounded-xl text-black p-5">
                  ✅ Relieves Chronic Muscle Pain
                </div>

                <div className="bg-white rounded-xl text-black p-5">
                  ✅ Reduces Muscle Stiffness
                </div>

                <div className="bg-white rounded-xl text-black p-5">
                  ✅ Improves Blood Circulation
                </div>

                <div className="bg-white rounded-xl text-black p-5">
                  ✅ Enhances Flexibility
                </div>

                <div className="bg-white rounded-xl text-black p-5">
                  ✅ Speeds Up Muscle Recovery
                </div>

                <div className="bg-white rounded-xl text-black p-5">
                  ✅ Reduces Stress & Improves Mobility
                </div>

              </div>

            </div>

          </div>

          {/* Sidebar */}
          <div>

            <div className="sticky top-24 bg-gradient-to- p-7">

              <h3 className="text-2xl text-black font-bold mb-3">
                Book Your Session
              </h3>

              <p className="text-black mb-6">
                Experience targeted muscle relief and complete relaxation with
                our professional Deep Tissue Massage in Ghaziabad.
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

                <h4 className=" text-black font-bold mb-4">
                  Why Choose Spa Planet?
                </h4>

                <ul className="space-y-3 text-gray-700">
                  <li>✔ Certified Deep Tissue Therapists</li>
                  <li>✔ Personalized Treatment Plans</li>
                  <li>✔ Luxury Private Therapy Rooms</li>
                  <li>✔ Clean & Hygienic Environment</li>
                  <li>✔ Affordable Pricing</li>
                  <li>✔ Relaxing Spa Ambience</li>
                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}