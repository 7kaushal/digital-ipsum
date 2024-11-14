import React from "react";
import Navbar from "./Navbar";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import {
  ShareIcon,
  BuildingOffice2Icon,
  MapPinIcon,
  UserIcon,
  GlobeAltIcon,
  BanknotesIcon,
  FlagIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import ReviewsSection from "./ReviewsSection";
import CompanyBenefits from "./CompanyBenefits";
import FooterSmall from "./FooterSmall";

const CompanyProfile = () => {
  return (
    <div>
      <div>
        <Navbar textColor="text-black" />
      </div>
      <div className="py-10">
        <div className="max-w-7xl mx-auto bg-white p-8">
          <div className='bg-[url("./src/assets/cover.png")] h-48 content-end'>
            <div className="flex justify-between items-end">
              <div className="flex items-start justify-between space-x-4 w-2/3 h-fit bg-white">
                <div className="inline-flex">
                  <img
                    src="./src/assets/adobe.svg"
                    alt="Adobe Logo"
                    className="w-16 h-16 mx-2 mt-2"
                  />
                  <div className=" content-center mt-3">
                    <h1 className="text-2xl font-semibold text-gray-800">
                      Adobe
                    </h1>
                    <div className="flex items-center space-x-2">
                      4.8
                      <StarRating rating={4.8} totalStars={5} />
                    </div>
                  </div>
                </div>

                <div className="space-x-8 p-4 inline-flex">
                  <div>
                    <h1 className="text-orange-500 font-medium text-end">
                      1.2K
                    </h1>
                    <p className="text-gray-400">Reviews</p>
                  </div>
                  <div>
                    <h1 className="text-orange-500 font-medium text-end">65</h1>
                    <p className="text-gray-400">Jobs</p>
                  </div>
                </div>
              </div>
              <div className="flex p-4 w-1/3">
                <button className="bg-white inline-flex text-gray-800 py-2 px-4">
                  <ShareIcon className="size-4 mt-1 mr-2" />
                  Share
                </button>
                <button className="bg-orange-600 text-white py-2 px-4">
                  + Write a Review
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-4 text-gray-600 text-sm mt-8">
                <div className="">
                  <div className="inline-flex space-x-2">
                    <BuildingOffice2Icon className="size-5" />
                    <div className="text-black">
                      Industry
                      <div className="text-gray-600">
                        Computer Hardware & Software
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="inline-flex space-x-2">
                    <GlobeAltIcon className="size-5" />
                    <div className="text-black">
                      Website
                      <div className="text-gray-600">www.adobe.com</div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="inline-flex space-x-2">
                    <MapPinIcon className="size-5" />
                    <div className="text-black">
                      headquarters
                      <div className="text-gray-600">San Jose, CA</div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="inline-flex space-x-2">
                    <UserIcon className="size-5" />
                    <div className="text-black">
                      Company Size
                      <div className="text-gray-600">1000+ employees</div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="inline-flex space-x-2">
                    <BanknotesIcon className="size-5" />
                    <div className="text-black">
                      Revenue
                      <div className="text-gray-600">
                        $5 to $10 billion (USD) per year
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="inline-flex space-x-2">
                    <FlagIcon className="size-5" />
                    <div className="text-black">
                      Founded
                      <div className="text-gray-600">1982</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 border-blue-300 mb-6 w-4/5">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Company Description
                </h2>
                <p className="text-gray-700 mb-4">
                  Adobe is the global leader in digital media and digital
                  marketing solutions. Our creative, marketing and document
                  solutions empower everyone — from emerging artists to global
                  brands — to bring digital creations to life and deliver
                  immersive, compelling experiences to the right person at the
                  right moment for the best results. In short, Adobe is
                  everywhere, and we’re changing the world through digital
                  experiences.
                </p>
                <p className="text-gray-700 mb-4">
                  Mission: Adobe is changing the world through digital
                  experiences.
                </p>
              </div>

              <div className="bg-white p-6 border-b mb-6">
                <h2 className="font-semibold text-gray-800 mb-4">
                  Job Vacancies
                </h2>
                <div className="flex mb-4 bg-white w-full space-x-2">
                  <MagnifyingGlassIcon className="size-5 m-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    className="w-5/12 p-2 border-r border-gray-300"
                  />
                  <MapPinIcon className="size-5 m-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="City, state or zip"
                    className="p-2 w-5/12"
                  />
                  <button className="bg-orange-400 text-white px-2 w-1/6 text-sm font-medium">
                    Search Job
                  </button>
                </div>
                <div className="flex justify-between mb-4">
                  <h2 className=" text-gray-400">Showing: 34 jobs open</h2>
                  <div className="text-sm">
                    <div className="inline-flex">
                      Sort by:{" "}
                      <select className="border-b border-gray-500 p-1">
                        <option value="relevance">Relevance</option>
                        <option value="date">Date</option>
                      </select>
                      <div className=" text-gray-400 ml-2">FILTER JOBS</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Sales Engineer, Application Modernization, Healthcare, Google Cloud",
                    "Brand Marketing Manager – Services Portfolio",
                    "Head of Third Party Strategy and Deals, Go-to-Market",
                    "G Suite Specialist, Google Cloud Customer Engineering",
                    "Marketing Associate Director - Consumer Experience",
                  ].map((job, idx) => (
                    <div key={idx} className="border-b p-4">
                      <div className="flex justify-between mb-2">
                        <Link to="/company-profile-adobe">
                          <div className="flex space-x-2 items-center">
                            <img
                              src="./src/assets/adobe.svg"
                              alt=""
                              className="size-6"
                            />
                            <h3 className="font-semibold">Adobe</h3>
                          </div>
                        </Link>
                        <BookmarkIcon className="size-5 text-gray-400" />
                      </div>
                      <Link to="/adobe-job-listing">
                        <h4 className="font-medium text-lg">{job}</h4>
                      </Link>
                      <div className="flex justify-between text-gray-500 mt-4 mb-6">
                        <div className=" space-x-10">
                          <div className="inline-flex space-x-2">
                            <BuildingOffice2Icon className="size-5" />
                            <div className="">Internet & Technology</div>
                          </div>
                          <div className="inline-flex space-x-2">
                            <MapPinIcon className="size-5" />
                            <div className="">San Jose, CA</div>
                          </div>
                          <div className="inline-flex space-x-2">
                            <ClockIcon className="size-5" />
                            <div className="">Fulltime</div>
                          </div>
                        </div>
                        <div className="text-gray-400">3 days ago</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <ReviewsSection />
              <CompanyBenefits />
            </div>

            <div className="col-span-1">
              <div className="bg-white p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Company Culture
                </h2>
                <p className="text-gray-700 mb-4">
                  We started out in Sweden in 2010, selling high-quality,
                  healthy food supplements. Since then we’ve sent over 1 million
                  orders.
                </p>
                <div>
                  <img src="./src/assets/worklife.svg" alt="" />
                </div>
              </div>

              <div className="bg-white p-6 flex justify-between border">
                <div className="">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Our Contact
                  </h2>
                  <p className="text-gray-700 mb-4">adobe@help.com</p>
                </div>

                <div className="flex space-x-2 items-center">
                  <a href="#" className="">
                    <img src="./src/assets/twitter.svg" alt="" />
                  </a>
                  <a href="#" className="">
                    <img src="./src/assets/fb.svg" alt="" />
                  </a>
                  <a href="#" className="">
                    <img src="./src/assets/linkedin.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSmall />
    </div>
  );
};

export default CompanyProfile;
