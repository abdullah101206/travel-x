// Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Ayesha Khan",
    location: "Pakistan",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review:
      "An absolutely amazing experience! Everything was perfectly organized from flights to hotels. My trip to Dubai was unforgettable.",
    trip: "Trip to Dubai",
  },
  {
    name: "John Smith",
    location: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review:
      "Highly professional service. The Switzerland tour was beyond expectations with breathtaking views and seamless arrangements.",
    trip: "Trip to Switzerland",
  },
  {
    name: "Maria Garcia",
    location: "Spain",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review:
      "Loved every moment of my Maldives vacation. The team handled everything so smoothly. Truly a luxury experience!",
    trip: "Trip to Maldives",
  },
  {
    name: "Ahmed Ali",
    location: "UAE",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review:
      "Excellent customer support and well-planned itinerary. Turkey tour was full of culture, comfort, and adventure.",
    trip: "Trip to Turkey",
  },
  {
    name: "Emily Johnson",
    location: "USA",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review:
      "From booking to return, everything was flawless. Paris felt magical thanks to their perfect arrangements.",
    trip: "Trip to Paris",
  },
  {
    name: "Hassan Raza",
    location: "Pakistan",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review:
      "Best travel agency experience so far. Thailand island hopping was smooth, fun, and very well managed.",
    trip: "Trip to Thailand",
  },
];

const StarRating = () => {
  return (
    <div className="flex items-center gap-1 text-[#38BDF8]">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.012 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wide uppercase text-[#38BDF8]">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#111827]">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Real feedback from travelers who experienced unforgettable journeys
            with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-[#38BDF8]/40"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#38BDF8]"
                />
                <div>
                  <h3 className="text-[#111827] font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              </div>

              <div className="mt-4">
                <StarRating />
              </div>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                "{item.review}"
              </p>

              <p className="mt-4 text-xs font-semibold text-[#1E3A8A]">
                {item.trip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}