import React, { useState } from "react";
import ThreeScene from "../components/ThreeScene";
import Hero from "../components/Hero";
// icons
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaFileCircleCheck } from "react-icons/fa6";  
// images section
import img1 from "../assets/business.png";
import img2 from "../assets/about-one-img-1.jpg";
import img3 from "../assets/about-one-img-2.jpg";
export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselImages = [
    {
      src: "https://vastphotos.com/files/uploads/photos/10150/high-resolution-nature-landscape-m.jpg?v=20231025053826",
      alt: "Students studying abroad",
    },
    {
      src: "https://images.all-free-download.com/images/graphiclarge/abstract_beach_cloud_dawn_evening_horizontal_599086.jpg",
      alt: "University campus library",
    },
    {
      src: "https://images.all-free-download.com/images/graphiclarge/cloud_desert_horizontal_landscape_majestic_mountain_602783.jpg",
      alt: "International students",
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Team collaboration",
    },
  ];

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCarouselIndex(index);
  };


const [successIndex, setSuccessIndex] = useState(0);

const successData = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Priya Sharma",
    location: "USA",
    review: "Loan process was smooth and very helpful!"
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "Akshay Kumar",
    location: "UK",
    review: "Competitive rates helped save a lot of money!"
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "Lisa Wang",
    location: "Canada",
    review: "Very friendly and supportive team!"
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    name: "Rahul Verma",
    location: "Australia",
    review: "Quick and transparent loan approval!"
  },
  {
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    name: "Sofia Lee",
    location: "Germany",
    review: "Made studying abroad possible for me!"
  },
  {
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    name: "Daniel Kim",
    location: "France",
    review: "Highly recommended!"
  }
];

// Group 3 per slide
const stories = [];
for (let i = 0; i < successData.length; i += 3) {
  stories.push(successData.slice(i, i + 3));
}

const nextSuccess = () => {
  setSuccessIndex((prev) =>
    prev + 1 >= stories.length ? 0 : prev + 1
  );
};

const prevSuccess = () => {
  setSuccessIndex((prev) =>
    prev - 1 < 0 ? stories.length - 1 : prev - 1
  );
};


  return (
    <section className="space-y-12">
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden shadow-2xl h-96">
          <img
            src={carouselImages[carouselIndex].src}
            alt={carouselImages[carouselIndex].alt}
            className="w-full h-full object-cover transition-opacity duration-500"
            loading="lazy"
          />

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
          >
            &#10094;
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
          >
            &#10095;
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === carouselIndex ? "bg-white w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
       {/* let simpel intro */}
         <div className="container mx-auto px-4 lg:px-44 text-center">
              <h1 className="text-2xl font-bold">Find Loan Products We Offers</h1> 
              <p className="text-lg">We will match you with a loan program that meet your financial need. 
                In short term liquidity, by striving to make funds available 
                to them <strong>within 24 hours of application.</strong></p>
         </div>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12 border border-blue-200 mx-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-700 mb-6 font-medium">
            Trusted by leading financial institutions and educational partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
              <p className="text-sm text-gray-600">Support</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
              <p className="text-sm text-gray-600">Transparent</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
              <p className="text-sm text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-sm text-gray-600">Rated 4.9/5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-700 mb-6">
              We partner with trusted lenders and financial advisors to provide
              transparent loan options with clear terms and competitive rates.
              Our team helps with pre-approval guidance, document checklists,
              and repayment planning tailored to your study destination.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              <li className="bg-blue-50 border-l-4 border-blue-600 rounded p-4 shadow">
                ✓ Personalized loan matching
              </li>
              <li className="bg-blue-50 border-l-4 border-blue-600 rounded p-4 shadow">
                ✓ Document assistance & timelines
              </li>
              <li className="bg-blue-50 border-l-4 border-blue-600 rounded p-4 shadow">
                ✓ Rate comparison & negotiation
              </li>
              <li className="bg-blue-50 border-l-4 border-blue-600 rounded p-4 shadow">
                ✓ Repayment planning tools
              </li>
              <li className="bg-blue-50 border-l-4 border-blue-600 rounded p-4 shadow">
                ✓ Expert consultation (free)
              </li>
              <li className="bg-blue-50 border-l-4 border-blue-600 rounded p-4 shadow">
                ✓ 24/7 support available
              </li>
            </ul>
          </div>

          <aside>
            <h3 className="text-lg font-semibold mb-3">Interactive preview</h3>
            <div className="rounded overflow-hidden shadow-lg">
              {/* <ThreeScene className="h-96" /> */}
              <Hero/>
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Rotate, zoom, and explore our interactive demo.
            </p>
          </aside>
        </div>
      </div>
        {/* loan step by step */}
          
           <div className="container mx-auto px-4">
                {/* create three boxes and center use grid system*/}
                <h2 className="text-3xl font-bold mb-8 text-center">Loan Process in 4 Easy Steps</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-blue-600">
                        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                            1
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
                        <p className="text-gray-600">Complete our simple online application form in minutes.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-blue-600">
                        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                            2
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Get Approved</h3>
                        <p className="text-gray-600">We'll review your application and notify you of approval within 24 hours.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-blue-600">
                        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                            3
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Receive Funds</h3>
                        <p className="text-gray-600">Once approved, funds are typically deposited directly into your bank account within 48 hours.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-blue-600">
                        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                            4
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Repay</h3>
                        <p className="text-gray-600">Make scheduled payments to repay your loan according to your chosen repayment plan.</p>
                    </div>
                </div>
           </div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Our Impact</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold">5,000+</div>
              <p className="text-blue-100">Students Funded</p>
            </div>
            <div>
              <div className="text-4xl font-bold">$150M+</div>
              <p className="text-blue-100">Loans Approved</p>
            </div>
            <div>
              <div className="text-4xl font-bold">98%</div>
              <p className="text-blue-100">Approval Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <p className="text-blue-100">Countries Served</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">How It Works</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h4 className="font-semibold mb-2">Apply Online</h4>
              <p className="text-gray-600 text-sm">
                Complete a quick form with your academic and financial details.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h4 className="font-semibold mb-2">Get Pre-Approved</h4>
              <p className="text-gray-600 text-sm">
                Receive a personalized loan offer within 24 hours.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h4 className="font-semibold mb-2">Document Support</h4>
              <p className="text-gray-600 text-sm">
                Our team guides you through paperwork and lender submissions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h4 className="font-semibold mb-2">Fund & Study</h4>
              <p className="text-gray-600 text-sm">
                Receive funds and focus on your education abroad.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* simple posetr */}
        <div className="container mx-auto px-4 lg:px-28 py-10">
             <div className="flex">
              <div className="w-1/2 relative">
                   <img src={img2} alt="loan img" className=""/>
                   <img src={img3} alt="loan img"  className="absolute top-36 left-40"/>
              </div>
              <div className="w-1/2 pl-8">
                   <div>
                        <h4 className="opacity-80">Welcome to agency</h4>
                        <h1 className="text-2xl font-bold">Delivering the Best Consulting Experience</h1>
                        <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, architecto?</p>
                         <div className="p-3 list-menu-box border w-full lg:w-96">
                              <div className="flex justify-between">
                                 <p className="flex items-center"><IoMdCheckmarkCircleOutline className="text-lg text-red-600 me-2" /> Strategy & Consulting</p>
                                 <p className="flex items-center"><IoMdCheckmarkCircleOutline className="text-lg text-red-600 me-2" /> Marketing Rules</p>
                              </div>
                              <div className="flex justify-between">
                                 <p className="flex items-center"><IoMdCheckmarkCircleOutline className="text-lg text-red-600 me-2" /> Strategy & Consulting</p>
                                 <p className="flex items-center"><IoMdCheckmarkCircleOutline className="text-lg text-red-600 me-2" /> Marketing Rules</p>
                              </div>
                              <div className="mt-5 flex justify-center">
                                  <p className="text-white flex items-center px-5 py-3 bg-slate-500"><FaFileCircleCheck className="text-red-500" /> 10 Years of Consulting Experience</p>
                              </div>
                         </div>
                   </div>
              </div>
             </div>
        </div>
      <div className="container mx-auto px-4">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://www.auxilo.com/images/education-loan/Eduloan-Banner.webp"
            alt="students with books"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

{/* Student Success Stories - Carousel */}
<div className="container mx-auto px-4">
  <h3 className="text-3xl font-bold mb-8 text-center">Student Success Stories</h3>

  {/* Carousel Wrapper */}
  <div className="relative overflow-hidden">
    <div
      className="flex transition-transform duration-500"
      style={{ transform: `translateX(-${successIndex * 100}%)` }}
    >
      {stories.map((story, i) => (
        <div key={i} className="min-w-full grid md:grid-cols-3 gap-6 px-2">
          {story.map((item, j) => (
            <div
              key={j}
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600 mx-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              </div>
              <p className="text-gray-700 text-center">{item.review}</p>
              <div className="flex gap-1 mt-4 text-yellow-400 justify-center">★★★★★</div>
            </div>
          ))}
        </div>
      ))}
    </div>

    {/* Navigation Buttons */}
    <button
      onClick={prevSuccess}
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full"
    >
      ❮
    </button>
    <button
      onClick={nextSuccess}
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full"
    >
      ❯
    </button>
  </div>
</div>

      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-1 md:order-1">
            <h1 className="text-2xl lg:text-3xl font-bold py-2">Give yourself the best chance of success.</h1>
            <p className="pb-6 text-gray-700 opacity-75">Why I say old chap that is spiffing geeza, cockup arse over tit up the kyver pukka have it bugger bits and bobs posh, it's all gone to pot skive off you mug my lady dropped a clanger Jeffrey cheeky.</p>
            <p className="text-gray-700 opacity-75">Daft some dodgy chav my lady Elizabeth do one blimey fantastic wind up spiffing good.</p>
          </div>
          <div className="order-2 md:order-2">
            <img src={img1} alt="loan img" className="w-full lg:w-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
