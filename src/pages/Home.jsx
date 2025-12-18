import React, { useEffect, useState } from "react";
import ThreeScene from "../components/ThreeScene";
import Hero from "../components/Hero";
// icons
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
// images section
import img1 from "../assets/business.png";
import img2 from "../assets/about-one-img-1.jpg";
import img3 from "../assets/about-one-img-2.jpg";
import slider1 from "../assets/home/slider-1.png";
import slider2 from "../assets/home/slider-2.png";
import slider3 from "../assets/home/slider-3.png";
import banner from "../assets/home/loan-business-banner.png";

export default function Home() {
  useEffect(() => {
    function getRefresh() {
      window.scrollTo(0, 0);
    }
    getRefresh();
  }, []);

  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselImages = [
    {
      src: slider1,
      alt: "Students studying abroad",
    },
    {
      src: slider2,
      alt: "University campus library",
    },
    {
      src: slider3,
      alt: "International students",
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
      review: "Loan process was smooth and very helpful!",
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      name: "Akshay Kumar",
      location: "UK",
      review: "Competitive rates helped save a lot of money!",
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      name: "Lisa Wang",
      location: "Canada",
      review: "Very friendly and supportive team!",
    },
    {
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      name: "Rahul Verma",
      location: "Australia",
      review: "Quick and transparent loan approval!",
    },
    {
      img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
      name: "Sofia Lee",
      location: "Germany",
      review: "Made studying abroad possible for me!",
    },
    {
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      name: "Daniel Kim",
      location: "France",
      review: "Highly recommended!",
    },
  ];

  // Group 3 per slide
  const stories = [];
  for (let i = 0; i < successData.length; i += 3) {
    stories.push(successData.slice(i, i + 3));
  }

  const nextSuccess = () => {
    setSuccessIndex((prev) => (prev + 1 >= stories.length ? 0 : prev + 1));
  };

  const prevSuccess = () => {
    setSuccessIndex((prev) => (prev - 1 < 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <section className="space-y-12">
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden shadow-2xl h-64 md:h-96">
          <img
            src={carouselImages[carouselIndex].src}
            alt={carouselImages[carouselIndex].alt}
            className="w-full h-full object-cover transition-opacity duration-500"
            loading="lazy"
          />

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full md:p-3 transition-all"
            aria-label="Previous slide"
          >
            &#10094;
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full md:p-3 transition-all"
            aria-label="Next slide"
          >
            &#10095;
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === carouselIndex ? "bg-white w-8" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* text animation */}
      <div className="animation p-6 md:p-10 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h1 className="bangers-regular text-animation font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center py-5">
          AAA Associates
        </h1>
      </div>

      {/* let simpel intro */}
      <div className="container mx-auto px-4 lg:px-28 text-center">
        <h1 className="text-xl sm:text-2xl font-bold">
          Find Loan Products We Offer
        </h1>
        <p className="text-base sm:text-lg max-w-3xl mx-auto">
          We will match you with a loan program that meet your financial need.
          In short term liquidity, by striving to make funds available to them{" "}
          <strong>within 24 hours of application.</strong>
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 md:p-8 mb-12 border border-blue-200 mx-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-700 mb-6 font-medium">
            Trusted by leading financial institutions and educational partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                24/7
              </div>
              <p className="text-sm text-gray-600">Support</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                100%
              </div>
              <p className="text-sm text-gray-600">Transparent</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                50+
              </div>
              <p className="text-sm text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-sm text-gray-600">Rated 4.9/5</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 border ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
              Why Choose Us?
            </h2>
            <p className="text-base sm:text-base md:text-lg lg:text-lg text-gray-700 mb-8 leading-relaxed">
              We partner with trusted lenders and financial advisors to provide
              transparent loan options with clear terms and competitive rates.
              Our team helps with pre-approval guidance, document checklists,
              and repayment planning tailored to your study destination.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <li className="bg-blue-50 border-l-4 border-blue-600 rounded p-4 md:p-5 shadow hover:shadow-md transition-shadow">
                ✓ Personalized loan matching
              </li>
              <li className="bg-blue-50 border-l-4 border-blue-600 rounded p-4 md:p-5 shadow hover:shadow-md transition-shadow">
                ✓ Document assistance & timelines
              </li>
              <li className="bg-blue-50 border-l-4 border-blue-600 rounded p-4 md:p-5 shadow hover:shadow-md transition-shadow">
                ✓ Rate comparison & negotiation
              </li>
              <li className="bg-blue-50 border-l-4 border-blue-600 rounded p-4 md:p-5 shadow hover:shadow-md transition-shadow">
                ✓ Repayment planning tools
              </li>
              <li className="bg-blue-50 border-l-4 border-blue-600 rounded p-4 md:p-5 shadow hover:shadow-md transition-shadow">
                ✓ Expert consultation (free)
              </li>
              <li className="bg-blue-50 border-l-4 border-blue-600 rounded p-4 md:p-5 shadow hover:shadow-md transition-shadow">
                ✓ 24/7 support available
              </li>
            </ul>
          </div>

          <aside className="md:col-span-1 h-full">
            <div className="rounded overflow-hidden shadow-lg">
              {/* <ThreeScene className="h-96" /> */}
              <Hero />
            </div>
          </aside>
        </div>
      </div>
      {/* loan step by step */}

      <div className="container mx-auto px-4">
        {/* create three boxes and center use grid system*/}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Loan Process in 4 Easy Steps
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center border-t-4 border-blue-600">
            <div className="bg-blue-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-md md:text-lg">
              1
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Apply Online
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Complete our simple online application form in minutes.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center border-t-4 border-blue-600">
            <div className="bg-blue-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-md md:text-lg">
              2
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Get Approved
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              We'll review your application and notify you of approval within 24
              hours.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center border-t-4 border-blue-600">
            <div className="bg-blue-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-md md:text-lg">
              3
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Receive Funds
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Once approved, funds are typically deposited directly into your
              bank account within 48 hours.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 text-center border-t-4 border-blue-600">
            <div className="bg-blue-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-md md:text-lg">
              4
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Repay</h3>
            <p className="text-sm md:text-base text-gray-600">
              Make scheduled payments to repay your loan according to your
              chosen repayment plan.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Our Impact
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold">5,000+</div>
              <p className="text-blue-100">Students Funded</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">$150M+</div>
              <p className="text-blue-100">Loans Approved</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">98%</div>
              <p className="text-blue-100">Approval Rate</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">50+</div>
              <p className="text-blue-100">Countries Served</p>
            </div>
          </div>
        </div>
      </div>

      <div className="containerzer py-12">
        <div className="container mx-auto px-4 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            How It Works
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center lg:border-r">
              <div className="bg-blue-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-md md:text-lg">
                1
              </div>
              <h4 className="font-semibold mb-2">Apply Online</h4>
              <p className="text-gray-600 text-sm md:text-base">
                Complete a quick form with your academic and financial details.
              </p>
            </div>
            <div className="text-center lg:border-r">
              <div className="bg-blue-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-md md:text-lg">
                2
              </div>
              <h4 className="font-semibold mb-2">Get Pre-Approved</h4>
              <p className="text-gray-600 text-sm md:text-base">
                Receive a personalized loan offer within 24 hours.
              </p>
            </div>
            <div className="text-center lg:border-r">
              <div className="bg-blue-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-md md:text-lg">
                3
              </div>
              <h4 className="font-semibold mb-2">Document Support</h4>
              <p className="text-gray-600 text-sm md:text-base">
                Our team guides you through paperwork and lender submissions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 font-bold text-md md:text-lg">
                4
              </div>
              <h4 className="font-semibold mb-2">Fund & Study</h4>
              <p className="text-gray-600 text-sm md:text-base">
                Receive funds and focus on your education abroad.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* simple posetr */}

      <div className="container mx-auto px-4 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-full md:w-1/2 relative border">
            <img src={img2} alt="loan img" className="" />
            <img
              src={img3}
              alt="loan img"
              className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div>
              <h4 className="opacity-80">Welcome to agency</h4>
              <h1 className="text-xl md:text-2xl font-bold">
                Delivering the Best Consulting Experience
              </h1>
              <p className="py-5 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Eius, architecto?
              </p>
              <div className="p-3 list-menu-box border w-full lg:w-96">
                <div className="flex justify-between">
                  <p className="flex items-center">
                    <IoMdCheckmarkCircleOutline className="text-lg text-red-600 me-2" />{" "}
                    Strategy & Consulting
                  </p>
                  <p className="flex items-center">
                    <IoMdCheckmarkCircleOutline className="text-lg text-red-600 me-2" />{" "}
                    Marketing Rules
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="flex items-center">
                    <IoMdCheckmarkCircleOutline className="text-lg text-red-600 me-2" />{" "}
                    Strategy & Consulting
                  </p>
                  <p className="flex items-center">
                    <IoMdCheckmarkCircleOutline className="text-lg text-red-600 me-2" />{" "}
                    Marketing Rules
                  </p>
                </div>
                <div className="mt-5 flex justify-center">
                  <p className="text-white flex items-center px-5 py-3 bg-slate-500">
                    <FaCheckCircle className="text-red-500" /> 10 Years of
                    Consulting Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:px-4">
        <div className="rounded-lg overflow-hidden lg:shadow-lg">
          <img
            src={banner}
            alt="students with books"
            className="w-full h-64 md:h-96 object-contain lg:object-cover"
          />
        </div>
      </div>

      {/* Student Success Stories - Carousel */}
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Student Success Stories
        </h3>

        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${successIndex * 100}%)` }}
          >
            {stories.map((story, i) => (
              <div
                key={i}
                className="min-w-full grid md:grid-cols-3 gap-6 px-2"
              >
                {story.map((item, j) => (
                  <div
                    key={j}
                    className="bg-white rounded-lg shadow-md p-4 md:p-6 border-t-4 border-blue-600 mx-auto"
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
                    <p className="text-gray-700 text-center text-sm md:text-base">
                      {item.review}
                    </p>
                    <div className="flex gap-1 mt-4 text-yellow-400 justify-center">
                      ★★★★★
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSuccess}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 md:p-3 rounded-full"
            aria-label="Previous stories"
          >
            ❮
          </button>
          <button
            onClick={nextSuccess}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 md:p-3 rounded-full"
            aria-label="Next stories"
          >
            ❯
          </button>
        </div>
      </div>
      {/* student loan get and future */}

      <div className="loan-get py-10 md:py-14 p-5 text-white flex flex-col md:flex-row md:justify-end">
        <div className="w-full md:w-1/2">
          <h1 className="font-semibold text-xl md:text-2xl py-5 uppercase">
            Lorem ipsum, dolor sit adipisicing.
          </h1>
          <p className="py-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem
            rerum ut aliquid, expedita tempore fugit omnis. Veritatis vel,
            necessitatibus porro molestias libero fuga aliquam repellendus aut
            nesciunt, quas necessitatibus porro molestias libero fuga aliquam
            repellendus aut nesciunt, quas necessitatibus porro molestias libero
            fuga aliquam repellendus aut nesciunt, quas consequuntur?
          </p>
          <h1 className=" first-letter:text-3xl first-letter:text-orange-300 py-2">
            Share Your Email Id....
          </h1>
          <div className="flex items-center ">
            <MdOutlineAttachEmail className="text-2xl me-2" />
            <span className="text-base md:text-xl text-blue-400">
              <a href="mailto:example123@gmail.com">example123@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-1 md:order-1">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold py-2">
              Give yourself the best chance of success.
            </h1>
            <p className="pb-6 text-gray-700 opacity-75 text-sm md:text-base">
              Why I say old chap that is spiffing geeza, cockup arse over tit up
              the kyver pukka have it bugger bits and bobs posh, it's all gone
              to pot skive off you mug my lady dropped a clanger Jeffrey cheeky.
            </p>
            <p className="text-gray-700 opacity-75 text-sm md:text-base">
              Daft some dodgy chav my lady Elizabeth do one blimey fantastic
              wind up spiffing good.
            </p>
          </div>
          <div className="order-2 md:order-2">
            <img
              src={img1}
              alt="loan img"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
