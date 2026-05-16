import Link from "next/link";

const destinations = [
  {
    id: "maldives",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    title: "Maldives",
    location: "Luxury Beach Escape",
    price: "$899",
    rating: "4.9",
  },
  {
    id: "paris",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1600&auto=format&fit=crop",
    title: "Paris",
    location: "Romantic City Adventure",
    price: "$699",
    rating: "4.8",
  },
  {
    id: "dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    title: "Dubai",
    location: "Luxury Desert Lifestyle",
    price: "$799",
    rating: "4.7",
  },
  {
    id: "bali",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
    title: "Bali",
    location: "Island Paradise Retreat",
    price: "$599",
    rating: "4.9",
  },
  {
    id: "turkey",
    image:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1600&auto=format&fit=crop",
    title: "Turkey",
    location: "Historical Wonders",
    price: "$649",
    rating: "4.8",
  },
  {
    id: "switzerland",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    title: "Switzerland",
    location: "Mountain Adventure",
    price: "$999",
    rating: "5.0",
  },
  {
    id: "italy",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1600&auto=format&fit=crop",
    title: "Italy",
    location: "Classic European Tour",
    price: "$899",
    rating: "4.9",
  },
  {
    id: "tokyo",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
    title: "Tokyo",
    location: "Modern Japan Experience",
    price: "$950",
    rating: "4.8",
  },
  {
    id: "newyork",
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1600&auto=format&fit=crop",
    title: "New York",
    location: "City Lights Adventure",
    price: "$850",
    rating: "4.7",
  },
  {
    id: "greece",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
    title: "Greece",
    location: "Mediterranean Escape",
    price: "$780",
    rating: "4.9",
  },
  {
    id: "thailand",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1600&auto=format&fit=crop",
    title: "Thailand",
    location: "Tropical Vacation",
    price: "$550",
    rating: "4.8",
  },
  {
    id: "canada",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
    title: "Canada",
    location: "Nature & Mountains",
    price: "$920",
    rating: "4.9",
  },
];

const DestinationCard = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="rounded-full bg-sky-50 border border-sky-200 px-4 py-2 text-sm font-semibold text-[#38BDF8]">
            Popular Destinations
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#111827]">
            Explore Amazing{" "}
            <span className="bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] bg-clip-text text-transparent">
              Travel Places
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Discover the best places around the world with luxury tours and unforgettable experiences.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#111827]">
                    {item.title}
                  </h3>

                  <div className="rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-[#38BDF8]">
                    ⭐ {item.rating}
                  </div>
                </div>

                <p className="mt-4 text-gray-600">
                  {item.location}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Starting From
                    </p>

                    <h4 className="text-2xl font-bold text-[#1E3A8A]">
                      {item.price}
                    </h4>
                  </div>

                  <Link
                    href={`/destinations/${item.id}`}
                    className="rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105"
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