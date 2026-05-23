export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] text-sm font-medium border border-[#38BDF8]/20">
            TravelX Policies
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Terms &{" "}
            <span className="text-[#38BDF8]">Conditions</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-8">
            Please read these Terms & Conditions carefully before using
            TravelX services. By accessing our website or booking any
            travel package, you agree to comply with the following terms.
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Last Updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              1. Booking & Payments
            </h2>

            <p className="text-gray-300 leading-8">
              All bookings are subject to availability. Customers must
              provide accurate information during the booking process.
              Payments must be completed within the specified timeframe
              to confirm reservations.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              2. Cancellation Policy
            </h2>

            <p className="text-gray-300 leading-8">
              Cancellation charges may apply depending on the travel
              package, airline, hotel, or service provider policies.
              Refund eligibility will be determined according to the
              cancellation timing and package terms.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              3. Travel Documents
            </h2>

            <p className="text-gray-300 leading-8">
              Travelers are responsible for ensuring they possess valid
              passports, visas, identification documents, and any other
              required travel permits before departure.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              4. Pricing & Availability
            </h2>

            <p className="text-gray-300 leading-8">
              Prices displayed on our website are subject to change
              without prior notice due to airline updates, hotel rates,
              currency fluctuations, or seasonal demand.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              5. Customer Responsibilities
            </h2>

            <p className="text-gray-300 leading-8">
              Customers are expected to follow local laws, airline rules,
              hotel regulations, and travel guidelines during their trip.
              Any misconduct may result in cancellation of services without
              refund.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              6. Liability Disclaimer
            </h2>

            <p className="text-gray-300 leading-8">
              TravelX acts as an intermediary between customers and travel
              service providers. We are not liable for delays, cancellations,
              accidents, weather disruptions, or losses caused by third-party
              providers.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              7. Website Usage
            </h2>

            <p className="text-gray-300 leading-8">
              Users may not misuse this website, attempt unauthorized
              access, distribute harmful content, or engage in fraudulent
              activities while using our services.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              8. Changes to Terms
            </h2>

            <p className="text-gray-300 leading-8">
              We reserve the right to modify these Terms & Conditions
              at any time. Updated terms will be posted on this page.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              Contact Information
            </h2>

            <p className="text-gray-300 leading-8">
              If you have any questions regarding these Terms &
              Conditions, feel free to contact our support team.
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