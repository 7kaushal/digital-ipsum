import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import FooterSmall from "./FooterSmall";
import {
  MapPinIcon,
  ClockIcon,
  BuildingOffice2Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const jobs = [
  {
    company: "Adobe",
    img: "./src/assets/adobe.svg",
    title:
      "Sales Engineer, Application Modernization, Healthcare, Google Cloud",
    cat: "Internet & Technology",
    location: "San Jose, CA",
    type: "Fulltime",
    qualifications: [
      "10 years of experience in one of the following: digital advertising sales, third party channel strategy, or governance experience in a technology/media company.",
      "Ability to speak and write in English and Mandarin fluently and idiomatically.",
    ],
    posted: "3 days ago",
  },
  {
    company: "Mercedes-Benz",
    img: "./src/assets/mercedes.svg",
    title: "Head of Third Party Strategy and Deals, Go-to-Market",
    cat: "Internet & Technology",
    location: "San Jose, CA",
    type: "Fulltime",
    qualifications: [
      "10 years of experience in one of the following: digital advertising sales, third party channel strategy, or governance experience in a technology/media company.",
      "Ability to speak and write in English and Mandarin fluently and idiomatically.",
    ],
    posted: "3 days ago",
  },
  {
    company: "Dropbox",
    img: "./src/assets/dropbox.svg",
    title: "Marketing Associate Director - Consumer Experience",
    cat: "Internet & Technology",
    location: "San Jose, CA",
    type: "Fulltime",
    qualifications: [
      "10 years of experience in one of the following: digital advertising sales, third party channel strategy, or governance experience in a technology/media company.",
      "Ability to speak and write in English and Mandarin fluently and idiomatically.",
    ],
    posted: "3 days ago",
  },
  {
    company: "Microsft",
    img: "./src/assets/microsoft2.svg",
    title: "G Suite Specialist, Google Cloud Customer Engineering",
    cat: "Internet & Technology",
    location: "Redmond, WA",
    type: "Fulltime",
    qualifications: [
      "10 years of experience in one of the following: digital advertising sales, third party channel strategy, or governance experience in a technology/media company.",
      "Ability to speak and write in English and Mandarin fluently and idiomatically.",
    ],
    posted: "3 days ago",
  },
  {
    company: "Airbnb",
    img: "./src/assets/airbnb2.svg",
    title: "Brand Marketing Manager – Services Portfolio",
    cat: "Internet & Technology",
    location: "Moline, IL",
    type: "Fulltime",
    qualifications: [
      "10 years of experience in one of the following: digital advertising sales, third party channel strategy, or governance experience in a technology/media company.",
      "Ability to speak and write in English and Mandarin fluently and idiomatically.",
    ],
    posted: "3 days ago",
  },
];

const JobSeekersPage = () => {
  return (
    <div>
      <div className='bg-[url("./src/assets/bg4.svg")]'>
        <Navbar textColor="text-black" />
        <div className="my-10 px-40">
          <div className="flex">
            <button className="w-1/12 bg-white text-black text-xs font-semibold text-left py-1 px-4">
              JOBS
            </button>
            <button className="w-1/12 bg-[#E8E7E8] text-[#3B3A40] text-xs font-semibold text-left py-1 px-4">
              EMPLOYERS
            </button>
          </div>
          <div className="flex mb-4 bg-white shadow-2xl shadow-gray-300 h-16 w-full p-2 space-x-2">
            <MagnifyingGlassIcon className="size-6 m-3 text-gray-400" />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="w-5/12 p-2 border-r border-gray-300"
            />
            <MapPinIcon className="size-6 m-3 text-gray-400" />
            <input
              type="text"
              placeholder="City, state or zip"
              className="p-2 w-5/12"
            />
            <button className="bg-orange-400 text-white py-2 px-2 w-1/6 text-sm font-medium">
              Find Job
            </button>
          </div>
        </div>
      </div>
      <div className="px-20 py-5">
        <div className="container mx-auto flex">
          <aside className="w-1/4 p-4 border-r border-gray-200">
            <h2 className="font-semibold mb-4 text-sm text-gray-400">
              FILTER JOBS
            </h2>
            <div className="mb-4">
              <h3 className="font-medium mb-2">Job Types</h3>
              <ul className="accent-orange-500 grid grid-cols-2 gap-4 text-sm">
                <li>
                  <input type="checkbox" className="size-4" id="fulltime" />
                  <label htmlFor="fulltime" className="ml-2">
                    Full-time
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="parttime" />
                  <label htmlFor="parttime" className="ml-2">
                    Part-time
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="temporary" />
                  <label htmlFor="temporary" className="ml-2">
                    Temporary
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="intern" />
                  <label htmlFor="intern" className="ml-2">
                    Intern
                  </label>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-medium mb-2">Degree</h3>
              <ul className="accent-orange-500 grid grid-cols-2 gap-4 text-sm">
                <li>
                  <input type="checkbox" className="size-4" id="associate" />
                  <label htmlFor="associate" className="ml-2">
                    Associate
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="bachelor" />
                  <label htmlFor="bachelor" className="ml-2">
                    Bachelor's
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="masters" />
                  <label htmlFor="masters" className="ml-2">
                    Master's
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="phd" />
                  <label htmlFor="phd" className="ml-2">
                    Ph.D.
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="phd" />
                  <label htmlFor="phd" className="ml-2">
                    Pursuing Degree
                  </label>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-medium">Skill & qualifications</h3>
              <ul>{/* Add skills */}</ul>
            </div>
          </aside>
          <main className="w-3/4 p-4">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-gray-400">
                Showing 599 filtered jobs
              </h2>
              <div className="text-sm">
                Sort by:{" "}
                <select className="border-b border-gray-500 p-1">
                  <option value="relevance">Relevance</option>
                  <option value="date">Date</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div key={index} className="border border-gray-200 p-4">
                  <div className="flex justify-between mb-2">
                    <Link to="/company-profile-adobe">
                      <div className="flex space-x-2 items-center">
                        <img src={job.img} alt="" className="size-8" />
                        <h3 className="font-semibold">{job.company}</h3>
                      </div>
                    </Link>
                    <span className="text-gray-400">{job.posted}</span>
                  </div>
                  <Link to="/adobe-job-listing">
                    <h4 className="font-medium text-lg">{job.title}</h4>
                  </Link>
                  <div className="inline-flex space-x-10 text-gray-500 mt-4 mb-6">
                    <div className="inline-flex space-x-2">
                      <BuildingOffice2Icon className="size-5" />
                      <div className="">{job.cat}</div>
                    </div>
                    <div className="inline-flex space-x-2">
                      <MapPinIcon className="size-5" />
                      <div className="">{job.location}</div>
                    </div>
                    <div className="inline-flex space-x-2">
                      <ClockIcon className="size-5" />
                      <div className="">{job.type}</div>
                    </div>
                  </div>
                  <div className="mt-2 mb-4">
                    <h5 className="font-medium">Qualifications:</h5>
                    <ul className="list-disc list-inside marker:text-gray-400">
                      {job.qualifications.map((qual, idx) => (
                        <li key={idx}>{qual}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="space-x-2 text-gray-400 text-sm">
                <button className="px-2 py-1 hover:text-black">Page 1</button>
                <button className="px-2 py-1 hover:text-black">Page 2</button>
                <button className="px-2 py-1 hover:text-black">Page 3</button>
              </div>
              <div className="space-x-10 text-orange-500 text-sm font-medium">
                <button className="">Prev</button>
                <button className="">Next</button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <FooterSmall />
    </div>
  );
};

export default JobSeekersPage;
