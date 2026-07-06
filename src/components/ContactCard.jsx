"use client";
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
import { useState } from "react";

export default function ContactCard() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // URL validation
    const urlRegex = /(https?:\/\/|www\.|<|>)/i;

    if (urlRegex.test(formData.address)) {
      alert("Address should not contain URLs or HTML.");
      return;
    }

    if (urlRegex.test(formData.notes)) {
      alert("Notes should not contain URLs or HTML.");
      return;
    }

    // Address validation
    const addressRegex = /^[A-Za-z0-9\s,.-]{3,100}$/;

    if (!addressRegex.test(formData.address)) {
      alert(
        "Address can contain only letters, numbers, spaces, commas, periods and hyphens."
      );
      return;
    }


    setLoading(true);

    try {
      const response = await fetch(
        "https://apibackend.mastercall.in/api/v1/web-leads/submit/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            form_key: "frm_spa_planet_gaziabad_640035",
            name: formData.name,
            phone: formData.phone,
            address: formData.address,
            notes: formData.notes,
            submitted_from_url: window.location.href,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Thank you! Your enquiry has been submitted.");

        setFormData({
          name: "",
          phone: "",
          address: "",
          notes: "",
        });
      } else {
        alert(data.message || "Submission failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

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
              Booking
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border rounded-full text-gray-600 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A67D7A]"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 10);

                    setFormData({
                      ...formData,
                      phone: value,
                    });
                  }}
                  placeholder="Phone"
                  maxLength={10}
                  inputMode="numeric"
                  className="w-full border rounded-full text-gray-600 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A67D7A]"
                  required
                />

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={(e) => {
                    const value = e.target.value;

                    // Prevent URLs and angle brackets
                    if (/(https?:\/\/|www\.|<|>)/i.test(value)) return;

                    setFormData({
                      ...formData,
                      address: value,
                    });
                  }}
                  placeholder="Your Area, City"
                  className="w-full border rounded-full text-gray-600 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A67D7A]"
                />
              </div>

              <input
                type="text"
                name="notes"
                value={formData.notes}
                onChange={(e) => {
                  const value = e.target.value;

                  if (/(https?:\/\/|www\.|<|>)/i.test(value)) return;

                  setFormData({
                    ...formData,
                    notes: value,
                  });
                }}
                placeholder="Notes"
                className="w-full border rounded-full text-gray-600 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#A67D7A]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#A67D7A] hover:bg-[#8f6865] text-white py-3 rounded-full font-medium transition duration-300 disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}