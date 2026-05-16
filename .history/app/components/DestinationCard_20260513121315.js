import Link from "next/link";

const destinations = [
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    title: "Maldives",
    location: "Tropical Paradise Escape",
    price: "$899",
    rating: "4.9",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1600&auto=format&fit=crop",
    title: "Paris",
    location: "Romantic City Experience",
    price: "$699",
    rating: "4.8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    title: "Switzerland",
    location: "Mountain Adventure Tours",
    price: "$999",
    rating: "5.0",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1600&auto=format&fit=crop",
    title: "Dubai",
    location: "Luxury Desert Lifestyle",
    price: "$799",
    rating: "4.7",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    title: "Bali",
    location: "Island Relaxation Retreat",
    price: "$599",
    rating: "4.9",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    title: "Turkey",
    location: "Historical & Cultural Journey",
    price: "$649",
    rating: "4.8",
  },
];

const DestinationCard = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-[#38BDF8] shadow-sm">
            Popular Destinations
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-[#111827]">
            Explore Top Travel{" "}
            <span className="bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover the most beautiful places around the world and
            plan your next unforgettable journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#111827]">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-[#38BDF8]">
                    ⭐ {item.rating}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-7">
                  {item.location}
                </p>

                {/* Bottom Area */}
                <div className="mt-6 flex items-center justify-between gap-4">
                  
                  {/* Price */}
                  <div>
                    <p className="text-sm text-gray-500">
                      From
                    </p>

                    <h4 className="text-2xl font-extrabold text-[#1E3A8A]">
                      {item.price}
                    </h4>
                  </div>

                  {/* Button */}
                  <Link
                    href="/destinations"
                    className="rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:brightness-110"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationCard;