import React from "react";

export default function About() {
  return (
    <section className="bg-white">
      <div className="about-banner">
         
      </div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 mb-12 mt-5">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Education Loan Hub</h1>
          <p className="text-xl opacity-90">Empowering students worldwide with transparent, accessible education financing</p>
        </div>
      </div>

      {/* Mission Section with Image */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We believe quality education should be accessible to every talented student, regardless of financial background. Our mission is to remove barriers to international education financing.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Since 2018, we've helped over 5,000 students secure loans for studying at top institutions worldwide.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We combine deep expertise in education lending with genuine support to make financing simple and transparent.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Students studying together"
              className="w-full h-96 object-cover hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>

      {/* Values Section with Images */}
      <div className="bg-gray-50 py-16 mb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Transparency"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Transparency</h3>
                <p className="text-gray-700">
                  No hidden fees, no surprises. We provide clear breakdowns of all costs, interest rates, and terms upfront so you can make confident decisions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Accessibility"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Accessibility</h3>
                <p className="text-gray-700">
                  We partner with lenders who believe in supporting talented students everywhere. Multiple loan options ensure financing matches your situation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Support"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Expert Support</h3>
                <p className="text-gray-700">
                  From application to repayment, our education advisors guide you through every step. We're here before, during, and after your studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">5,000+</h3>
            <p className="text-gray-700 font-semibold">Students Funded</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">80+</h3>
            <p className="text-gray-700 font-semibold">Countries Served</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">$500M+</h3>
            <p className="text-gray-700 font-semibold">Total Loans Processed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">4.8/5</h3>
            <p className="text-gray-700 font-semibold">Customer Rating</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16 mb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Meet Our Leadership Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3", bio: "15+ years in education finance" },
              { name: "Marcus Lee", role: "Head of Lending", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3", bio: "Former investment banker" },
              { name: "Priya Patel", role: "VP Student Success", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3", bio: "Education advisor, 10+ years" },
              { name: "James Chen", role: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3", bio: "Tech innovator & entrepreneur" }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section with Image */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Our impact on students"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Impact</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Every day, we help students pursue their dreams at world-class universities. Our streamlined process reduces loan approval time from weeks to days.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We're committed to supporting not just the loan process, but the entire student journey—from application guidance to career support.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><span className="text-blue-600 mr-3">✓</span> Average approval time: 3 days</li>
              <li className="flex items-center"><span className="text-blue-600 mr-3">✓</span> 99% customer satisfaction</li>
              <li className="flex items-center"><span className="text-blue-600 mr-3">✓</span> 24/7 multilingual support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16 rounded-lg mb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Fund Your Education?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of students who've achieved their academic dreams with our support.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Start Your Application Today
          </button>
        </div>
      </div>
    </section>
  );
}
