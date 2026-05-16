
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
  href="https://royals-stay-hotel.netlify.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-[#E1306C] transition"
>
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.33 4 20 5.67 20 7.75v8.5C20 18.33 18.33 20 16.25 20h-8.5C5.67 20 4 18.33 4 16.25v-8.5C4 5.67 5.67 4 7.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
  </svg>
</a>
              <a
                href="https://jabai-seven.vercel.app/"
                className="text-gray-300 hover:text-[#1877F2] transition"
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
                href="https://www.cityvetspetclinic.com/"
                className="text-gray-300 hover:text-[#FF0000] transition "
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