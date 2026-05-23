export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] text-sm font-medium border border-[#38BDF8]/20">
            TravelX Policies
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Website <span className="text-[#38BDF8]">Disclaimer</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-8">
            The information provided on TravelX is for general informational
            and travel guidance purposes only. By using this website,
            you acknowledge and agree to the terms outlined in this disclaimer.
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
              1. General Information
            </h2>

            <p className="text-gray-300 leading-8">
              All travel information, package details, pricing, schedules,
              and destination content available on this website are provided
              for informational purposes only and may change without notice.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              2. No Guarantee of Accuracy
            </h2>

            <p className="text-gray-300 leading-8">
              While we strive to keep all information accurate and updated,
              TravelX does not guarantee the completeness, reliability,
              or accuracy of any content published on this website.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              3. Third-Party Services
            </h2>

            <p className="text-gray-300 leading-8">
              TravelX may provide access to third-party travel providers,
              airlines, hotels, transportation companies, and external
              websites. We are not responsible for the services,
              policies, or content of these third-party platforms.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              4. Travel Risks
            </h2>

            <p className="text-gray-300 leading-8">
              Travel involves certain risks including delays, cancellations,
              weather conditions, government restrictions, health concerns,
              and unforeseen circumstances. Travelers are responsible for
              making informed decisions before booking or traveling.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              5. Limitation of Liability
            </h2>

            <p className="text-gray-300 leading-8">
              TravelX shall not be held liable for any direct, indirect,
              incidental, or consequential losses, damages, or inconveniences
              arising from the use of this website or travel-related services.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              6. External Links Disclaimer
            </h2>

            <p className="text-gray-300 leading-8">
              Our website may contain links to external websites for additional
              resources or services. We do not control or endorse the content,
              availability, or security practices of those external sites.
            </p>
          </div>

          {/* Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              7. Consent
            </h2>

            <p className="text-gray-300 leading-8">
              By using our website, you hereby consent to this disclaimer
              and agree to its terms and conditions.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
              Contact Us
            </h2>

            <p className="text-gray-300 leading-8">
              If you have any questions regarding this Disclaimer,
              feel free to contact our support team.
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