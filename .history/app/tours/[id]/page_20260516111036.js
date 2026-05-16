import React from "react";
import Link from "next/link";

const packages = [
  {
    id: "dubai-adventure",
    title: "Dubai Adventure",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    desc: "Dubai is famous for luxury lifestyle, Burj Khalifa, and desert safaris.",

    price: "$2000",

    included: [
      "5 Star Hotel",
      "Breakfast",
      "Desert Safari",
    ],

    notIncluded: [
      "Visa",
      "Lunch",
    ],
  },

  {
    id: "maldives-luxury-escape",
    title: "Maldives Luxury Escape",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    desc: "Maldives is known for crystal-clear water and private resorts.",

    price: "$3500",

    included: [
      "Water Villa",
      "Dinner",
      "Airport Pickup",
    ],

    notIncluded: [
      "Flights",
      "Visa",
    ],
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

        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wide text-[#38BDF8] uppercase">
            Exclusive Tour Packages
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#111827]">
            Choose Your Perfect Travel Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {packages.map((pkg, index) => (

            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >

              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">

                <h3 className="text-lg font-bold text-[#111827]">
                  {pkg.title}
                </h3>

                <div className="mt-2">
                  <StarRating />
                </div>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {pkg.desc}
                </p>

                <Link href={`/tours/${pkg.id}`}>
                  <button className="mt-5 w-full bg-[#1E3A8A] cursor-pointer text-white py-2.5 rounded-xl font-semibold hover:bg-[#16306f] transition">
                    View Package
                  </button>
                </Link>

              </div>
            </div>

          ))}

        </div>
      </div>
    </section>
  );
}