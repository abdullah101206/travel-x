import Link from "next/link";
import React from "react";

const packages = [
  {
    title: "Dubai Adventure",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    desc:
      "Dubai is famous for luxury lifestyle, Burj Khalifa, and desert safaris. It is a perfect mix of modern architecture and Arabian culture. Tourists love shopping malls, beaches, and nightlife.",

    packages: [
      {
        name: "City Explorer Package",
        price: "$1200",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details:
          "Perfect for first-time travelers exploring Dubai's city life and culture.",
        activities: ["City Tour", "Dubai Mall", "Abra Ride"],
        included: ["Hotel Stay", "Breakfast", "City Tour"],
        notIncluded: ["Visa", "Flights", "Lunch"],
      },
      {
        name: "Desert Adventure Package",
        price: "$1800",
        duration: "6 Days / 5 Nights",
        hotelType: "4-Star Hotel",
        mealPlan: "Half Board",
        flightIncluded: false,
        details:
          "Experience desert safari, dune bashing, and Arabian culture.",
        activities: ["Dune Bashing", "Camel Ride", "BBQ Dinner"],
        included: ["Hotel", "Breakfast & Dinner", "Safari Tour"],
        notIncluded: ["Visa", "Flights"],
      },
      {
        name: "Luxury VIP Dubai",
        price: "$3000",
        duration: "7 Days / 6 Nights",
        hotelType: "5-Star Luxury Hotel",
        mealPlan: "All Inclusive",
        flightIncluded: false,
        details:
          "Ultra luxury experience with yacht cruise and VIP access.",
        activities: ["Private Yacht", "Burj Khalifa VIP", "Luxury Shopping"],
        included: ["Luxury Hotel", "All Meals", "Transfers"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Maldives Luxury Escape",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    desc:
      "Maldives is known for crystal-clear water, overwater villas, and romantic beaches.",

    packages: [
      {
        name: "Beach Relax Package",
        price: "$1500",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Resort",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Relax on white sandy beaches with ocean views.",
        activities: ["Beach Walk", "Sunset View"],
        included: ["Resort Stay", "Breakfast"],
        notIncluded: ["Flights", "Lunch"],
      },
      {
        name: "Island Explorer Package",
        price: "$2300",
        duration: "6 Days / 5 Nights",
        hotelType: "4-Star Resort",
        mealPlan: "Half Board",
        flightIncluded: false,
        details: "Island hopping and snorkeling adventure.",
        activities: ["Island Hopping", "Snorkeling"],
        included: ["Villa", "Breakfast & Dinner"],
        notIncluded: ["Flights"],
      },
      {
        name: "Luxury Private Villa",
        price: "$4000",
        duration: "7 Days / 6 Nights",
        hotelType: "5-Star Villa",
        mealPlan: "All Inclusive",
        flightIncluded: false,
        details: "Private villa with infinity pool and yacht.",
        activities: ["Private Yacht", "Spa"],
        included: ["Private Villa", "All Meals"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Turkey Cultural Journey",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    desc:
      "Turkey connects Europe and Asia with rich history, mosques, and bazaars.",

    packages: [
      {
        name: "Istanbul Explorer",
        price: "$1100",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Explore Istanbul historical sites and culture.",
        activities: ["Hagia Sophia", "Blue Mosque"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
      {
        name: "Cappadocia Adventure",
        price: "$1800",
        duration: "6 Days / 5 Nights",
        hotelType: "4-Star Cave Hotel",
        mealPlan: "Half Board",
        flightIncluded: false,
        details: "Hot air balloon and fairy chimneys.",
        activities: ["Balloon Ride", "Cave Stay"],
        included: ["Hotel", "Meals"],
        notIncluded: ["Flights"],
      },
      {
        name: "Luxury Turkey Tour",
        price: "$2600",
        duration: "7 Days / 6 Nights",
        hotelType: "5-Star Hotel",
        mealPlan: "All Inclusive",
        flightIncluded: false,
        details: "Premium Istanbul + Antalya tour.",
        activities: ["Private Tour", "Luxury Cruise"],
        included: ["Hotel", "All Meals"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Switzerland Alpine Tour",
    image:
      "https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=1200&q=80",
    desc:
      "Switzerland is famous for Alps, lakes, trains, and scenic views.",

    packages: [
      {
        name: "Alpine City Tour",
        price: "$1600",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Explore Zurich and scenic lakes.",
        activities: ["City Tour", "Lake Visit"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
      {
        name: "Mountain Explorer",
        price: "$2500",
        duration: "6 Days / 5 Nights",
        hotelType: "4-Star Hotel",
        mealPlan: "Half Board",
        flightIncluded: false,
        details: "Swiss Alps train and cable car experience.",
        activities: ["Train Ride", "Cable Car"],
        included: ["Hotel", "Rail Pass"],
        notIncluded: ["Flights"],
      },
      {
        name: "Luxury Alpine Experience",
        price: "$3800",
        duration: "7 Days / 6 Nights",
        hotelType: "5-Star Resort",
        mealPlan: "All Inclusive",
        flightIncluded: false,
        details: "Luxury resorts and private tours.",
        activities: ["Private Tour", "Spa"],
        included: ["Luxury Hotel", "All Meals"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Paris Romantic Getaway",
    image:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1200&q=80",
    desc:
      "Paris is the city of love with Eiffel Tower, museums, and romance.",

    packages: [
      {
        name: "City Highlights",
        price: "$1400",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Eiffel Tower and Paris landmarks.",
        activities: ["Eiffel Tower", "Louvre Museum"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
      {
        name: "Romantic Experience",
        price: "$2200",
        duration: "6 Days / 5 Nights",
        hotelType: "4-Star Hotel",
        mealPlan: "Half Board",
        flightIncluded: false,
        details: "Seine cruise and romantic dinner.",
        activities: ["River Cruise", "Dinner"],
        included: ["Hotel", "Meals"],
        notIncluded: ["Flights"],
      },
      {
        name: "Luxury Paris Package",
        price: "$3500",
        duration: "7 Days / 6 Nights",
        hotelType: "5-Star Hotel",
        mealPlan: "All Inclusive",
        flightIncluded: false,
        details: "Luxury Paris VIP experience.",
        activities: ["Private Tour", "Shopping"],
        included: ["Hotel", "All Meals"],
        notIncluded: ["Visa"],
      },
    ],
  },

  // 👉 Remaining 7 (Thailand, Japan, London, New York, Italy, Bali, Georgia)

  {
    title: "Thailand Island Hopping",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
    desc: "Thailand is famous for beaches, islands, food, and nightlife.",
    packages: [
      {
        name: "Bangkok Explorer",
        price: "$900",
        duration: "4 Days / 3 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "City tour and temples.",
        activities: ["Temple Visit", "City Tour"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
      {
        name: "Island Adventure",
        price: "$1500",
        duration: "5 Days / 4 Nights",
        hotelType: "4-Star Resort",
        mealPlan: "Half Board",
        flightIncluded: false,
        details: "Island hopping experience.",
        activities: ["Island Tour", "Boat Ride"],
        included: ["Hotel", "Meals"],
        notIncluded: ["Flights"],
      },
      {
        name: "Luxury Thailand",
        price: "$2400",
        duration: "6 Days / 5 Nights",
        hotelType: "5-Star Resort",
        mealPlan: "All Inclusive",
        flightIncluded: false,
        details: "Luxury beach resorts.",
        activities: ["Spa", "Private Beach"],
        included: ["Hotel", "All Meals"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Japan Cultural & Tech Tour",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80",
    desc: "Japan blends technology and tradition with Tokyo and Kyoto.",
    packages: [
      {
        name: "Tokyo Explorer",
        price: "$1700",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Tokyo city exploration.",
        activities: ["City Tour", "Shopping"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
      {
        name: "Culture Tour",
        price: "$2600",
        duration: "6 Days / 5 Nights",
        hotelType: "4-Star Hotel",
        mealPlan: "Half Board",
        flightIncluded: false,
        details: "Kyoto temples and Mount Fuji.",
        activities: ["Temple Visit", "Fuji Tour"],
        included: ["Hotel", "Meals"],
        notIncluded: ["Flights"],
      },
      {
        name: "Luxury Japan",
        price: "$4000",
        duration: "7 Days / 6 Nights",
        hotelType: "5-Star Hotel",
        mealPlan: "All Inclusive",
        flightIncluded: false,
        details: "Bullet train luxury experience.",
        activities: ["Bullet Train", "Private Guide"],
        included: ["Hotel", "All Meals"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "London City Explorer",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80",
    desc: "London is a historic modern city with royal culture and landmarks.",
    packages: [
      {
        name: "Basic Tour",
        price: "$1300",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "London sightseeing.",
        activities: ["Big Ben", "London Eye"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
      {
        name: "Heritage Tour",
        price: "$2000",
        duration: "6 Days / 5 Nights",
        hotelType: "4-Star Hotel",
        mealPlan: "Half Board",
        flightIncluded: false,
        details: "Museums and culture.",
        activities: ["Museum Tour", "River Cruise"],
        included: ["Hotel", "Meals"],
        notIncluded: ["Flights"],
      },
      {
        name: "Luxury London",
        price: "$3200",
        duration: "7 Days / 6 Nights",
        hotelType: "5-Star Hotel",
        mealPlan: "All Inclusive",
        flightIncluded: false,
        details: "VIP London experience.",
        activities: ["Private Tour", "Shopping"],
        included: ["Hotel", "All Meals"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "New York Skyline Tour",
    image: "https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&w=1200&q=80",
    desc: "New York is a global city with skyscrapers and entertainment.",
    packages: [
      {
        name: "City Tour",
        price: "$1500",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Manhattan exploration.",
        activities: ["Times Square", "Statue of Liberty"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
      {
        name: "Full Experience",
        price: "$2400",
        duration: "6 Days / 5 Nights",
        hotelType: "4-Star Hotel",
        mealPlan: "Half Board",
        flightIncluded: false,
        details: "Broadway and nightlife.",
        activities: ["Broadway Show", "City Tour"],
        included: ["Hotel", "Meals"],
        notIncluded: ["Flights"],
      },
      {
        name: "Luxury NYC",
        price: "$3800",
        duration: "7 Days / 6 Nights",
        hotelType: "5-Star Hotel",
        mealPlan: "All Inclusive",
        flightIncluded: false,
        details: "Luxury VIP NYC experience.",
        activities: ["Private Tour", "VIP Access"],
        included: ["Hotel", "All Meals"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Italy Heritage Journey",
    image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1200&q=80",
    desc: "Italy is famous for art, history, food, and ancient cities.",
    packages: [
      {
        name: "Rome Tour",
        price: "$1400",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Rome sightseeing.",
        activities: ["Colosseum", "Vatican City"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
      {
        name: "Culture Tour",
        price: "$2200",
        duration: "6 Days / 5 Nights",
        hotelType: "4-Star Hotel",
        mealPlan: "Half Board",
        flightIncluded: false,
        details: "Venice and Florence.",
        activities: ["Canal Ride", "Museums"],
        included: ["Hotel", "Meals"],
        notIncluded: ["Flights"],
      },
      {
        name: "Luxury Italy",
        price: "$3500",
        duration: "7 Days / 6 Nights",
        hotelType: "5-Star Hotel",
        mealPlan: "All Inclusive",
        flightIncluded: false,
        details: "Luxury Italian experience.",
        activities: ["Private Tour", "Wine Tasting"],
        included: ["Hotel", "All Meals"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Bali Beach Paradise",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    desc: "Bali is a tropical paradise with beaches and temples.",
    packages: [
      {
        name: "Relax Package",
        price: "$1000",
        duration: "4 Days / 3 Nights",
        hotelType: "3-Star Resort",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Beach relaxation.",
        activities: ["Beach Walk", "Sunset"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
      {
        name: "Adventure Bali",
        price: "$1700",
        duration: "5 Days / 4 Nights",
        hotelType: "4-Star Resort",
        mealPlan: "Half Board",
        flightIncluded: false,
        details: "Water sports and tours.",
        activities: ["Surfing", "Island Tour"],
        included: ["Hotel", "Meals"],
        notIncluded: ["Flights"],
      },
      {
        name: "Luxury Bali",
        price: "$2800",
        duration: "6 Days / 5 Nights",
        hotelType: "5-Star Villa",
        mealPlan: "All Inclusive",
        flightIncluded: false,
        details: "Private villa luxury stay.",
        activities: ["Spa", "Private Pool"],
        included: ["Villa", "All Meals"],
        notIncluded: ["Visa"],
      },
    ],
  },

  {
    title: "Georgia Budget Adventure",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    desc: "Georgia is a budget-friendly mountain destination.",
    packages: [
      {
        name: "Budget Tour",
        price: "$700",
        duration: "4 Days / 3 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "City sightseeing.",
        activities: ["Old Town", "Cable Car"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
      {
        name: "Mountain Tour",
        price: "$1200",
        duration: "5 Days / 4 Nights",
        hotelType: "4-Star Hotel",
        mealPlan: "Half Board",
        flightIncluded: false,
        details: "Mountain exploration.",
        activities: ["Hiking", "Nature Tour"],
        included: ["Hotel", "Meals"],
        notIncluded: ["Flights"],
      },
      {
        name: "Premium Georgia",
        price: "$1800",
        duration: "6 Days / 5 Nights",
        hotelType: "5-Star Hotel",
        mealPlan: "All Inclusive",
        flightIncluded: false,
        details: "Luxury guided tour.",
        activities: ["Private Guide", "Luxury Stay"],
        included: ["Hotel", "All Meals"],
        notIncluded: ["Visa"],
      },
    ],
  },
];

const packages = [
  {
    title: "Dubai Adventure",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    desc: "",
    price: "$2000",
  },
  {
    title: "Maldives Luxury Escape",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    desc: "",
    price: "$2000",
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