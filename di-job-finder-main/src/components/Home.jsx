import React from "react";
import Navbar from "./Navbar";
import {
  MapPinIcon,
  ChevronDownIcon,
  ClockIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Footer from "./Footer";

const testimonials = [
  {
    text: "Moving to a new place is scary, but using Oval to find a job within one week of moving in has been such a blessing to me and my family!",
    author: "James Lyons",
    position: "Finance",
  },
  {
    text: "Mowithin one week of moving in has been such a blessing to me and my family!",
    author: "XYZ",
    position: "Finance",
  },
];

const companies = [
  {
    name: "Uber",
    logo: "./src/assets/uber.svg",
    description:
      "We have end-to-end solutions that can keep up with you and your standards.",
  },
  {
    name: "Shopify",
    logo: "./src/assets/shopify.svg",
    description:
      "We have end-to-end solutions that can keep up with you and your standards.",
  },
  {
    name: "Airbnb",
    logo: "./src/assets/airbnb.svg",
    description:
      "We have end-to-end solutions that can keep up with you and your standards.",
  },
];

const partners = [
  "Microsoft",
  "Google",
  "GE",
  "Automattic",
  "Philips",
  "Intel",
];

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div>
      {/* Hero */}
      <div className='bg-[url("./src/assets/bg1.svg")] bg-[#D7E5E2] w-full h-full relative'>
        <Navbar textColor="text-white" />

        <div className="flex flex-col p-20">
          <h1 className="text-5xl font-semibold w-1/3 text-white mb-8">
            Find the Job that Fits Your Life
          </h1>
          <p className="text-lg text-gray-300 w-1/2 mb-20">
            Millions of people are searching for jobs, salary information,
            company reviews, and interview questions. See what others are
            looking for on Oval today.
          </p>

          <div className="w-2/3 z-10 mb-20">
            <div className="flex">
              <button className="w-1/5 bg-gray-100 text-gray-800 text-xs font-semibold text-left py-1 px-4">
                JOBS
              </button>
              <button className="w-1/5 bg-gray-400 text-gray-800 text-xs font-semibold text-left py-1 px-4">
                EMPLOYERS
              </button>
            </div>
            <div className="flex mb-4 bg-white w-full p-2 space-x-2">
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
                className="w-5/12 p-2"
              />
              <button className="bg-orange-400 text-white py-2 px-2 w-1/6 text-sm font-medium">
                Find Job
              </button>
            </div>
          </div>

          <div className="mt-8 text-left w-2/3 space-x-4 inline-flex">
            <div>
              <h2 className=" font-semibold text-white mb-1">
                Trending Searches
              </h2>
              <a href="#" className="text-orange-300 text-sm">
                View more jobs
              </a>
            </div>
            <div className="flex flex-wrap w-1/2">
              <button className="bg-white text-gray-800 text-sm py-2 px-4 m-1">
                work from home
              </button>
              <button className="bg-white text-gray-800 text-sm py-2 px-4 m-1">
                no experience
              </button>
              <button className="bg-white text-gray-800 text-sm py-2 px-4 m-1">
                remote work
              </button>
              <button className="bg-white text-gray-800 text-sm py-2 px-4 m-1">
                healthcare job
              </button>
              <button className="bg-white text-gray-800 text-sm py-2 px-4 m-1">
                online job
              </button>
              <button className="bg-white text-gray-800 text-sm py-2 px-4 m-1">
                no life
              </button>
            </div>
          </div>
        </div>

        <img
          src="./src/assets/image.svg"
          alt="Header SVG"
          className="absolute bottom-0 right-0 z-0 h-[600px]"
        />
      </div>
      {/* How it Works */}
      <div className="bg-white p-20 w-full">
        <div className="w-screen-lg mx-auto inline-flex space-x-40">
          <h2 className="text-xl text-gray-400 font-semibold mb-4">
            How Oval Works for You
          </h2>
          <div className="inline-flex space-x-4">
            <div className="text-center inline-flex">
              <div className="text-sm font-semibold text-orange-500 mb-2 mr-8">
                1
              </div>
              <p className="text-lg font-medium">Create Oval profile</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="ml-20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3076 16.3074L19.923 11.692L15.3076 7.07666"
                  stroke="#B3B1B7"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.23083 11.7305L18.7693 11.7305"
                  stroke="#B3B1B7"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="text-center inline-flex">
              <div className="text-sm font-semibold text-orange-500 mb-2 mr-8">
                2
              </div>
              <p className="text-lg font-medium">Find job you love</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="ml-20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3076 16.3074L19.923 11.692L15.3076 7.07666"
                  stroke="#B3B1B7"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.23083 11.7305L18.7693 11.7305"
                  stroke="#B3B1B7"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="text-center inline-flex">
              <div className="text-sm font-semibold text-orange-500 mb-2 mr-8">
                3
              </div>
              <p className="text-lg font-medium">Get hired</p>
            </div>
          </div>
        </div>
      </div>
      {/* Job Posting */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-screen-lg mx-auto">
          <div className="inline-flex w-full justify-between">
            <h2 className="text-4xl font-semibold mb-24 w-72">
              New jobs daily you might love
            </h2>
            <div className="inline-flex mt-10">
              <p className="text-gray-400 mr-2 ">Jobs Category: </p>
              <p className=""> Internet & Technology</p>
              <ChevronDownIcon className="size-3 mt-2 ml-2 text-gray-400" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="bg-white p-4">
              <div className="inline-flex mb-4">
                <img src="./src/assets/adobe.svg" className="" />
                <h3 className="text-sm font-medium p-1 ml-2 mr-28">Adobe</h3>
                <p className="text-sm text-gray-400">3 days ago</p>
              </div>
              <h3 className="text-lg font-semibold w-4/5 mb-4">
                Sales Engineer, Application Modernization, Healthcare, Google
                Cloud
              </h3>
              <div className="inline-flex">
                <MapPinIcon className="size-6 text-gray-500 mr-2" />
                <p className="text-gray-600 mr-10">San Jose, CA </p>
                <ClockIcon className="size-6 text-gray-500 mr-2" />
                <p className="text-gray-600"> Fulltime</p>
              </div>
            </div>
            <div className="bg-white p-4">
              <div className="inline-flex mb-4">
                <img src="./src/assets/mercedes.svg" className="size-8" />
                <h3 className="text-sm font-medium p-1 ml-2 mr-12">
                  Mercedes-Benz
                </h3>
                <p className="text-sm text-gray-400">3 days ago</p>
              </div>
              <h3 className="text-lg font-semibold  mb-4">
                Head of Third Party Strategy and Deals, Go-to-Market
              </h3>
              <div className="inline-flex mt-6">
                <MapPinIcon className="size-6 text-gray-500 mr-2" />
                <p className="text-gray-600 mr-10">Aurora, CO </p>
                <ClockIcon className="size-6 text-gray-500 mr-2" />
                <p className="text-gray-600"> Fulltime</p>
              </div>
            </div>
            <div className="bg-white p-4">
              <div className="inline-flex mb-4">
                <img src="./src/assets/dropbox.svg" className="size-8" />

                <h3 className="text-sm font-medium p-1 ml-2 mr-28">Dropbox</h3>
                <p className="text-sm text-gray-400">3 days ago</p>
              </div>
              <h3 className="text-lg font-semibold mb-4">
                Marketing Associate Director - Consumer Experience
              </h3>
              <div className="inline-flex mt-6">
                <MapPinIcon className="size-6 text-gray-500 mr-2" />
                <p className="text-gray-600 mr-10">Lowell, MA </p>
                <ClockIcon className="size-6 text-gray-500 mr-2" />
                <p className="text-gray-600"> Fulltime</p>
              </div>
            </div>
            <div className="bg-white p-4 h-fit">
              <div className="inline-flex mb-4">
                <img src="./src/assets/spotify.svg" className="size-8" />

                <h3 className="text-sm font-medium p-1 ml-2 mr-28">Spotify</h3>
                <p className="text-sm text-gray-400">3 days ago</p>
              </div>
              <h3 className="text-lg font-semibold mb-4">
                At Spotify, we're focused on providing the right music for every
                moment. We've connected millions of people to their favorite
                songs and created a service that people use to discover and
                share music they love.
              </h3>
              <div className="inline-flex mt-6">
                <MapPinIcon className="size-6 text-gray-500 mr-2" />
                <p className="text-gray-600 mr-6">Stockholm, Sweden </p>
                <ClockIcon className="size-6 text-gray-500 mr-2" />
                <p className="text-gray-600"> Fulltime</p>
              </div>
              <div className="mt-8 text-sm ">
                5 job openings,
                <a href="#" className="text-orange-500 underline ml-2">
                  Apply Now
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 h-fit">
                <div className="inline-flex mb-4">
                  <img src="./src/assets/microsoft2.svg" className="size-8" />

                  <h3 className="text-sm font-medium p-1 ml-2 mr-28">
                    Microsoft
                  </h3>
                  <p className="text-sm text-gray-400">3 days ago</p>
                </div>
                <h3 className="text-lg font-semibold mb-4">
                  G Suite Specialist, Google Cloud Customer Engineering
                </h3>
                <div className="inline-flex mt-6">
                  <MapPinIcon className="size-6 text-gray-500 mr-2" />
                  <p className="text-gray-600 mr-10">Atlanta, GA </p>
                  <ClockIcon className="size-6 text-gray-500 mr-2" />
                  <p className="text-gray-600"> Fulltime</p>
                </div>
              </div>
              <div className="bg-white p-4 h-fit">
                <div className="inline-flex mb-4">
                  <img src="./src/assets/ebay.svg" className="size-8" />

                  <h3 className="text-sm font-medium p-1 ml-2 mr-28">Ebay</h3>
                  <p className="text-sm text-gray-400">3 days ago</p>
                </div>
                <h3 className="text-lg font-semibold mb-4">
                  Sales Engineer, Application Modernization, Healthcare, Google
                  Cloud
                </h3>
                <div className="inline-flex mt-6">
                  <MapPinIcon className="size-6 text-gray-500 mr-2" />
                  <p className="text-gray-600 mr-10">Austin, TX </p>
                  <ClockIcon className="size-6 text-gray-500 mr-2" />
                  <p className="text-gray-600"> Fulltime</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 h-fit">
                <div className="inline-flex mb-4">
                  <img src="./src/assets/airbnb2.svg" className="size-8" />

                  <h3 className="text-sm font-medium p-1 ml-2 mr-28">Airbnb</h3>
                  <p className="text-sm text-gray-400">3 days ago</p>
                </div>
                <h3 className="text-lg font-semibold mb-4">
                  Brand Marketing Manager – Services Portfolio
                </h3>
                <div className="inline-flex mt-6">
                  <MapPinIcon className="size-6 text-gray-500 mr-2" />
                  <p className="text-gray-600 mr-10">Aurora, CO </p>
                  <ClockIcon className="size-6 text-gray-500 mr-2" />
                  <p className="text-gray-600"> Fulltime</p>
                </div>
              </div>
              <div className="bg-transparent p-4 h-fit text-center items-center">
                <span className="text-8xl">+148</span>
                <div className="text-gray-500 mt-4">
                  Daily Jobs:
                  <a href="#" className="text-black underline ml-2">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-white bg-[url('./src/assets/bg3.svg')] p-20 relative">
        <div className=" bg-white h-[580px] p-10">
          <div className="bg-[url('./src/assets/testimonial.svg')] h-[500px] w-[1140px] p-8">
            <div className="bg-white p-8 items-center h-[450px] w-1/3 ">
              <div className="mb-8">
                <svg
                  width="62"
                  height="62"
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.2965 21V31.2965C29.2965 38.5647 25.9653 42.653 19 41.5173L19.6057 37.2019C23.2397 37.5047 24.8297 34.9306 24.2997 31.2965H19V21H29.2965ZM43 21V31.2965C43 38.5647 39.6688 42.653 32.7035 41.5173L33.3091 37.2019C36.9432 37.5047 38.5331 34.9306 38.0032 31.2965H32.7035V21H43Z"
                    fill="#FFCB84"
                  />
                  <rect
                    opacity="0.48"
                    x="1"
                    y="1"
                    width="60"
                    height="60"
                    stroke="#FFCB84"
                  />
                </svg>
              </div>
              <div className="flex">
                <div
                  className="w-1/12 text-2xl border mx-2 p-1 border-black bg-gray-100 h-fit cursor-pointer"
                  onClick={handlePrev}
                >
                  &lt;
                </div>
                <div className="w-10/12">
                  <p className="text-2xl font-semibold mb-4">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">
                      {testimonials[currentTestimonial].author}
                    </span>
                    , {testimonials[currentTestimonial].position}
                  </p>
                </div>
                <div
                  className="w-1/12 text-2xl border mx-2 p-1 border-black bg-gray-100 h-fit cursor-pointer"
                  onClick={handleNext}
                >
                  &gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Clients */}
      <div className="min-h-screen bg-gray-100 flex flex-col p-20 items-center justify-center">
        <h1 className="text-4xl font-semibold w-2/5 mb-8">
          Companies we’ve helped to hire the best candidate
        </h1>
        <p className="text-lg mb-4 w-1/3">
          We have end-to-end solutions that can keep up with you and your
          standards.
        </p>
        <a href="#" className="text-orange-500 underline mb-8">
          Post a Job
        </a>
        <div className="flex space-x-12 p-10 mb-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white p-6 flex flex-col items-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 mb-8"
              />

              <p className="text-center w-3/4">{company.description}</p>
            </div>
          ))}
        </div>
        <div className="flex space-x-16 p-8">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={`./src/assets/${partner.toLowerCase()}.svg`}
              alt={partner}
              className="h-12"
            />
          ))}
        </div>
        <p className="mt-8">
          Some of the many companies that rely on Oval for hiring.
        </p>
      </div>
      {/* Find Jobs */}
      <div className="bg-gray-100 p-20">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-4xl w-3/5">
              You’re now discovering jobs from{" "}
              <span className="underline font-semibold">Indonesia</span>
            </h3>
          </div>
          <button className="bg-orange-500 text-white py-4 px-8 inline-flex">
            <MagnifyingGlassIcon className="size-6 mr-2" />
            Find Job Now
          </button>
        </div>
      </div>
      {/*Footer */}
      <Footer />
    </div>
  );
};

export default Home;
