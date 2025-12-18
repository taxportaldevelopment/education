import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/D.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" }, 
  { to: "/services", label: "Services" },
  // { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-md sticky top-0 z-30 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="">
            <img src={logo} className="h-10" alt="" />
          </div>
          <div className="text-xl font-bold text-gray-900">Associates</div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                "px-4 py-2 rounded-md text-sm font-medium transition-all " +
                (isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:text-blue-600")
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md"
          >
            Apply Now
          </a>
        </div>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded bg-blue-100 text-blue-600 font-bold"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-gray-50">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  "block px-4 py-3 rounded-md text-sm font-medium transition-all " +
                  (isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50")
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="/contact"
              className="block text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all mt-2"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
