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
        details:
          "Perfect for first-time travelers exploring Dubai’s famous attractions and modern lifestyle.",
        activities: [
          "City Tour",
          "Dubai Mall",
          "Abra Ride",
          "Gold Souk Visit",
        ],
        included: [
          "Hotel Stay",
          "Breakfast",
          "City Tour",
          "Airport Transfer",
        ],
        notIncluded: [
          "Visa",
          "Flights",
          "Personal Expenses",
        ],
      },

      {
        name: "Desert Adventure Package",
        price: "$1900",
        duration: "6 Days / 5 Nights",
        hotelType: "4-Star Hotel",
        mealPlan: "Breakfast & Dinner Included",
        flightIncluded: true,
        details:
          "Experience thrilling desert safari adventures with luxury Dubai nightlife and sightseeing.",
        activities: [
          "Desert Safari",
          "Burj Khalifa Visit",
          "Dhow Cruise Dinner",
          "Quad Bike Ride",
        ],
        included: [
          "Flights",
          "Hotel Stay",
          "Breakfast & Dinner",
          "Desert Safari",
          "Airport Pickup",
        ],
        notIncluded: [
          "Visa",
          "Shopping Expenses",
        ],
      },

      {
        name: "Luxury Dubai Escape",
        price: "$3200",
        duration: "7 Days / 6 Nights",
        hotelType: "5-Star Luxury Resort",
        mealPlan: "All Inclusive",
        flightIncluded: true,
        details:
          "Enjoy a premium Dubai vacation with luxury resorts, private tours, and VIP experiences.",
        activities: [
          "Private Yacht Tour",
          "Palm Jumeirah Visit",
          "Sky Views Observatory",
          "Luxury Shopping Tour",
        ],
        included: [
          "Flights",
          "Luxury Resort Stay",
          "All Meals",
          "Private Transfers",
          "VIP Tours",
        ],
        notIncluded: [
          "Visa",
          "Personal Shopping",
        ],
      },
    ]
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
        hotelType: "3-Star Beach Resort",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details:
          "Perfect package for travelers who want a peaceful beach holiday in Maldives.",
        activities: [
          "Beach Walk",
          "Sunset View",
          "Island Exploration",
          "Swimming",
        ],
        included: [
          "Resort Stay",
          "Breakfast",
          "Airport Transfer",
        ],
        notIncluded: [
          "Flights",
          "Visa",
          "Personal Expenses",
        ],
      },

      {
        name: "Honeymoon Paradise Package",
        price: "$2800",
        duration: "6 Days / 5 Nights",
        hotelType: "4-Star Water Villa",
        mealPlan: "Breakfast & Dinner Included",
        flightIncluded: true,
        details:
          "Romantic honeymoon experience with private villas and candlelight dinners.",
        activities: [
          "Private Dinner",
          "Snorkeling",
          "Spa Session",
          "Couple Photography",
        ],
        included: [
          "Flights",
          "Water Villa Stay",
          "Dinner",
          "Airport Pickup",
        ],
        notIncluded: [
          "Shopping Expenses",
          "Extra Activities",
        ],
      },

      {
        name: "Luxury Island Escape",
        price: "$4500",
        duration: "8 Days / 7 Nights",
        hotelType: "5-Star Luxury Resort",
        mealPlan: "All Inclusive",
        flightIncluded: true,
        details:
          "Ultimate Maldives luxury vacation with private yacht tours and premium resort stay.",
        activities: [
          "Scuba Diving",
          "Private Yacht Tour",
          "Luxury Spa",
          "Jet Ski Ride",
        ],
        included: [
          "Flights",
          "Luxury Resort Stay",
          "All Meals",
          "VIP Transfers",
          "Premium Activities",
        ],
        notIncluded: [
          "Visa",
          "Personal Shopping",
        ],
      },
    ]
  },

  {
    id: "turkey-cultural-journey",
    title: "Turkey Cultural Journey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    desc: "Turkey connects Asia and Europe with rich history.",
    packages: [
      {
        name: "Istanbul Explorer Package",
        price: "$1100",
        duration: "5 Days / 4 Nights",
        hotelType: "3-Star Hotel",
        mealPlan: "Breakfast Included",
        flightIncluded: false,
        details:
          "Explore the cultural beauty of Istanbul with its historic mosques and bazaars.",
        activities: [
          "Hagia Sophia Visit",
          "Blue Mosque Tour",
          "Grand Bazaar Shopping",
          "Bosphorus Cruise",
        ],
        included: [
          "Hotel Stay",
          "Breakfast",
          "City Tour",
          "Airport Transfer",
        ],
        notIncluded: [
          "Flights",
          "Visa",
          "Personal Expenses",
        ],
      },

      {
        name: "Cappadocia Adventure Package",
        price: "$1900",
        duration: "6 Days / 5 Nights",
        hotelType: "4-Star Cave Hotel",
        mealPlan: "Breakfast & Dinner Included",
        flightIncluded: true,
        details:
          "Experience magical hot air balloons and unique landscapes of Cappadocia.",
        activities: [
          "Hot Air Balloon Ride",
          "Valley Hiking",
          "Underground City Tour",
          "Sunset Point Visit",
        ],
        included: [
          "Flights",
          "Cave Hotel Stay",
          "Breakfast & Dinner",
          "Balloon Ride",
        ],
        notIncluded: [
          "Visa",
          "Personal Shopping",
        ],
      },

      {
        name: "Turkey Luxury Highlights Package",
        price: "$3200",
        duration: "7 Days / 6 Nights",
        hotelType: "5-Star Luxury Hotel",
        mealPlan: "All Inclusive",
        flightIncluded: true,
        details:
          "Premium Turkey experience covering Istanbul, Cappadocia, and coastal luxury stays.",
        activities: [
          "Private City Tours",
          "Luxury Bosphorus Cruise",
          "Beach Resort Stay",
          "Cultural Shows",
        ],
        included: [
          "Flights",
          "Luxury Hotels",
          "All Meals",
          "Private Transfers",
          "Guided Tours",
        ],
        notIncluded: [
          "Visa",
          "Personal Expenses",
        ],
      },
    ]
  },

  {
    id: "switzerland-alpine-tour",
    title: "Switzerland Alpine Tour",
    image: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=1200&q=80",
    desc: "Switzerland is famous for snowy mountains and lakes.",
   packages: [
  {
    name: "Swiss Alps Explorer Package",
    price: "$1600",
    duration: "5 Days / 4 Nights",
    hotelType: "3-Star Hotel",
    mealPlan: "Breakfast Included",
    flightIncluded: false,
    details:
      "Explore the breathtaking Swiss Alps with lakes, mountains, and scenic train journeys.",
    activities: [
      "Zurich City Tour",
      "Lake Lucerne Visit",
      "Mount Titlis Excursion",
      "Scenic Train Ride",
    ],
    included: [
      "Hotel Stay",
      "Breakfast",
      "City Tours",
      "Airport Transfer",
    ],
    notIncluded: [
      "Flights",
      "Visa",
      "Personal Expenses",
    ],
  },

  {
    name: "Interlaken Adventure Package",
    price: "$2400",
    duration: "6 Days / 5 Nights",
    hotelType: "4-Star Mountain Resort",
    mealPlan: "Breakfast & Dinner Included",
    flightIncluded: true,
    details:
      "Adventure-filled Switzerland trip with paragliding, waterfalls, and mountain views.",
    activities: [
      "Paragliding in Interlaken",
      "Jungfraujoch Visit",
      "Waterfall Valley Tour",
      "Lake Activities",
    ],
    included: [
      "Flights",
      "Mountain Resort Stay",
      "Breakfast & Dinner",
      "Adventure Activities",
    ],
    notIncluded: [
      "Visa",
      "Shopping Expenses",
    ],
  },

  {
    name: "Luxury Swiss Escape Package",
    price: "$3800",
    duration: "7 Days / 6 Nights",
    hotelType: "5-Star Luxury Hotel",
    mealPlan: "All Inclusive",
    flightIncluded: true,
    details:
      "Premium Swiss experience with luxury stays, private tours, and scenic beauty.",
    activities: [
      "Private Lake Cruise",
      "Luxury Train Journey",
      "Spa & Wellness",
      "Bern Old Town Tour",
    ],
    included: [
      "Flights",
      "Luxury Hotel Stay",
      "All Meals",
      "Private Transfers",
      "VIP Tours",
    ],
    notIncluded: [
      "Visa",
      "Personal Shopping",
    ],
  },
]
  },

  {
    id: "paris-romantic-getaway",
    title: "Paris Romantic Getaway",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1200&q=80",
    desc: "Paris is city of love and Eiffel Tower.",
   packages: [
  {
    name: "Paris City Explorer Package",
    price: "$1400",
    duration: "5 Days / 4 Nights",
    hotelType: "3-Star Hotel",
    mealPlan: "Breakfast Included",
    flightIncluded: false,
    details:
      "Discover the beauty of Paris with its iconic landmarks and charming streets.",
    activities: [
      "Eiffel Tower Visit",
      "Louvre Museum Tour",
      "Seine River Cruise",
      "Montmartre Walk",
    ],
    included: [
      "Hotel Stay",
      "Breakfast",
      "City Tours",
      "Airport Transfer",
    ],
    notIncluded: [
      "Flights",
      "Visa",
      "Personal Expenses",
    ],
  },

  {
    name: "Romantic Paris Honeymoon Package",
    price: "$2600",
    duration: "6 Days / 5 Nights",
    hotelType: "4-Star Hotel",
    mealPlan: "Breakfast & Dinner Included",
    flightIncluded: true,
    details:
      "Perfect romantic getaway for couples in the city of love.",
    activities: [
      "Eiffel Tower Dinner",
      "Disneyland Paris Visit",
      "Wine Tasting",
      "River Cruise at Night",
    ],
    included: [
      "Flights",
      "Hotel Stay",
      "Breakfast & Dinner",
      "Romantic Experiences",
    ],
    notIncluded: [
      "Visa",
      "Shopping Expenses",
    ],
  },

  {
    name: "Luxury Paris Experience Package",
    price: "$4000",
    duration: "7 Days / 6 Nights",
    hotelType: "5-Star Luxury Hotel",
    mealPlan: "All Inclusive",
    flightIncluded: true,
    details:
      "Premium Paris tour with luxury stays, VIP access, and private experiences.",
    activities: [
      "Private Eiffel Tower Tour",
      "Luxury Shopping (Champs-Élysées)",
      "Private Louvre Guide",
      "Helicopter City View",
    ],
    included: [
      "Flights",
      "Luxury Hotel Stay",
      "All Meals",
      "Private Tours",
      "VIP Services",
    ],
    notIncluded: [
      "Visa",
      "Personal Shopping",
    ],
  },
]
  },

  {
    id: "thailand-island-hopping",
    title: "Thailand Island Hopping",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
    desc: "Thailand is famous for islands and beaches.",
   packages: [
  {
    name: "Bangkok City Explorer Package",
    price: "$900",
    duration: "4 Days / 3 Nights",
    hotelType: "3-Star Hotel",
    mealPlan: "Breakfast Included",
    flightIncluded: false,
    details:
      "Explore the vibrant city of Bangkok with temples, markets, and street food culture.",
    activities: [
      "Grand Palace Visit",
      "Floating Market Tour",
      "Temple Visits",
      "City Shopping",
    ],
    included: [
      "Hotel Stay",
      "Breakfast",
      "City Tours",
      "Airport Transfer",
    ],
    notIncluded: [
      "Flights",
      "Visa",
      "Personal Expenses",
    ],
  },

  {
    name: "Phuket Island Adventure Package",
    price: "$1500",
    duration: "5 Days / 4 Nights",
    hotelType: "4-Star Beach Resort",
    mealPlan: "Breakfast & Dinner Included",
    flightIncluded: true,
    details:
      "Enjoy beautiful beaches, island hopping, and water sports in Phuket.",
    activities: [
      "Phi Phi Island Tour",
      "Snorkeling",
      "Beach Party",
      "Speedboat Ride",
    ],
    included: [
      "Flights",
      "Beach Resort Stay",
      "Breakfast & Dinner",
      "Island Tours",
    ],
    notIncluded: [
      "Visa",
      "Personal Shopping",
    ],
  },

  {
    name: "Thailand Luxury Escape Package",
    price: "$2800",
    duration: "6 Days / 5 Nights",
    hotelType: "5-Star Luxury Resort",
    mealPlan: "All Inclusive",
    flightIncluded: true,
    details:
      "Premium Thailand experience with luxury stays, spa, and private island tours.",
    activities: [
      "Private Island Tour",
      "Luxury Spa Treatment",
      "Yacht Party",
      "Cultural Show",
    ],
    included: [
      "Flights",
      "Luxury Resort Stay",
      "All Meals",
      "VIP Transfers",
      "Premium Activities",
    ],
    notIncluded: [
      "Visa",
      "Personal Expenses",
    ],
  },
]
  },

  {
    id: "japan-cultural-tech-tour",
    title: "Japan Cultural & Tech Tour",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80",
    desc: "Japan blends technology and tradition.",
  packages: [
  {
    name: "Tokyo City Explorer Package",
    price: "$1700",
    duration: "5 Days / 4 Nights",
    hotelType: "3-Star Hotel",
    mealPlan: "Breakfast Included",
    flightIncluded: false,
    details:
      "Explore the fast-paced modern life of Tokyo with its unique culture and attractions.",
    activities: [
      "Shibuya Crossing Visit",
      "Tokyo Tower",
      "Asakusa Temple",
      "City Shopping Tour",
    ],
    included: [
      "Hotel Stay",
      "Breakfast",
      "City Tours",
      "Airport Transfer",
    ],
    notIncluded: [
      "Flights",
      "Visa",
      "Personal Expenses",
    ],
  },

  {
    name: "Kyoto Cultural Experience Package",
    price: "$2100",
    duration: "6 Days / 5 Nights",
    hotelType: "4-Star Traditional Ryokan",
    mealPlan: "Breakfast & Dinner Included",
    flightIncluded: true,
    details:
      "Experience Japan’s traditional culture, temples, and beautiful cherry blossoms in Kyoto.",
    activities: [
      "Fushimi Inari Shrine",
      "Arashiyama Bamboo Forest",
      "Kimono Experience",
      "Tea Ceremony",
    ],
    included: [
      "Flights",
      "Ryokan Stay",
      "Breakfast & Dinner",
      "Cultural Tours",
    ],
    notIncluded: [
      "Visa",
      "Personal Shopping",
    ],
  },

  {
    name: "Japan Luxury Highlights Package",
    price: "$3500",
    duration: "7 Days / 6 Nights",
    hotelType: "5-Star Luxury Hotel",
    mealPlan: "All Inclusive",
    flightIncluded: true,
    details:
      "Premium Japan experience covering Tokyo, Kyoto, and Osaka with luxury services.",
    activities: [
      "Mount Fuji Day Trip",
      "Bullet Train Ride",
      "Private City Tours",
      "Universal Studios Japan",
    ],
    included: [
      "Flights",
      "Luxury Hotels",
      "All Meals",
      "Private Transfers",
      "VIP Experiences",
    ],
    notIncluded: [
      "Visa",
      "Personal Expenses",
    ],
  },
]
  },

  {
    id: "london-city-explorer",
    title: "London City Explorer",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80",
    desc: "London is historic and modern city.",
    packages: [
  {
    name: "London City Explorer Package",
    price: "$1300",
    duration: "5 Days / 4 Nights",
    hotelType: "3-Star Hotel",
    mealPlan: "Breakfast Included",
    flightIncluded: false,
    details:
      "Discover London’s iconic landmarks, culture, and historic attractions.",
    activities: [
      "Big Ben Visit",
      "London Eye Ride",
      "Tower Bridge Tour",
      "Buckingham Palace View",
    ],
    included: [
      "Hotel Stay",
      "Breakfast",
      "City Tours",
      "Airport Transfer",
    ],
    notIncluded: [
      "Flights",
      "Visa",
      "Personal Expenses",
    ],
  },

  {
    name: "Royal London Experience Package",
    price: "$2200",
    duration: "6 Days / 5 Nights",
    hotelType: "4-Star Hotel",
    mealPlan: "Breakfast & Dinner Included",
    flightIncluded: true,
    details:
      "Experience royal heritage, museums, and premium sightseeing in London.",
    activities: [
      "Buckingham Palace Tour",
      "Westminster Abbey Visit",
      "Thames River Cruise",
      "British Museum Tour",
    ],
    included: [
      "Flights",
      "Hotel Stay",
      "Breakfast & Dinner",
      "Guided Tours",
    ],
    notIncluded: [
      "Visa",
      "Personal Shopping",
    ],
  },

  {
    name: "Luxury London Escape Package",
    price: "$3800",
    duration: "7 Days / 6 Nights",
    hotelType: "5-Star Luxury Hotel",
    mealPlan: "All Inclusive",
    flightIncluded: true,
    details:
      "Premium London experience with luxury stays, VIP tours, and exclusive shopping.",
    activities: [
      "Private City Tour",
      "Luxury Shopping (Oxford Street)",
      "Helicopter City View",
      "VIP Thames Cruise",
    ],
    included: [
      "Flights",
      "Luxury Hotel Stay",
      "All Meals",
      "Private Transfers",
      "VIP Services",
    ],
    notIncluded: [
      "Visa",
      "Personal Expenses",
    ],
  },
]
  },

  {
    id: "new-york-skyline-tour",
    title: "New York Skyline Tour",
    image: "https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&w=1200&q=80",
    desc: "New York is fast global city.",
    
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

export default async function PackageDetails({ params }) {
  const { id } = await params;

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

          <p className="mt-2">{pkg.details}</p>

          <p className="font-bold text-green-600 mt-2">
            {pkg.price}
          </p>

          <p>{pkg.duration}</p>

          <p>
            <span className="font-semibold">Hotel:</span>{" "}
            {pkg.hotelType}
          </p>

          <p>
            <span className="font-semibold">Meal Plan:</span>{" "}
            {pkg.mealPlan}
          </p>

          <p>
            <span className="font-semibold">Flight Included:</span>{" "}
            {pkg.flightIncluded ? "Yes" : "No"}
          </p>

          <div className="mt-3">
            <h3 className="font-bold">Activities</h3>

            <ul className="list-disc ml-5">
              {pkg.activities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-3">
            <h3 className="font-bold text-green-700">
              Included
            </h3>

            <ul className="list-disc ml-5">
              {pkg.included.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-3">
            <h3 className="font-bold text-red-700">
              Not Included
            </h3>

            <ul className="list-disc ml-5">
              {pkg.notIncluded.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      ))}

    </div>
  );
}