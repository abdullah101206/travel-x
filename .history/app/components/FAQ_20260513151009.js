// FAQ.jsx
import React from "react";

const faqs = [
  {
    question: "How can I book a tour?",
    answer:
      "You can easily book a tour by selecting your desired package and contacting our support team for confirmation and payment instructions.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer refunds based on our cancellation policy. Refund eligibility depends on the time of cancellation before departure.",
  },
  {
    question: "Are flights included in packages?",
    answer:
      "Some packages include flights while others do not. Each tour clearly mentions what is included in the package details.",
  },
  {
    question: "Can I customize my trip?",
    answer:
      "Absolutely! We offer fully customizable travel plans based on your preferences, budget, and travel dates.",
  },
  {
    question: "Is travel insurance included?",
    answer:
      "Travel insurance is optional in most packages, but we highly recommend adding it for a safe and worry-free journey.",
  },

  // Added FAQs
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept multiple payment methods including bank transfer, credit/debit cards, and selected online payment options for your convenience.",
  },
  {
    question: "How early should I book my tour?",
    answer:
      "We recommend booking at least 2–4 weeks in advance to ensure availability and better pricing, especially during peak seasons.",
  },
  {
    question: "Can I get a group discount?",
    answer:
      "Yes, we offer special discounts for group bookings. The discount amount depends on the group size and selected package.",
  },
  {
    question: "Do you provide travel guides?",
    answer:
      "Yes, we provide experienced local guides for most destinations to enhance your travel experience and ensure smooth navigation.",
  },
  {
    question: "What happens if my trip is canceled?",
    answer:
      "If your trip is canceled due to unforeseen circumstances, we will offer either a full refund or an option to reschedule, depending on the situation.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wide uppercase text-[#38BDF8]">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#111827]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Find answers to the most common questions about our travel services
            and booking process.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#38BDF8]/40 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Question */}
              <h3 className="text-lg font-semibold text-[#1E3A8A] flex items-start gap-2">
                <span className="text-[#38BDF8] mt-1">❓</span>
                {item.question}
              </h3>

              {/* Answer */}
              <p className="mt-3 text-gray-600 text-sm leading-relaxed pl-6">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}