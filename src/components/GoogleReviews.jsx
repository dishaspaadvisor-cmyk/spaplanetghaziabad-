"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = 
[
  {
    id: 1,
    name: "Anjali Sharma",
    text: "Absolutely heavenly experience! The best spa in Ghaziabad. The massage was perfect and truly rejuvenating.",
    rating: 5,
  },
  {
    id: 2,
    name: "Vikram Singh",
    text: "Very professional staff and a highly relaxing atmosphere. One of the cleanest spas I have visited in Ghaziabad.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Malhotra",
    text: "Best facial I have ever had! The staff here is so skilled and attentive. Highly recommend this place.",
    rating: 5,
  },
  {
    id: 4,
    name: "Rohan Gupta",
    text: "A hidden gem in Ghaziabad. Great ambiance and very peaceful. Will definitely return for another session.",
    rating: 4,
  },
  {
    id: 5,
    name: "Sneha Reddy",
    text: "So peaceful and clean. My go-to spot for unwinding after a long week in the city. Excellent service.",
    rating: 5,
  },
  {
    id: 6,
    name: "Amit Verma",
    text: "Great service and very friendly staff. Loved the relaxing vibe here. Highly recommended for everyone in Ghaziabad.",
    rating: 5,
  },
  {
    id: 7,
    name: "Meera Kapoor",
    text: "The aromatherapy massage was incredible. This is by far the best spa experience I've had in Ghaziabad.",
    rating: 5,
  },
  {
    id: 8,
    name: "Sandeep Yadav",
    text: "Fantastic service and very hygienic. The team is very professional and makes you feel comfortable instantly.",
    rating: 5,
  },
  {
    id: 9,
    name: "Kavita Singh",
    text: "Such a relaxing retreat right here in Ghaziabad. I loved the treatments and the overall hospitality.",
    rating: 5,
  },
];

export default function GoogleReviews() {
  return (
    <section className="py-20 bg-[#faf8f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-100 text-amber-600 px-5 py-2 rounded-full text-sm font-semibold tracking-wider">
            GOOGLE REVIEWS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Read genuine reviews from our valued guests who have experienced
            relaxation, wellness, and luxury at our spa.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-7 h-[290px] flex flex-col justify-between hover:shadow-2xl transition duration-300">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google"
                    width={28}
                    height={28}
                  />

                  <div className="text-yellow-400 text-lg tracking-wide">
                    {"★".repeat(review.rating)}
                  </div>
                </div>

                {/* Review */}
                <p className="text-gray-600 italic leading-7">
                  "{review.text}"
                </p>

                {/* User */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      Verified Google Review
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}