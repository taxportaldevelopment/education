import React from "react";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks — your inquiry was received (demo).");
  }

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg text-gray-700 mb-6">
            Reach out for a free consultation. Provide basic details and we'll
            contact you with next steps.
          </p>

          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-3">Contact Info</h4>
            <ul className="text-gray-700 space-y-3">
              <li className="flex gap-3">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:hello@example.com"
                  className="text-blue-600 hover:underline"
                >
                  hello@example.com
                </a>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+15551234567"
                  className="text-blue-600 hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold">Location:</span>{" "}
                <span>Remote / Global</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold mb-2">Office Hours</h4>
            <p className="text-gray-700">Mon–Fri 9:00–18:00 (local time)</p>
            <p className="text-sm text-gray-600 mt-2">
              We offer evening consultations for international students by
              appointment.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Response Time</h4>
            <p className="text-gray-700">
              We typically respond within 2-4 hours during business hours.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">
            Get a Free Consultation
          </h3>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full border rounded px-3 py-2"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border rounded px-3 py-2"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone (Optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full border rounded px-3 py-2"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium mb-1">
              Country of Interest
            </label>
            <select
              id="country"
              name="country"
              className="w-full border rounded px-3 py-2"
            >
              <option>Select a country...</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border rounded px-3 py-2"
              rows={4}
              placeholder="Tell us about your education plans..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
          >
            Send Inquiry
          </button>
        </form>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">
              How long does approval take?
            </h4>
            <p className="text-gray-700">
              Pre-approval typically takes 24-48 hours. Final approval depends
              on the lender and can take 5-7 business days.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">
              Do you charge any fees?
            </h4>
            <p className="text-gray-700">
              Our consultation and matching services are free. Any lender fees
              will be clearly disclosed upfront.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">
              Which countries do you support?
            </h4>
            <p className="text-gray-700">
              We have partnerships with lenders for 50+ countries including USA,
              UK, Canada, Australia, Germany, and more.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">
              What's the minimum loan amount?
            </h4>
            <p className="text-gray-700">
              Loan amounts typically range from $10,000 to $200,000+ depending
              on the lender and your profile.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">Can parents co-sign?</h4>
            <p className="text-gray-700">
              Yes! Many lenders accept parent co-signers, which can improve
              approval chances and interest rates.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-2">
              Do you offer guidance on repayment?
            </h4>
            <p className="text-gray-700">
              Absolutely. We provide repayment planning, income-based options,
              and help with loan management tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
