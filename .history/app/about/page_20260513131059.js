// About.jsx
import React from "react";

export default function About() {
  return (
     <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-4">
        
        <div className="w-full lg:w-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] bg-clip-text text-transparent"
          >
            TravelX
          </Link>

          <div className="lg:hidden flex flex-col gap-1 cursor-pointer">
            <span className="w-6 h-0.5 bg-[#111827] rounded-full"></span>
            <span className="w-6 h-0.5 bg-[#111827] rounded-full"></span>
            <span className="w-6 h-0.5 bg-[#111827] rounded-full"></span>
          </div>
        </div>

        <nav className="w-full lg:w-auto mt-6 lg:mt-0">
          <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 text-center">
            {[
              "Home",
              "Tours",
              "About",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase()}`
                  }
                  className="relative text-[#111827] font-medium text-[16px] transition-all duration-300 hover:text-[#38BDF8] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#38BDF8] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 lg:mt-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#1E3A8A] px-6 py-3 text-white font-semibold shadow-md transition-all duration-300 hover:bg-[#38BDF8] hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wide uppercase text-[#38BDF8]">
            About Us
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#111827]">
            Your Trusted Travel Partner
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We help travelers explore the world with comfort, safety, and
            unforgettable experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              {/* Who We Are */}
              <div>
                <h3 className="text-xl font-bold text-[#111827]">
                  Who <span className="text-[#38BDF8]">We Are</span>
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  We are a global travel agency dedicated to crafting seamless
                  and memorable journeys. With years of experience, we connect
                  travelers to the world’s most breathtaking destinations with
                  ease and confidence.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827]">
                  Our <span className="text-[#38BDF8]">Mission</span>
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Our mission is to deliver{" "}
                  <span className="text-[#1E3A8A] font-semibold">
                    exceptional travel experiences
                  </span>{" "}
                  that combine comfort, safety, and adventure. We aim to make
                  travel accessible and enjoyable for everyone, everywhere.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827]">
                  Our <span className="text-[#38BDF8]">Vision</span>
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  We envision becoming a leading global travel brand known for
                  innovation, trust, and unforgettable journeys that inspire
                  people to explore beyond boundaries.
                </p>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
                alt="Travel scenic"
                className="w-full h-72 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-300"
              />
            </div>

            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80"
              alt="Mountains"
              className="w-full h-40 object-cover rounded-2xl shadow-md hover:scale-[1.03] transition duration-300"
            />

            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
              alt="Beach travel"
              className="w-full h-40 object-cover rounded-2xl shadow-md hover:scale-[1.03] transition duration-300"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm">
            <h4 className="text-2xl font-bold text-[#1E3A8A]">10K+</h4>
            <p className="text-gray-600 mt-1">Happy Travelers</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm">
            <h4 className="text-2xl font-bold text-[#1E3A8A]">150+</h4>
            <p className="text-gray-600 mt-1">Destinations</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm">
            <h4 className="text-2xl font-bold text-[#1E3A8A]">500+</h4>
            <p className="text-gray-600 mt-1">Tours Completed</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm">
            <h4 className="text-2xl font-bold text-[#1E3A8A]">4.9</h4>
            <p className="text-gray-600 mt-1">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}