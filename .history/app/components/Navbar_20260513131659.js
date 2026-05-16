"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-4">

        {/* Logo + Hamburger */}
        <div className="w-full lg:w-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] bg-clip-text text-transparent"
          >
            TravelX
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-[#111827] rounded-full"></span>
            <span className="w-6 h-0.5 bg-[#111827] rounded-full"></span>
            <span className="w-6 h-0.5 bg-[#111827] rounded-full"></span>
          </button>
        </div>

        {/* Nav */}
        <nav
          className={`w-full lg:w-auto mt-6 lg:mt-0 ${
            isOpen ? "block" : "hidden lg:block"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 text-center">
            
            {["Home", "Tours", "About", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-[#111827] font-medium hover:text-[#38BDF8]"
                >
                  {item}
                </Link>
              </li>
            ))}

            {/* 👇 ONLY MOBILE: Book Now inside menu */}
            <li className="lg:hidden">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-[#1E3A8A] px-6 py-2 text-white font-semibold shadow-md hover:bg-[#38BDF8]"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>

        {/* 👇 ONLY DESKTOP: Book Now button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#1E3A8A] px-6 py-3 text-white font-semibold shadow-md hover:bg-[#38BDF8] hover:scale-105 transition-all"
          >
            Book Now
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;