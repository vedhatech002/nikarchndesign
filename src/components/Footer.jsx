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
import { Link } from "react-router";
import SAMPLE_PROJECTS from "../pages/sampleProjects";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "#project", label: "project" },
  { href: "#services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    // Footer (replace your existing footer JSX with this)
    // Requires: logo, navItems, Twitter/Instagram/Linkedin icons, MapPin/Phone/Mail icons (you already have them).
    // Optionally import SAMPLE_PROJECTS to populate thumbnails:
    // import SAMPLE_PROJECTS from "../data/sampleProjects";

    <footer className="bg-black text-silver-300 font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 items-start">
          {/* 1: Brand */}
          <div className="space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-400/30 rounded"
            >
              <img
                src={logo}
                alt="logo"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-silver-400 max-w-sm leading-relaxed">
              We craft thoughtful architecture and interiors — research-led
              design combined with careful material selection and craft.
            </p>

            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://twitter.com"
                aria-label="Twitter (opens in new tab)"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded hover:bg-black/60 transition-colors transform hover:scale-105"
              >
                <Twitter className="w-5 h-5 text-silver-300" />
              </a>

              <a
                href="https://instagram.com"
                aria-label="Instagram (opens in new tab)"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded hover:bg-black/60 transition-colors transform hover:scale-105"
              >
                <Instagram className="w-5 h-5 text-silver-300" />
              </a>

              <a
                href="https://linkedin.com"
                aria-label="LinkedIn (opens in new tab)"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded hover:bg-black/60 transition-colors transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5 text-silver-300" />
              </a>
            </div>
          </div>

          {/* 2: Explore (nav) */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.35em] text-silver-400/80 mb-4">
              Explore
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-silver-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="block py-1 hover:text-silver-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3: Recent Projects (thumbnails) */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.35em] text-silver-400/80 mb-4">
              Recent Projects
            </h4>

            {/* If SAMPLE_PROJECTS is available, map thumbnails; otherwise show placeholders */}
            <div className="grid grid-cols-3 gap-3">
              {/* Uncomment and use SAMPLE_PROJECTS if available: */}
              {SAMPLE_PROJECTS.slice(3, 6).map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.id}`}
                  className="block overflow-hidden rounded-sm transform hover:scale-105 transition-all"
                >
                  <img
                    src={p.hero || p.featureImg}
                    alt={p.title}
                    className="w-full h-16 object-cover brightness-90"
                  />
                </Link>
              ))}

              {/* Fallback placeholders */}
              {/* <div className="bg-zinc-900 w-full h-16 rounded-sm flex items-center justify-center text-xs text-silver-400">
                Img
              </div>
              <div className="bg-zinc-900 w-full h-16 rounded-sm flex items-center justify-center text-xs text-silver-400">
                Img
              </div>
              <div className="bg-zinc-900 w-full h-16 rounded-sm flex items-center justify-center text-xs text-silver-400">
                Img
              </div> */}
            </div>

            <p className="mt-3 text-sm text-silver-400">
              View our portfolio for a selection of recent work — architecture,
              interiors and exhibitions.
            </p>
          </div>

          {/* 4: Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.35em] text-silver-400/80 mb-4">
              Contact
            </h4>

            <address className="not-italic space-y-4 text-silver-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-silver-300 mt-1" />
                <span>House no. 1676, Sector-37, Noida, UP</span>
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

              <div className="mt-2">
                <a
                  href="/contact"
                  className="inline-block mt-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:opacity-95 transition"
                >
                  Book a Consultation
                </a>
              </div>
            </address>
          </div>
        </div>

        <hr className="my-10 border-t border-silver-400/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-silver-400 text-sm">
          <p>
            © {new Date().getFullYear()} Nickarchndesign. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
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
            <span className="text-xs text-silver-400">Made with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
