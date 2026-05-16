const destinations = {
  paris: {
    title: "Paris",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1600&auto=format&fit=crop",
  },
  dubai: {
    title: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
  },
  maldives: {
    title: "Maldives",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
  switzerland: {
    title: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
  },
  turkey: {
    title: "Turkey",
    image:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1600&auto=format&fit=crop",
  },
  bali: {
    title: "Bali",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
  },
  italy: {
    title: "Italy",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1600&auto=format&fit=crop",
  },
  tokyo: {
    title: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
  },
  newyork: {
    title: "New York",
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1600&auto=format&fit=crop",
  },
  greece: {
    title: "Greece",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
  },
  thailand: {
    title: "Thailand",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1600&auto=format&fit=crop",
  },
  canada: {
    title: "Canada",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
  },
};

const packages = [
  {
    title: "7 Days Explorer",
    price: "$699",
    days: "7 Days",
    hotel: "3 Star Hotel",
    transport: "Standard Transport",
    meals: "Breakfast Included",
    guide: "Local Guide",
  },
  {
    title: "14 Days Premium",
    price: "$1299",
    days: "14 Days",
    hotel: "5 Star Hotel",
    transport: "Private Car",
    meals: "All Meals Included",
    guide: "Professional Guide",
  },
  {
    title: "21 Days Luxury",
    price: "$2199",
    days: "21 Days",
    hotel: "Luxury Resort",
    transport: "Luxury Transport",
    meals: "Premium Dining",
    guide: "Personal Guide",
  },
];

export default function Page({ params }) {
  const destination = destinations[params.id];

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Destination Not Found
      </div>
    );
  }

  return (
    <section className="bg-white">
      
      {/* HERO */}
      <div className="relative">
        <img
          src={destination.image}
          className="h-[500px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-5xl font-bold">{destination.title}</h1>
          <p className="mt-4 max-w-xl text-gray-200">
            Explore luxury travel packages with hotels, transport, meals,
            and guided tours included.
          </p>
        </div>
      </div>

      {/* PACKAGES */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        <h2 className="text-center text-4xl font-extrabold text-[#111827]">
          Travel Packages
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl hover:-translate-y-2 transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">{pkg.title}</h3>
                <span className="text-sm bg-sky-50 text-[#38BDF8] px-3 py-1 rounded-full">
                  {pkg.days}
                </span>
              </div>

              <div className="mt-6 space-y-3 text-gray-600">
                <p>🏨 {pkg.hotel}</p>
                <p>🚗 {pkg.transport}</p>
                <p>🍽️ {pkg.meals}</p>
                <p>🧭 {pkg.guide}</p>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <h4 className="text-3xl font-bold text-[#1E3A8A]">
                  {pkg.price}
                </h4>

                <button className="bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] text-white px-6 py-3 rounded-full">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}