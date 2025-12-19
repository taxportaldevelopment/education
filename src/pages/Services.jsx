import { useEffect } from "react";

{/* Service Banner */}
<div className="bg-blue-100 py-8 border-b-2 border-blue-200"></div>

const services = [
  {
    title: "Loan Comparison & Pre-approval",
    desc: "Compare multiple lenders with transparent terms and get pre-approved in 24 hours.",
    icon: "📊",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop",
  },
  {
    title: "Application Assistance",
    desc: "Expert guidance through documentation, timelines, and lender communication.",
    icon: "📋",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop",
  },
  {
    title: "Repayment Planning",
    desc: "Custom repayment plans with flexible terms designed for your financial situation.",
    icon: "💰",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop",
  },
  {
    title: "Interest Rate Negotiation",
    desc: "Secure the lowest possible rates through expert negotiation on your behalf.",
    icon: "📈",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop",
  },
  {
    title: "Co-Signer Support",
    desc: "Dedicated guidance for parents and co-signers with transparent communication.",
    icon: "👥",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop",
  },
  {
    title: "Post-Loan Support",
    desc: "Ongoing assistance with refinancing, forbearance, and income verification.",
    icon: "🤝",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop",
  },
];

const offers = [
  { badge: "SAVE", text: "Up to 2% interest rate reduction" },
  { badge: "FAST", text: "Pre-approval within 24 hours" },
  { badge: "EASY", text: "100% online application process" },
];

const features = [
  { icon: "✓", title: "Transparent Pricing", desc: "No hidden fees, clear cost breakdown" },
  { icon: "⭐", title: "Expert Team", desc: "8+ years average finance experience" },
  { icon: "⚡", title: "Fast Processing", desc: "Quick approvals and decisions" },
  { icon: "🌍", title: "Global Coverage", desc: "50+ countries supported" },
];

export default function Services() {
      useEffect(() => {
        function getRefresh() {
          window.scrollTo(0, 0);
        }
        getRefresh();
      }, []);
  return (
    <section className="w-full bg-gray-400">
       <div className="service-banner">
             
       </div>

      {/* Hero Section */}
      <div className="our-service mt-5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Comprehensive education loan services designed to make studying abroad accessible, affordable, and stress-free.
          </p>
        </div>
      </div>

      {/* Offers Banner */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-8 border-b-2 border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {offers.map((offer, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                  {offer.badge}
                </span>
                <p className="text-gray-800 font-semibold">{offer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What We Offer
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h4>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6 text-lg">Apply today and get pre-approved within 24 hours</p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
}
