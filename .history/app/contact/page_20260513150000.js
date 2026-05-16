"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wide uppercase text-[#38BDF8]">
            Contact Us
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#111827]">
            Get In Touch With Us
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Have questions or need help planning your next trip?
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-6">
            <div className="p-5 bg-white rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-[#111827]">
                Location
              </h4>
              <p className="text-gray-600 mt-1">
                123 Travel Street, Lahore, Pakistan
              </p>
            </div>
            <div className="p-5 bg-white rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-[#111827]">
                Email
              </h4>
              <p className="text-gray-600 mt-1">
                support@travelworld.com
              </p>
            </div>
            <div className="p-5 bg-white rounded-2xl shadow-sm">
              <h4 className="text-lg font-semibold text-[#111827]">
                Phone
              </h4>
              <p className="text-gray-600 mt-1">
                +92 300 1234567
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            {success && (
              <div className="mb-5 rounded-xl bg-green-100 border border-green-300 px-4 py-3 text-green-700 font-medium">
                Your message has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/30 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/30 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/30 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/30 outline-none transition resize-none"                >
                </textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1E3A8A] hover:bg-[#16306f] text-white font-semibold py-3 rounded-xl transition">
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}