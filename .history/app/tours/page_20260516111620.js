import React from "react";
import Link from "next/link";

const packages = [
  {
    id: "dubai-adventure",
    title: "Dubai Adventure",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    desc:
      "Dubai is famous for luxury lifestyle, Burj Khalifa, and desert safaris.",
  },
  {
    id: "maldives-luxury-escape",
    title: "Maldives Luxury Escape",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    desc:
      "Maldives is known for crystal-clear water and private resorts.",
  },
  {
    id: "turkey-cultural-journey",
    title: "Turkey Cultural Journey",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    desc:
      "Turkey connects Asia and Europe with rich history and culture.",
  },
];

export default function TourPackages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {packages.map((pkg, index) => (
        <div key={index} className="shadow-lg rounded-xl overflow-hidden">

          <img
            src={pkg.image}
            alt={pkg.title}
            className="h-56 w-full object-cover"
          />

          <div className="p-4">
            <h2 className="text-xl font-bold">{pkg.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{pkg.desc}</p>

            {/* IMPORTANT FIX */}
            <Link href={`/tours/${pkg.id}`}>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
                View Package
              </button>
            </Link>

          </div>
        </div>
      ))}
    </div>
  );
}