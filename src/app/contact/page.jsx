import Image from "next/image";
import ContactCard from "@/components/ContactCard";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[38vh] sm:h-[45vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">

        <Image
          src="/hero/heroimage1.png"
          alt="Contact Us"
          fill
          priority
          quality={100}
          className="object-cover object-top"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <div className="text-center max-w-3xl">

   





          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section className="bg-[#faf8f6] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactCard />
        </div>
      </section>
    </>
  );
}