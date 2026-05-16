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
];

export default function PackageDetails({ params }) {

  const singlePackage = packages.find(
    (item) => item.id === params.id
  );

  if (!singlePackage) {
    return <h1>Package Not Found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-5">

      <img
        src={singlePackage.image}
        alt={singlePackage.title}
        className="w-full h-[450px] object-cover rounded-xl"
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
        <h3 className="text-green-600 text-xl font-bold">
          Included
        </h3>

        <ul className="list-disc ml-6 mt-2">
          {singlePackage.included.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-red-600 text-xl font-bold">
          Not Included
        </h3>

        <ul className="list-disc ml-6 mt-2">
          {singlePackage.notIncluded.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}