// WhyChooseUs.jsx
import React from "react";

const features = [
  {
    title: "Best Price Guarantee",
    description:
      "We offer unbeatable prices on all tour packages with no hidden charges.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 9v1m0-1c-1.11 0-2.08-.402-2.599-1"
        />
      </svg>
    ),
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our travel experts are available anytime to assist you with your journey.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636a9 9 0 11-12.728 0M12 12v6m0 0l-3-3m3 3l3-3"
        />
      </svg>
    ),
  },
  {
    title: "Handpicked Destinations",
    description:
      "We carefully select the most beautiful and trending travel destinations.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h11M9 21V3m8 4l4 4-4 4"
        />
      </svg>
    ),
  },
  {
    title: "Safe & Secure Travel",
    description:
      "Your safety is our priority with trusted partners and verified services.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c0-3.866 3.134-7 7-7v7c0 3.866-3.134 7-7 7s-7-3.134-7-7v-7c3.866 0 7 3.134 7 7z"
        />
      </svg>
    ),
  },
  {
    title: "Luxury Hotel Partnerships",
    description:
      "Stay in premium hotels worldwide with our exclusive hospitality network.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4 9-4V7"
        />
      </svg>
    ),
  },
  {
    title: "Easy Booking Process",
    description:
      "Simple and fast booking experience designed for your convenience.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wide uppercase text-[#38BDF8]">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#111827]">
            We Make Travel Easy & Memorable
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Experience seamless travel planning with trusted service, best
            prices, and unforgettable journeys.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-[#38BDF8] mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#111827]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}