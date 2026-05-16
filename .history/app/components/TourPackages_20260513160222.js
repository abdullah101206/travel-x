import React from "react";

const packages = [
  {
    title: "Dubai Adventure",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    desc: "Dubai is famous for luxury lifestyle, Burj Khalifa, and desert safaris. It is a perfect mix of modern architecture and Arabian culture. Tourists love shopping malls, beaches, and nightlife.",
  },
  {
    title: "Maldives Luxury Escape",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    desc: "Maldives is known for crystal-clear water, private resorts, and romantic overwater villas. It is a top honeymoon destination. Peaceful beaches make it a luxury escape.",
  },
  {
    title: "Turkey Cultural Journey",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    desc: "Turkey connects Asia and Europe with rich history and culture. Istanbul offers mosques, bazaars, and historic sites. It is famous for food, heritage, and scenic views.",
  },
  {
    title: "Switzerland Alpine Tour",
    image:
      "https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=1200&q=80",
    desc: "Switzerland is famous for snowy mountains, lakes, and scenic train journeys. It is a peaceful and luxury travel destination. Perfect for nature lovers and adventure seekers.",
  },
  {
    title: "Paris Romantic Getaway",
    image:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1200&q=80",
    desc: "Paris is known as the city of love with Eiffel Tower and art museums. It offers romantic streets and cafes. It is a dream destination for couples and tourists.",
  },
  {
    title: "Thailand Island Hopping",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
    desc: "Thailand is famous for islands, beaches, and street food culture. It is budget-friendly and full of adventure. Night markets and temples attract millions of tourists.",
  },
  {
    title: "Japan Cultural & Tech Tour",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80",
    desc: "Japan blends advanced technology with deep tradition. Tokyo and Kyoto are top tourist cities. Cherry blossoms and culture make it highly popular worldwide.",
  },
  {
    title: "London City Explorer",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80",
    desc: "London is a historic and modern city with famous landmarks like Big Ben. It is a global business and tourism hub. Rich culture and museums attract visitors.",
  },
  {
    title: "New York Skyline Tour",
    image:
      "https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&w=1200&q=80",
    desc: "New York is known for skyscrapers, Times Square, and Statue of Liberty. It is a fast-moving global city. Shopping, nightlife, and culture make it iconic.",
  },
  {
    title: "Italy Heritage Journey",
    image:
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1200&q=80",
    desc: "Italy is rich in history, art, and architecture. Rome, Venice, and Florence are top attractions. It is famous for food, culture, and ancient heritage.",
  },
  {
    title: "Bali Beach Paradise",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    desc: "Bali is a tropical paradise with beaches, temples, and rice terraces. It is popular for honeymoon and relaxation. Affordable luxury makes it very attractive.",
  },
  {
    title: "Georgia Budget Adventure",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    desc: "Georgia is a budget-friendly destination with mountains and old cities. It is visa-friendly for many travelers. Food, culture, and nature attract tourists.",
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
        </div>

        {/* Grid */}
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

              {/* Content */}
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
                <button className="mt-5 w-full bg-[#1E3A8A] cursor-pointer text-white py-2.5 rounded-xl font-semibold hover:bg-[#16306f] transition">
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