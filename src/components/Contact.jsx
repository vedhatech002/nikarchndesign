// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import contactHeroImg from "../assets/contact_hero.jpg"; // Replace with your stock image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Project Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    // open Gmail in a new tab instead of same tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=theactiondesigns@gmail.com&su=${subject}&body=${body}`;

    // open Gmail compose in a new tab
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-black text-silver-300 font-serif">
      {/* --- Hero Section with Image --- */}
      <div className="relative h-[95vh] overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={contactHeroImg}
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-90" // slightly reduced brightness
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />

        {/* Overlay Gradient + Opacity Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/20" />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <motion.h1
            className="text-2xl md:text-4xl font-semibold text-silver-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Let’s Start a Conversation
          </motion.h1>
          <motion.p
            className="text-silver-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            We believe every great project begins with a meaningful discussion.
            Reach out — we’d love to collaborate and bring your vision to life.
          </motion.p>
        </div>
      </div>

      <div
        id="project-form"
        className="bg-gradient-to-b from-black via-black/80 to-gray-900 py-20 px-6 lg:px-20"
      >
        <div className="mx-auto">
          <div className="mb-14">
            <h4 className="uppercase tracking-[0.3em] text-silver-400/70 text-sm mb-3">
              Start Project
            </h4>
            <h2 className="text-2xl md:text-4xl font-semibold text-silver-100 leading-tight">
              Tell Us About Your Vision
            </h2>
          </div>

          <form
            onSubmit={handleSubmit} // 🔥 this is where you call handleSubmit
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="bg-transparent border-b border-silver-400/40 focus:border-white outline-none py-3 text-silver-100"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
              className="bg-transparent border-b border-silver-400/40 focus:border-white outline-none py-3 text-silver-100"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              className="bg-transparent border-b border-silver-400/40 focus:border-white outline-none py-3 text-silver-100 md:col-span-2"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              onChange={handleChange}
              required
              className="bg-transparent border-b border-silver-400/40 focus:border-white outline-none py-3 text-silver-100 md:col-span-2"
            ></textarea>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-white text-black px-10 py-3 rounded-md hover:bg-gray-800 hover:text-white transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* --- Contact Info (moved below form) --- */}
      <div className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="mb-14">
          <h4 className="uppercase tracking-[0.3em] text-silver-400/70 text-sm mb-3">
            Contact
          </h4>
          <h2 className="text-2xl md:text-4xl font-semibold text-silver-100 leading-tight">
            Let’s Collaborate
          </h2>
        </div>

        {/* --- 4 Column Layout --- */}
        <div className="grid md:grid-cols-4 gap-14 border-t border-silver-400/10 pt-10">
          {/* --- Office --- */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-silver-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <h4 className="text-sm uppercase text-silver-400 tracking-[0.2em]">
                Office
              </h4>
            </div>
            <p className="text-silver-100 leading-relaxed">
              Top Floor, Cub Bank, <br />
              Maruthi Nagar, <br />
              Tiruchirappalli - 620002
            </p>
          </div>

          {/* --- Email --- */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-silver-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h4 className="text-sm uppercase text-silver-400 tracking-[0.2em]">
                Email Us
              </h4>
            </div>
            <p className="text-silver-100 text-base hover:text-silver-300 transition-colors duration-300">
              theactiondesigns@gmail.com
            </p>
          </div>

          {/* --- Call Us --- */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-silver-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 8.5A16 16 0 0015.5 22l3.54-3.54a2 2 0 00-.46-3.23l-3.15-1.26a1 1 0 00-1.12.22l-1.67 1.67a13 13 0 01-5.78-5.78l1.67-1.67a1 1 0 00.22-1.12L8.77 3.92a2 2 0 00-3.23-.46L2 7.5z"
                />
              </svg>
              <h4 className="text-sm uppercase text-silver-400 tracking-[0.2em]">
                Call Us
              </h4>
            </div>
            <p className="text-silver-100 text-base hover:text-silver-300 transition-colors duration-300">
              +91 9843758669
            </p>
          </div>

          {/* --- Socials --- */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-silver-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4h16v16H4z"
                />
              </svg>
              <h4 className="text-sm uppercase text-silver-400 tracking-[0.2em]">
                Socials
              </h4>
            </div>
            <div className="flex items-center gap-5 text-silver-300">
              {/* Instagram */}
              <a
                href="#"
                className="hover:text-white transition-transform transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <circle cx="17.5" cy="6.5" r="0.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="hover:text-white transition-transform transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="hover:text-white transition-transform transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Map --- */}
      <div className="relative w-full h-[400px]">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.466476356328!2d78.683338!3d10.799176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa5b44b8d7e7c1%3A0x85c2a2b46aa4f6a0!2sTiruchirappalli!5e0!3m2!1sen!2sin!4v1698528300000!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
