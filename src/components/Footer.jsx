import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white px-2 py-1 rounded font-bold text-sm">
              EL
            </div>
            <span className="font-bold text-lg">EducationLoan</span>
          </div>
          <p className="text-gray-400 text-sm">
            Helping students finance studies abroad with transparent options and
            friendly guidance.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-4 text-lg">Company</h5>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4 text-lg">Services</h5>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Loan Comparison
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Pre-approval
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Repayment Planning
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Rate Negotiation
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4 text-lg">Contact Info</h5>
          <p className="text-gray-400 text-sm mb-2">
            <span className="block font-semibold text-white mb-1">Email</span>
            <a
              href="mailto:hello@example.com"
              className="hover:text-white transition-colors"
            >
              hello@example.com
            </a>
          </p>
          <p className="text-gray-400 text-sm">
            <span className="block font-semibold text-white mb-1">Phone</span>
            <a
              href="tel:+15551234567"
              className="hover:text-white transition-colors"
            >
              +1 (555) 123-4567
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8">
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Education Loan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
