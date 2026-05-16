import Link from "next/link";
import React from "react";

const packages = [
  {
    title: "Dubai Adventure",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    desc: "Dubai is a futuristic city where luxury meets tradition. Burj Khalifa, desert safaris, and world-class shopping make it one of the most visited destinations.",

    plans: [
      {
        name: "Basic City Tour",
        price: "$1200",
        details: "Ideal for short stays covering main city attractions and cultural spots.",
        included: ["3-Star Hotel Stay", "Daily Breakfast", "Half-Day City Tour"],
        notIncluded: ["Visa", "Lunch & Dinner", "Desert Safari"],
      },
      {
        name: "Premium Desert Experience",
        price: "$1800",
        details: "Balanced package with city exploration and desert safari adventure.",
        included: ["4-Star Hotel Stay", "Breakfast & Dinner", "Desert Safari", "Burj Khalifa Entry"],
        notIncluded: ["Visa", "Lunch"],
      },
      {
        name: "Luxury VIP Dubai",
        price: "$2800",
        details: "Luxury experience with private transfers and premium services.",
        included: ["5-Star Luxury Hotel", "All Meals Included", "Private Desert Safari", "Luxury Transfers"],
        notIncluded: ["Visa Fees"],
      },
    ],
  },

  {
    title: "Maldives Luxury Escape",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    desc: "Maldives is a paradise of crystal-clear waters, white sand beaches, and overwater villas designed for pure relaxation.",

    plans: [
      {
        name: "Beach Stay Package",
        price: "$1500",
        details: "Relaxing beach vacation for couples and families.",
        included: ["Beach Villa Stay", "Breakfast", "Sunset Beach Access"],
        notIncluded: ["Flights", "Lunch & Dinner"],
      },
      {
        name: "Island Explorer",
        price: "$2300",
        details: "Includes island hopping and water activities.",
        included: ["Overwater Villa", "Breakfast & Dinner", "Island Hopping", "Snorkeling"],
        notIncluded: ["Visa", "Lunch"],
      },
      {
        name: "Luxury Private Villa",
        price: "$3800",
        details: "Private villa experience with full luxury services.",
        included: ["Private Pool Villa", "All Meals", "Private Yacht Tour", "Airport Transfers"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Turkey Cultural Journey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    desc: "Turkey connects Europe and Asia, offering rich Islamic history, bazaars, mosques, and natural beauty.",

    plans: [
      {
        name: "Historic Tour",
        price: "$1100",
        details: "Covers Istanbul’s historical landmarks and bazaars.",
        included: ["3-Star Hotel", "Breakfast", "City Tour"],
        notIncluded: ["Visa", "Lunch & Dinner"],
      },
      {
        name: "Cultural Explorer",
        price: "$1700",
        details: "Includes Cappadocia and hot air balloon experience.",
        included: ["4-Star Hotel", "Breakfast & Dinner", "Cappadocia Tour", "Balloon Ride"],
        notIncluded: ["Visa", "Lunch"],
      },
      {
        name: "Luxury Turkey Package",
        price: "$2500",
        details: "Premium hotels and private guided tours.",
        included: ["5-Star Hotel", "All Meals", "Private Guide", "Luxury Transport"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Switzerland Alpine Tour",
    image: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=1200&q=80",
    desc: "Switzerland is known for snowy mountains, lakes, and scenic train journeys across the Alps.",

    plans: [
      {
        name: "Budget Alps Tour",
        price: "$1600",
        details: "Basic sightseeing of Swiss cities and lakes.",
        included: ["3-Star Hotel", "Breakfast", "City Tours"],
        notIncluded: ["Visa", "Lunch & Dinner"],
      },
      {
        name: "Mountain Explorer",
        price: "$2400",
        details: "Includes mountain train rides and scenic spots.",
        included: ["4-Star Hotel", "Breakfast & Dinner", "Train Pass", "Lake Tours"],
        notIncluded: ["Visa", "Lunch"],
      },
      {
        name: "Luxury Alpine Experience",
        price: "$3600",
        details: "Premium alpine resorts with private tours.",
        included: ["5-Star Resort", "All Meals", "Private Train Cabin", "Guided Tours"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Paris Romantic Getaway",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1200&q=80",
    desc: "Paris is the city of love, fashion, art, and iconic landmarks like the Eiffel Tower.",

    plans: [
      {
        name: "City Highlights",
        price: "$1400",
        details: "Short romantic trip covering major attractions.",
        included: ["3-Star Hotel", "Breakfast", "City Tour"],
        notIncluded: ["Visa", "Lunch & Dinner"],
      },
      {
        name: "Romantic Experience",
        price: "$2100",
        details: "Includes Eiffel Tower dinner and Seine River cruise.",
        included: ["4-Star Hotel", "Breakfast & Dinner", "Eiffel Tower Visit", "River Cruise"],
        notIncluded: ["Visa", "Lunch"],
      },
      {
        name: "Luxury Paris Love Package",
        price: "$3200",
        details: "Premium romantic luxury stay in Paris.",
        included: ["5-Star Hotel", "All Meals", "Private Tours", "Luxury Transport"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Thailand Island Hopping",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
    desc: "Thailand is famous for beaches, islands, nightlife, and street food culture.",

    plans: [
      {
        name: "Budget Explorer",
        price: "$900",
        details: "Affordable travel covering Bangkok highlights.",
        included: ["3-Star Hotel", "Breakfast", "City Tour"],
        notIncluded: ["Visa", "Lunch & Dinner"],
      },
      {
        name: "Island Adventure",
        price: "$1500",
        details: "Includes Phuket and island hopping tours.",
        included: ["4-Star Hotel", "Breakfast & Dinner", "Island Tours", "Boat Ride"],
        notIncluded: ["Visa", "Lunch"],
      },
      {
        name: "Luxury Thailand Experience",
        price: "$2400",
        details: "Luxury resorts with private beach access.",
        included: ["5-Star Resort", "All Meals", "Private Tours", "Spa Access"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Japan Cultural & Tech Tour",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80",
    desc: "Japan combines advanced technology with deep cultural traditions and beautiful cities.",

    plans: [
      {
        name: "Tokyo Explorer",
        price: "$1700",
        details: "Basic Tokyo city exploration and culture.",
        included: ["3-Star Hotel", "Breakfast", "City Tour"],
        notIncluded: ["Visa", "Lunch & Dinner"],
      },
      {
        name: "Culture & Nature",
        price: "$2600",
        details: "Includes Kyoto temples and Mount Fuji visit.",
        included: ["4-Star Hotel", "Breakfast & Dinner", "Kyoto Tour", "Fuji Trip"],
        notIncluded: ["Visa", "Lunch"],
      },
      {
        name: "Luxury Japan Tour",
        price: "$4000",
        details: "Premium bullet train and luxury hotel experience.",
        included: ["5-Star Hotel", "All Meals", "Bullet Train Pass", "Private Guide"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "London City Explorer",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80",
    desc: "London is a historic global city with royal heritage, museums, and modern attractions.",

    plans: [
      {
        name: "City Basics",
        price: "$1300",
        details: "Basic London sightseeing package.",
        included: ["3-Star Hotel", "Breakfast", "City Tour"],
        notIncluded: ["Visa", "Lunch & Dinner"],
      },
      {
        name: "Heritage Tour",
        price: "$2000",
        details: "Includes museums and historical landmarks.",
        included: ["4-Star Hotel", "Breakfast & Dinner", "Museum Pass", "Thames Cruise"],
        notIncluded: ["Visa", "Lunch"],
      },
      {
        name: "Luxury London Experience",
        price: "$3200",
        details: "Premium royal and luxury experience.",
        included: ["5-Star Hotel", "All Meals", "Private Guide", "Luxury Transfers"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "New York Skyline Tour",
    image: "https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&w=1200&q=80",
    desc: "New York is a fast-paced global city known for Times Square, skyscrapers, and culture.",

    plans: [
      {
        name: "City Tour",
        price: "$1500",
        details: "Basic Manhattan sightseeing package.",
        included: ["3-Star Hotel", "Breakfast", "City Tour"],
        notIncluded: ["Visa", "Lunch & Dinner"],
      },
      {
        name: "Full Experience",
        price: "$2400",
        details: "Includes Statue of Liberty and Broadway show.",
        included: ["4-Star Hotel", "Breakfast & Dinner", "Statue Visit", "Broadway Show"],
        notIncluded: ["Visa", "Lunch"],
      },
      {
        name: "Luxury NYC Package",
        price: "$3800",
        details: "Luxury stay with VIP city access.",
        included: ["5-Star Hotel", "All Meals", "VIP Tours", "Private Transport"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Italy Heritage Journey",
    image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1200&q=80",
    desc: "Italy is rich in history, art, architecture, and world-famous cuisine.",

    plans: [
      {
        name: "Rome Explorer",
        price: "$1400",
        details: "Basic Rome sightseeing package.",
        included: ["3-Star Hotel", "Breakfast", "City Tour"],
        notIncluded: ["Visa", "Lunch & Dinner"],
      },
      {
        name: "Cultural Italy",
        price: "$2200",
        details: "Includes Venice and Florence tours.",
        included: ["4-Star Hotel", "Breakfast & Dinner", "City Tours", "Train Pass"],
        notIncluded: ["Visa", "Lunch"],
      },
      {
        name: "Luxury Italy Tour",
        price: "$3500",
        details: "Premium Italy experience with private tours.",
        included: ["5-Star Hotel", "All Meals", "Private Guide", "Luxury Transport"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Bali Beach Paradise",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    desc: "Bali is a tropical paradise with beaches, temples, and natural beauty.",

    plans: [
      {
        name: "Relax Package",
        price: "$1000",
        details: "Basic beach relaxation trip.",
        included: ["3-Star Hotel", "Breakfast", "Beach Access"],
        notIncluded: ["Visa", "Lunch & Dinner"],
      },
      {
        name: "Adventure Bali",
        price: "$1700",
        details: "Includes water sports and island tours.",
        included: ["4-Star Hotel", "Breakfast & Dinner", "Water Sports", "Island Tour"],
        notIncluded: ["Visa", "Lunch"],
      },
      {
        name: "Luxury Bali Stay",
        price: "$2800",
        details: "Private villa with spa and luxury services.",
        included: ["5-Star Villa", "All Meals", "Spa Access", "Private Tours"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Georgia Budget Adventure",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    desc: "Georgia is a budget-friendly destination with mountains, culture, and historic cities.",

    plans: [
      {
        name: "Budget Trip",
        price: "$700",
        details: "Affordable travel with city sightseeing.",
        included: ["3-Star Hotel", "Breakfast", "City Tour"],
        notIncluded: ["Visa", "Lunch & Dinner"],
      },
      {
        name: "Mountain Explorer",
        price: "$1200",
        details: "Includes mountain trips and nature exploration.",
        included: ["4-Star Hotel", "Breakfast & Dinner", "Mountain Tour"],
        notIncluded: ["Visa", "Lunch"],
      },
      {
        name: "Premium Georgia",
        price: "$1800",
        details: "Luxury stay with guided tours.",
        included: ["5-Star Hotel", "All Meals", "Private Guide", "Luxury Transport"],
        notIncluded: ["Visa"],
      },
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