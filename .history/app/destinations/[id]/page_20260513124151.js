export default function Page({ params }) {
  const id = params?.id;

  const destinations = {
    paris: "Paris",
    dubai: "Dubai",
    maldives: "Maldives",
    switzerland: "Switzerland",
    turkey: "Turkey",
    bali: "Bali",
    italy: "Italy",
    tokyo: "Tokyo",
    newyork: "New York",
    greece: "Greece",
    thailand: "Thailand",
    canada: "Canada",
  };

  const destination = destinations[id];

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold text-red-500">
        Destination Not Found: {id}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-4xl font-bold">
      Welcome to {destination}
    </div>
  );
}