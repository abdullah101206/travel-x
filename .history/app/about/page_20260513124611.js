// About.jsx
import React from "react";

export default function About() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
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

              {/* Mission */}
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

              {/* Vision */}
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

          {/* Right Content (Image Collage) */}
          <div className="relative grid grid-cols-2 gap-4">
            {/* Large Image */}
            <div className="col-span-2">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
                alt="Travel scenic"
                className="w-full h-72 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition duration-300"
              />
            </div>

            {/* Small Images */}
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

        {/* Stats Section */}
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