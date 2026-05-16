import React from "react";

const packages = [
  {
    id: "dubai-adventure",
    title: "Dubai Adventure",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",

    desc:
      "Dubai is famous for luxury lifestyle, Burj Khalifa, and desert safaris.",

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

    desc:
      "Maldives is known for crystal-clear water and private resorts.",

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

export default async function PackageDetails({ params }) {

  const { id } = await params;

  const singlePackage = packages.find(
    (item) => item.id === id
  );

  if (!singlePackage) {
    return (
      <h1 className="text-center text-4xl mt-20">
        Package Not Found
      </h1>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-5">

      <img
        src={singlePackage.image}
        alt={singlePackage.title}
        className="w-full h-[450px] object-cover rounded-2xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {singlePackage.title}
      </h1>

      <p className="mt-4 text-gray-600">
        {singlePackage.desc}
      </p>

      <h2 className="text-2xl font-bold mt-6 text-blue-900">
        Price: {singlePackage.price}
      </h2>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-green-600">
          Included
        </h3>

        <ul className="list-disc ml-6 mt-3">
          {singlePackage.included.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-red-600">
          Not Included
        </h3>

        <ul className="list-disc ml-6 mt-3">
          {singlePackage.notIncluded.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}