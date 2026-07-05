import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactCard() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          {/* Left */}
          <div>

            <h2 className="text-3xl md:text-4xl text-gray-700 font-serif mb-6 md:mb-8">
              Contact Information
            </h2>

            <div className="space-y-5 text-gray-700">

              <div className="flex items-start gap-4 leading-7">
                <FaMapMarkerAlt
                  size={22}
                  className="text-[#A67D7A] mt-1 flex-shrink-0"
                />

                <p className="text-sm sm:text-base">
                  Shop No. 201, Second Floor, D-30 Building, Opposite Gaur Mall,
                  Above Starbucks Rajnagar
                  Ghaziabad, Uttar Pradesh 201001
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#A67D7A] flex-shrink-0" />
                <a
                  href="tel:+919152885922"
                  className="hover:text-[#A67D7A] transition"
                >
                  +91 9152885922
                </a>
              </div>

              <div className="flex items-center gap-3 break-all">
                <FaEnvelope className="text-[#A67D7A] flex-shrink-0" />
                <a
                  href="mailto:spaplanet.ghaziabad@gmail.com"
                  className="hover:text-[#A67D7A] transition"
                >
                  spaplanet.ghaziabad@gmail.com
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-1">
                  Working Hours
                </h4>

                <p className="text-sm sm:text-base">
                  Monday - Sunday
                  <br />
                  10:00 AM - 10:00 PM
                </p>
              </div>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="https://www.facebook.com/profile.php?id=61588027945170"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#A67D7A] text-white flex items-center  justify-center hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/spaplanet.ghaziabad/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#A67D7A] text-white flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@SpaPlanetGhaziabad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#A67D7A] text-white flex items-center justify-center hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

            </div>

            {/* Map */}

            <iframe
              className="w-full h-60 sm:h-72 rounded-2xl mt-8"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68938.71087778527!2d77.39364848423199!3d28.640285918810026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf15b0c924b2b%3A0xb37527d60f11fb68!2sSpa%20Planet%20-%20Spa%20In%20Rajnagar%2C%20Ghaziabad!5e1!3m2!1sen!2sin!4v1783171070271!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            />

          </div>

          {/* Right */}

          <div>

            <Image
              src="/hero/servicesgallery2.png"
              alt="Contact"
              width={600}
              height={400}
              className="rounded-2xl mb-8 w-full h-60 sm:h-72 md:h-80 object-cover object-top"
            />

            <h2 className="text-3xl md:text-4xl text-gray-600 font-serif mb-6">
              Ask a Question
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-full text-gray-600 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A67D7A]"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border rounded-full text-gray-600 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A67D7A]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-full text-gray-600 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A67D7A]"
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-full text-gray-600 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A67D7A]"
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="w-full border rounded-2xl text-gray-600 px-5 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#A67D7A]"
              />

              <a
                href="https://wa.me/919152885986?text=Hello%20I%20want%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-full font-medium"
              >
                <FaWhatsapp />
                Send on WhatsApp
              </a>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}