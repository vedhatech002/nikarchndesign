// src/pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import contactHeroImg from "../assets/contact_hero.jpg";

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
            onSubmit={handleSubmit}
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
              <motion.button
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-8 py-2
                            bg-white text-black font-serif font-semibold uppercase tracking-wide text-sm
                            rounded-md overflow-hidden transition-all duration-500 ease-in-out"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Send Message
                </span>

                {/* Arrow */}
                <motion.span
                  className="relative z-10 flex items-center transition-transform duration-500"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transition-colors duration-500 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m0 0l-6-6m6 6l-6 6"
                    />
                  </svg>
                </motion.span>

                {/* Metallic Gray Hover Layer */}
                <span
                  className="absolute inset-0 rounded-md 
                              bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
                              opacity-0 group-hover:opacity-100
                              border border-transparent group-hover:border-white
                              transition-all duration-500 ease-in-out"
                />
              </motion.button>
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
              House no. 1676 , <br />
              Sector-37 , <br />
              Noida
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
              nickarcndesigns@gmail.com
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
              +91 9958400882
            </p>
            <p className="text-silver-100 text-base hover:text-silver-300 transition-colors duration-300">
              +91 9810858725
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
      {/* --- Map Section --- */}
      <div className="relative w-full h-[450px] overflow-hidden">
        {/* Embedded Google Map */}
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.197410568195!2d77.3409157!3d28.5658855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55555555555%3A0x0000000000000000!2s28%C2%B033'57.2%22N%2077%C2%B020'36.6%22E!5e0!3m2!1sen!2sin!4v1730160000000!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full border-0 grayscale-[30%] brightness-[0.6] contrast-[1.1]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>

        {/* Animated metallic location pin */}
      </div>
    </section>
  );
};

export default Contact;
