export default function RefundPolicy() {
    return (
        <main className="min-h-screen bg-[#0F172A] text-white">
            {/* Hero Section */}
            <section className="relative py-24 px-6 border-b border-white/10">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="inline-block px-4 py-1 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] text-sm font-medium border border-[#38BDF8]/20">
                        TravelX Policies
                    </span>

                    <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        Return &{" "}
                        <span className="text-[#38BDF8]">Refund Policy</span>
                    </h1>

                    <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-8">
                        At TravelX, we aim to provide a smooth and transparent booking
                        experience. This Refund Policy explains the conditions under
                        which cancellations, returns, and refunds may apply to travel
                        services and packages.
                    </p>

                    <p className="mt-4 text-sm text-gray-400">
                        Last Updated: January 2026
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto space-y-10">
                   
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                        <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
                            1. Booking Cancellations
                        </h2>

                        <p className="text-gray-300 leading-8">
                            Customers may request cancellation of their bookings before
                            the scheduled departure date. Cancellation requests must be
                            submitted through our official support channels.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                        <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
                            2. Refund Eligibility
                        </h2>

                        <p className="text-gray-300 leading-8">
                            Refund eligibility depends on the timing of cancellation,
                            airline policies, hotel policies, and package conditions.
                            Some promotional or discounted packages may be non-refundable.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                        <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
                            3. Processing Time
                        </h2>

                        <p className="text-gray-300 leading-8">
                            Approved refunds are usually processed within 7–14 business
                            days depending on the payment provider, bank, or third-party
                            travel service provider.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                        <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
                            4. Non-Refundable Services
                        </h2>

                        <p className="text-gray-300 leading-8">
                            Certain services including visa fees, travel insurance,
                            processing charges, and special promotional offers may not
                            qualify for refunds once confirmed.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                        <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
                            5. Changes to Bookings
                        </h2>

                        <p className="text-gray-300 leading-8">
                            Booking modifications such as date changes, traveler details,
                            or package upgrades may be subject to additional charges and
                            availability from airlines, hotels, or tour operators.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                        <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
                            6. Travel Disruptions
                        </h2>

                        <p className="text-gray-300 leading-8">
                            Refunds related to weather conditions, natural disasters,
                            government restrictions, airline delays, or unforeseen travel
                            disruptions are subject to the policies of the respective
                            service providers.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                        <h2 className="text-2xl font-semibold text-[#38BDF8] mb-4">
                            7. Contact Our Support Team
                        </h2>

                        <p className="text-gray-300 leading-8">
                            If you have questions regarding cancellations or refund
                            requests, our customer support team is available to assist you.
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