import React from "react";

const packages = [
  {
    id: "dubai-adventure",
    title: "Dubai Adventure",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    desc: "Dubai is famous for luxury lifestyle, Burj Khalifa, and desert safaris.",
    packages: [
      {
        name: "City Explorer Package",
        price: "$1200",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Perfect for first-time travelers exploring Dubai.",
        activities: ["City Tour", "Dubai Mall", "Abra Ride"],
        included: ["Hotel Stay", "Breakfast", "City Tour"],
        notIncluded: ["Visa", "Flights"],
      },
    ],
  },

  {
    id: "maldives-luxury-escape",
    title: "Maldives Luxury Escape",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    desc: "Maldives is known for crystal-clear water and private resorts.",
    packages: [
      {
        name: "Beach Relax Package",
        price: "$1500",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Resort",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Relax on white sandy beaches.",
        activities: ["Beach Walk", "Sunset View"],
        included: ["Resort Stay", "Breakfast"],
        notIncluded: ["Flights"],
      },
    ],
  },

  {
    id: "turkey-cultural-journey",
    title: "Turkey Cultural Journey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    desc: "Turkey connects Asia and Europe with rich history.",
    packages: [
      {
        name: "Istanbul Explorer",
        price: "$1100",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Explore Istanbul culture.",
        activities: ["Hagia Sophia", "Blue Mosque"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
    ],
  },

  {
    id: "switzerland-alpine-tour",
    title: "Switzerland Alpine Tour",
    image: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=1200&q=80",
    desc: "Switzerland is famous for snowy mountains and lakes.",
    packages: [
      {
        name: "Alpine City Tour",
        price: "$1600",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Explore Zurich and lakes.",
        activities: ["City Tour", "Lake Visit"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
    ],
  },

  {
    id: "paris-romantic-getaway",
    title: "Paris Romantic Getaway",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1200&q=80",
    desc: "Paris is city of love and Eiffel Tower.",
    packages: [
      {
        name: "City Highlights",
        price: "$1400",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Eiffel Tower tour.",
        activities: ["Eiffel Tower", "Louvre Museum"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
    ],
  },

  {
    id: "thailand-island-hopping",
    title: "Thailand Island Hopping",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
    desc: "Thailand is famous for islands and beaches.",
    packages: [
      {
        name: "Bangkok Explorer",
        price: "$900",
        duration: "4 Days / 3 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "City temples tour.",
        activities: ["Temple Visit", "City Tour"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
    ],
  },

  {
    id: "japan-cultural-tech-tour",
    title: "Japan Cultural & Tech Tour",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80",
    desc: "Japan blends technology and tradition.",
    packages: [
      {
        name: "Tokyo Explorer",
        price: "$1700",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Tokyo city tour.",
        activities: ["City Tour", "Shopping"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
    ],
  },

  {
    id: "london-city-explorer",
    title: "London City Explorer",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80",
    desc: "London is historic and modern city.",
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
    ],
  },

  {
    id: "new-york-skyline-tour",
    title: "New York Skyline Tour",
    image: "https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&w=1200&q=80",
    desc: "New York is fast global city.",
    packages: [
      {
        name: "City Tour",
        price: "$1500",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details: "Times Square tour.",
        activities: ["Times Square", "Statue of Liberty"],
        included: ["Hotel", "Breakfast"],
        notIncluded: ["Flights"],
      },
    ],
  },

  {
    id: "italy-heritage-journey",
    title: "Italy Heritage Journey",
    image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1200&q=80",
    desc: "Italy is rich in history and food.",
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
    ],
  },

  {
    id: "bali-beach-paradise",
    title: "Bali Beach Paradise",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    desc: "Bali is tropical paradise.",
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
    ],
  },

  {
    id: "georgia-budget-adventure",
    title: "Georgia Budget Adventure",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    desc: "Georgia is budget-friendly destination.",
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
    ],
  },
];

export default function PackageDetails({ params }) {
  const { id } = params;

  const singlePackage = packages.find((item) => item.id === id);

  if (!singlePackage) {
    return (
      <h1 className="text-center text-4xl mt-20">Package Not Found</h1>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-5">

      <img
        src={singlePackage.image}
        className="w-full h-[450px] object-cover rounded-2xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {singlePackage.title}
      </h1>

      <p className="mt-4 text-gray-600">{singlePackage.desc}</p>

      {singlePackage.packages.map((pkg, i) => (
        <div key={i} className="mt-6 border p-4 rounded-xl">

          <h2 className="text-xl font-bold">{pkg.name}</h2>
          <p>{pkg.details}</p>
          <p className="font-bold text-green-600">{pkg.price}</p>
          <p>{pkg.duration}</p>

        </div>
      ))}

    </div>
  );
}