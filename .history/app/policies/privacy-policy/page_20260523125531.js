export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] text-sm font-medium border border-[#38BDF8]/20">
            TravelX Policies
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Privacy <span className="text-[#38BDF8]">Policy</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-8">
            Your privacy matters to us. This Privacy Policy explains how
            TravelX collects, uses, and protects your personal information
            when you use our website and travel services.
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Last Updated: January 2026
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              1. Information We Collect
            </h2>

            <p className="text-gray-300 leading-8">
              We may collect personal information including your name,
              email address, phone number, billing details, and travel
              preferences when you contact us or book a travel package.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              2. How We Use Your Information
            </h2>

            <p className="text-gray-300 leading-8">
              Your information is used to process bookings, provide customer
              support, improve our services, and send important travel updates
              related to your reservations.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              3. Data Protection
            </h2>

            <p className="text-gray-300 leading-8">
              We implement industry-standard security measures to protect
              your personal data against unauthorized access, misuse,
              or disclosure.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              4. Cookies & Tracking
            </h2>

            <p className="text-gray-300 leading-8">
              Our website may use cookies and analytics tools to enhance
              your browsing experience and analyze website traffic for
              performance improvements.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              5. Third-Party Services
            </h2>

            <p className="text-gray-300 leading-8">
              We may work with trusted third-party providers such as payment
              gateways, airlines, and hotels to deliver travel services.
              These providers may have their own privacy practices.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              6. Your Rights
            </h2>

            <p className="text-gray-300 leading-8">
              You may request access, correction, or deletion of your
              personal data by contacting our support team at any time.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              7. Contact Us
            </h2>

            <p className="text-gray-300 leading-8">
              If you have any questions regarding this Privacy Policy,
              feel free to contact us.
            </p>

            <div className="mt-6 space-y-3 text-gray-300">
              <p>Email: support@travelx.com</p>
              <p>Phone: +92 300 1234567</p>
              <p>Address: 123 Travel Street, Lahore, Pakistan</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}