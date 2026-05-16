import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto min-h-[90vh] px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold tracking-wide text-[#38BDF8] shadow-sm">
            Explore The World
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-[#111827]">
            Discover Your{" "}
            <span className="bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] bg-clip-text text-transparent">
              Next Adventure
            </span>{" "}
            With Us
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Book amazing tours, explore beautiful destinations, and
            travel the world with comfort and style.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/tours"
              className="w-full sm:w-auto rounded-full border-2 border-[#1E3A8A] px-8 py-4 text-center text-base font-semibold text-[#1E3A8A] transition-all duration-300 hover:bg-[#1E3A8A] hover:text-white hover:scale-105"
            >
              View Tours
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1E3A8A]">10K+</h3>
              <p className="text-sm text-gray-500">Happy Travelers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1E3A8A]">500+</h3>
              <p className="text-sm text-gray-500">Destinations</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1E3A8A]">4.9★</h3>
              <p className="text-sm text-gray-500">Top Rated</p>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          
          <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-sky-200 blur-3xl opacity-40"></div>

          <div className="relative overflow-hidden rounded-[32px] shadow-2xl border border-white/40 bg-white">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
              alt="Travel Destination"
              className="h-[500px] w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 backdrop-blur-md px-5 py-4 shadow-xl">
              <p className="text-sm font-medium text-gray-500">
                Popular Destination
              </p>

              <h3 className="mt-1 text-xl font-bold text-[#111827]">
                Maldives Beach
              </h3>

              <p className="mt-1 text-sm text-[#38BDF8]">
                Starting from $899
              </p>
            </div>
          </div>

          <div className="absolute -left-4 top-10 hidden sm:flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl border border-gray-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-[#38BDF8] text-xl">
              
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#111827]">
                24/7 Support
              </h4>
              <p className="text-xs text-gray-500">
                Travel with confidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;