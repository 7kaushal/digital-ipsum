import React from "react";
import Navbar from "./Navbar";
import StarRating from "./StarRating";
import FooterSmall from "./FooterSmall";
import {
  MapPinIcon,
  BuildingOffice2Icon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const employers = [
  {
    company: "Adobe",
    img: "./src/assets/adobe.svg",
    cat: "Computer Hardware & Software",
    location: "San Jose, CA",
    type: "1000+ employees",
    description: [
      "10 years of experience in one of the following: digital advertising sales, third party channel strategy, or governance experience in a technology/media company. Ability to speak and write in English and Mandarin fluently and idiomatically.",
    ],
    ratings: 4.8,
    reviews: "1.2 K",
    jobs: 65,
  },
  {
    company: "Nvidia",
    img: "./src/assets/nvidia.svg",
    cat: "Computer Hardware & Software",
    location: "San Jose, CA",
    type: "1000+ employees",
    description: [
      "NVIDIA is like no place you’ve ever worked. You’ll solve some of the world’s hardest problems and discover never-before-seen ways to improve the quality of life for people everywhere. From healthcare to robots. Self-driving cars to blockbuster movies. And a growing list of new opportunities every single day...",
    ],
    ratings: 4,
    reviews: "1.2 K",
    jobs: 65,
  },
  {
    company: "Microsoft",
    img: "./src/assets/microsoft2.svg",
    cat: "Computer Hardware & Software",
    location: "San Jose, CA",
    type: "1000+ employees",
    description: [
      "Our drive to change the world unites us! Microsoft is the ideal place for people who have passion for their work and the desire to make an impact—in their careers, in the community and on the world. Microsoft is a unique company; and not just within the tech industry...",
    ],
    ratings: 4,
    reviews: "1.2 K",
    jobs: 65,
  },
  {
    company: "Cisco Systems",
    img: "./src/assets/cisco.svg",
    cat: "Computer Hardware & Software",
    location: "San Jose, CA",
    type: "1000+ employees",
    description: [
      "#WeAreCisco, where each person is unique, but we bring our talents to work as a team and make a difference. Here’s how we do it. We embrace digital, and help our customers implement change in their digital businesses. Some may think we’re “old” (30 years strong!) and only about hardware, but we’re also a software company. And a security...",
    ],
    ratings: 4,
    reviews: "1.2 K",
    jobs: 65,
  },
  {
    company: "John Deere",
    img: "./src/assets/jd.svg",
    cat: "Computer Hardware & Software",
    location: "San Jose, CA",
    type: "1000+ employees",
    description: [
      "Since its founding in 1837, John Deere has seen a great many changes in its business, its products, its services. Change always comes with opportunity. And Deere has always been ready and willing to embrace it. Yet, through it all, John Deere is still dedicated to those who are linked to the land – farmers and ranchers, landowners, builders, an...",
    ],
    ratings: 4,
    reviews: "1.2 K",
    jobs: 65,
  },
];

const Employers = () => {
  return (
    <div>
      <div className='bg-[url("./src/assets/bg5.svg")]'>
        <Navbar textColor="text-black" />
        <div className="my-10 px-40">
          <div className="flex">
            <button className="w-1/12 bg-[#E8E7E8] text-[#3B3A40] text-xs font-semibold text-left py-1 px-4">
              JOBS
            </button>
            <button className="w-1/12 bg-white text-xs font-semibold text-left py-1 px-4">
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
              FILTER EMPLOYERS
            </h2>
            <div className="mb-4">
              <h3 className="font-medium mb-2">Company Sectors</h3>
              <div className="flex mb-4 p-1 space-x-2 border">
                <MagnifyingGlassIcon className="size-5 m-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search sector"
                  className=" p-2"
                />
              </div>
              <ul className="accent-orange-500 space-y-2 text-sm">
                <li>
                  <input type="checkbox" className="size-4" id="fulltime" />
                  <label htmlFor="fulltime" className="ml-2">
                    Administrative
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="parttime" />
                  <label htmlFor="parttime" className="ml-2">
                    Arts & Design
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="temporary" />
                  <label htmlFor="temporary" className="ml-2">
                    Business
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="intern" />
                  <label htmlFor="intern" className="ml-2">
                    Consulting
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="intern" />
                  <label htmlFor="intern" className="ml-2">
                    Customer Services & Support
                  </label>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-medium mb-2">Global Company Size</h3>
              <ul className="accent-orange-500 space-y-2 text-sm">
                <li>
                  <input type="checkbox" className="size-4" id="associate" />
                  <label htmlFor="associate" className="ml-2">
                    1-50
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="bachelor" />
                  <label htmlFor="bachelor" className="ml-2">
                    51-200
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="masters" />
                  <label htmlFor="masters" className="ml-2">
                    201-500
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="phd" />
                  <label htmlFor="phd" className="ml-2">
                    501-1000
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="phd" />
                  <label htmlFor="phd" className="ml-2">
                    1001-5000
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="phd" />
                  <label htmlFor="phd" className="ml-2">
                    5001-10000
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="size-4" id="phd" />
                  <label htmlFor="phd" className="ml-2">
                    10000+
                  </label>
                </li>
              </ul>
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
            <div className="space-y-4 w-4/5">
              {employers.map((employer, index) => (
                <div key={index} className="border border-gray-200 p-4">
                  <div className="flex justify-between mb-2">
                    <div className="flex space-x-2 items-center">
                      <img src={employer.img} alt="" className="size-10" />
                      <div>
                        <h3 className="font-semibold">{employer.company}</h3>
                        <div className="inline-flex">
                          <p className="text-sm mr-2">{employer.ratings}</p>
                          <StarRating
                            rating={employer.ratings}
                            totalStars={5}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-x-8 inline-flex">
                      <div>
                        <h1 className="text-orange-500 font-medium text-end">
                          {employer.reviews}
                        </h1>
                        <p className="text-gray-400">Reviews</p>
                      </div>
                      <div>
                        <h1 className="text-orange-500 font-medium text-end">
                          {employer.jobs}
                        </h1>
                        <p className="text-gray-400">Jobs</p>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex space-x-10 text-gray-500 mt-4 mb-6">
                    <div className="inline-flex space-x-2">
                      <BuildingOffice2Icon className="size-5" />
                      <div className="">{employer.cat}</div>
                    </div>
                    <div className="inline-flex space-x-2">
                      <MapPinIcon className="size-5" />
                      <div className="">{employer.location}</div>
                    </div>
                    <div className="inline-flex space-x-2">
                      <UserIcon className="size-5" />
                      <div className="">{employer.type}</div>
                    </div>
                  </div>
                  <div className="mt-2 mb-4">
                    <h5 className="font-medium mb-4">Company Description:</h5>
                    <div className="text-sm mb-2">
                      {employer.description.join(" ")}
                    </div>
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

export default Employers;
