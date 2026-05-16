
import React from "react";

const packages = [
  {
    title: "7 Days Dubai Adventure",
    duration: "5 Days / 4 Nights",
    price: "$799",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Maldives Luxury Escape",
    duration: "6 Days / 5 Nights",
    price: "$1,299",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Turkey Cultural Journey",
    duration: "8 Days / 7 Nights",
    price: "$999",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Switzerland Alpine Tour",
    duration: "6 Days / 5 Nights",
    price: "$1,499",
    image:
      "https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Paris Romantic Getaway",
    duration: "4 Days / 3 Nights",
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Thailand Island Hopping",
    duration: "7 Days / 6 Nights",
    price: "$1,050",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
  },
];

const StarRating = () => (
  <div className="flex items-center gap-1 text-sky-400">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.54.749 2.26l-4.117 3.357 1.257 5.273c.27 1.136-.964 2.033-1.96 1.425L12 18.354l-4.627 2.614c-.996.608-2.23-.289-1.96-1.425l1.257-5.273-4.117-3.357c-.887-.72-.415-2.167.749-2.26l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    ))}
  </div>
);

export default function TourPackages() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wide text-[#38BDF8] uppercase">
            Exclusive Tour Packages
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#111827]">
            Choose Your Perfect Travel Experience
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Explore hand-picked tour packages designed for comfort, adventure,
            and unforgettable memories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 text-[#1E3A8A] text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {pkg.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#111827]">
                  {pkg.title}
                </h3>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-[#38BDF8] font-bold text-lg">
                    From {pkg.price}
                  </span>
                  <StarRating />
                </div>

                {/* Features */}
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  <li>✔ Hotel</li>
                  <li>✔ Transport</li>
                  <li>✔ Breakfast</li>
                  <li>✔ Professional Guide</li>
                </ul>

                <button className="mt-5 w-full bg-[#1E3A8A] text-white py-2.5 rounded-xl font-semibold hover:bg-[#16306f] transition">
                  View Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}