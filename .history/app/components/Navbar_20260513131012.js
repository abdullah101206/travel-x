import Link from "next/link";

const Navbar = () => {
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
  );
};

export default Navbar;