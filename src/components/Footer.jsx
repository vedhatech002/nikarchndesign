// src/components/Footer.jsx
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const handleNewsletter = (e) => {
    e.preventDefault();
    const email = e.target.elements.email?.value;
    // non-functional placeholder: logs for now
    console.log("Newsletter signup:", email);
    // you can wire this to an API or Mailchimp endpoint later
  };

  return (
    <footer className="bg-black text-silver-300 font-serif">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-10">
          {/* column 1: logo + tagline */}
          <div className="space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-400/30 rounded"
            >
              <img
                src={logo}
                alt="logo"
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="text-silver-400 max-w-md leading-relaxed">
              We craft thoughtful architecture and interiors — combining
              research-led design with precise materiality and craft.
            </p>

            <div className="flex items-center gap-4 mt-3">
              <a
                href="https://twitter.com"
                aria-label="Twitter (opens in new tab)"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded hover:bg-black/60 transition-colors"
              >
                <Twitter className="w-5 h-5 text-silver-300" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram (opens in new tab)"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded hover:bg-black/60 transition-colors"
              >
                <Instagram className="w-5 h-5 text-silver-300" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn (opens in new tab)"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded hover:bg-black/60 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-silver-300" />
              </a>
            </div>
          </div>

          {/* column 2: nav + contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm uppercase tracking-[0.35em] text-silver-400/80 mb-4">
                Explore
              </h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-silver-300 hover:text-silver-100 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-[0.35em] text-silver-400/80 mb-4">
                Contact
              </h4>
              <address className="not-italic space-y-3 text-silver-400">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-silver-300" />
                  <span>123 Design Lane, Chennai, India</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-silver-300" />
                  <a
                    href="tel:+911234567890"
                    className="hover:text-silver-100 transition-colors"
                  >
                    +91 12 3456 7890
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-silver-300" />
                  <a
                    href="mailto:hello@studio.com"
                    className="hover:text-silver-100 transition-colors"
                  >
                    hello@studio.com
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* column 3: newsletter */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.35em] text-silver-400/80 mb-4">
              Stay updated
            </h4>
            <p className="text-silver-400 leading-relaxed mb-6 max-w-md">
              Subscribe for occasional updates — project highlights and studio
              news.
            </p>

            <form
              onSubmit={handleNewsletter}
              className="flex flex-col sm:flex-row gap-3 sm:items-center"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                placeholder="you@domain.com"
                className="flex-1 min-w-0 bg-black/80 border border-silver-400/10 placeholder:text-silver-400 px-4 py-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-400/20"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 inline-flex items-center gap-2 px-5 py-3 bg-black/70 border border-silver-400/20 text-silver-100 rounded-md hover:bg-black/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-10 border-t border-silver-400/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-silver-400 text-sm">
          <p>© {new Date().getFullYear()} Studio Name. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a
              href="/privacy"
              className="hover:text-silver-100 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-silver-100 transition-colors"
            >
              Terms
            </a>
            <span className="sr-only">Made with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
