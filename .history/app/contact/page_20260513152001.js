"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#38BDF8]">
            Contact Us
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0f172a]">
            Let’s Plan Your Next Trip
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            We’re here to help you anytime. Send us a message and we’ll respond quickly.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* Location */}
            <div className="p-6 bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] rounded-2xl text-white shadow-lg">
              <h4 className="text-lg font-semibold text-white">
                Location
              </h4>
              <p className="text-white/90 mt-1">
                123 Travel Street, Lahore, Pakistan
              </p>
            </div>

            {/* Email */}
            <div className="p-6 bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] rounded-2xl text-white shadow-lg">
              <h4 className="text-lg font-semibold text-white">
                Email
              </h4>
              <p className="text-white/90 mt-1">
                support@travelworld.com
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] rounded-2xl text-white shadow-lg">
              <h4 className="text-lg font-semibold text-white">
                Phone
              </h4>
              <p className="text-white/90 mt-1">
                +92 300 1234567
              </p>
            </div>

            {/* WORKING HOURS */}
            <div className="p-6 bg-gradient-to-r from-[#1E3A8A] to-[#38BDF8] rounded-2xl text-white shadow-lg">
              <h4 className="text-lg font-semibold">
                Working Hours
              </h4>
              <p className="mt-1 text-sm opacity-90">
                Mon - Fri: 9:00 AM - 6:00 PM <br />
                Sat - Sun: 10:00 AM - 4:00 PM
              </p>
            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">

            {success && (
              <div className="mb-6 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-green-700 font-medium">
                Your message has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/20 outline-none transition"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/20 outline-none transition"
              />

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/20 outline-none transition"
              />

              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/20 outline-none transition"
              />

              <textarea
                rows="5"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#38BDF8] focus:ring-4 focus:ring-[#38BDF8]/20 outline-none transition resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r cursor-pointer from-[#1E3A8A] to-[#38BDF8] hover:from-[#16306f] hover:to-[#0ea5e9] text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}