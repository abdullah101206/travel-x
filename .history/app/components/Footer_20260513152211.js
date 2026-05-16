
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F172A] text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Travel<span className="text-[#38BDF8]">X</span>
            </h2>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Explore the world with comfort, safety, and unforgettable travel
              experiences.
            </p>

            <div className="flex items-center gap-4 mt-5">
              <a
                href="#"
                className="text-gray-300 hover:text-[#38BDF8] transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.1V12h2.1V9.8c0-2.07 1.23-3.2 3.12-3.2.9 0 1.84.16 1.84.16v2.03h-1.04c-1.03 0-1.35.64-1.35 1.29V12h2.3l-.37 2.9h-1.93v7.05A10 10 0 0022 12z" />
                </svg>
              </a>
              
              <a
                href="#"
                className="text-gray-300 hover:text-[#38BDF8] transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.8 8.5c-.2-1.5-.8-2.6-1.8-3.5-1-.9-2.2-1.4-3.7-1.5C14.5 3.4 12 3.4 12 3.4s-2.5 0-4.3.1c-1.5.1-2.7.6-3.7 1.5-1 .9-1.6 2-1.8 3.5C2 10 2 12 2 12s0 2 .2 3.5c.2 1.5.8 2.6 1.8 3.5 1 .9 2.2 1.4 3.7 1.5 1.8.1 4.3.1 4.3.1s2.5 0 4.3-.1c1.5-.1 2.7-.6 3.7-1.5 1-.9 1.6-2 1.8-3.5.2-1.5.2-3.5.2-3.5s0-2-.2-3.5zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Tours", "About Us", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#38BDF8] transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Popular Destinations
            </h3>
            <ul className="space-y-2 text-sm">
              {["Dubai", "Turkey", "Maldives", "Switzerland", "Hunza"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#38BDF8] transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p> 123 Travel Street, Lahore, Pakistan</p>
              <p> support@travelx.com</p>
              <p> +92 300 1234567</p>
              <p> Mon - Fri: 9AM - 6PM</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 Travel Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#38BDF8] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#38BDF8] transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}