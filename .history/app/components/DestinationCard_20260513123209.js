import Link from "next/link";

const destinations = [
  {
    id: "paris",
    title: "Paris",
    description: "Experience romance, luxury cafes, and iconic landmarks.",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "dubai",
    title: "Dubai",
    description: "Discover luxury shopping and desert adventures.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "maldives",
    title: "Maldives",
    description: "Crystal clear beaches and premium island resorts.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "switzerland",
    title: "Switzerland",
    description: "Snow mountains and unforgettable nature views.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "turkey",
    title: "Turkey",
    description: "Historical beauty and luxury cultural experiences.",
    image:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "bali",
    title: "Bali",
    description: "Relax in tropical paradise and luxury villas.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "italy",
    title: "Italy",
    description: "Explore beautiful streets and rich European culture.",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "tokyo",
    title: "Tokyo",
    description: "Modern technology with traditional Japanese beauty.",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "newyork",
    title: "New York",
    description: "Experience the city that never sleeps.",
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "greece",
    title: "Greece",
    description: "Beautiful islands and Mediterranean luxury.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "thailand",
    title: "Thailand",
    description: "Tropical vacations with affordable luxury.",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "canada",
    title: "Canada",
    description: "Mountains, lakes, and breathtaking adventures.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
  },
];

const DestinationCard = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-[#38BDF8]">
            Popular Destinations
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#111827]">
            Explore Top Travel{" "}
            <span className="bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Discover luxury destinations and unforgettable experiences around the world.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#111827]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

                <Link
<Link href={`/destinations/${item.id}`}>
                  className="mt-6 inline-block w-full rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DestinationCard;