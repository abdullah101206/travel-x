import React from "react";

const packages = [
    {
        id: "dubai-adventure",
        title: "Dubai Adventure",
        image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",

        desc:
            "Dubai is famous for luxury lifestyle, Burj Khalifa, and desert safaris.",
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