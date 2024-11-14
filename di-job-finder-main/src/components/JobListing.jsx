import React from "react";
import Navbar from "./Navbar";
import FooterSmall from "./FooterSmall";
import StarRating from "./StarRating";
import {
  ShareIcon,
  BookmarkIcon,
  BuildingOffice2Icon,
  MapPinIcon,
  ClockIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

const JobListing = () => {
  return (
    <div>
      <div>
        <Navbar textColor="text-black" />
      </div>
      <div className="p-20">
        <div className="inline-flex space-x-8">
          <div className="mx-auto bg-white border p-8 w-3/4">
            <div className="flex justify-between mb-4">
              <div className="inline-flex space-x-4 items-center">
                <img src="./src/assets/adobe.svg" className="size-10" alt="" />
                <h3 className="font-semibold">Adobe</h3>
                <p className="text-sm mr-2">4.8</p>
                <StarRating rating={4.8} totalStars={5} />
              </div>
              <div className="space-x-4 inline-flex">
                <span className="text-gray-500 text-sm font-medium inline-flex items-center">
                  <ShareIcon className="size-4 mr-2" />
                  Share
                </span>
                <span className="text-gray-500 text-sm font-medium inline-flex items-center">
                  <BookmarkIcon className="size-4 mr-2" />
                  Save
                </span>
              </div>
            </div>
            <div className="border-b">
              <h1 className="text-2xl font-semibold text-gray-800">
                Technical Program Manager, Mobile Software Engineering
              </h1>
              <div className="inline-flex space-x-8 mb-4 mt-4">
                <div className="inline-flex">
                  <BuildingOffice2Icon className="size-5 text-gray-500 mr-2" />
                  <p className="text-gray-600">Internet & Technology</p>
                </div>
                <div className="inline-flex">
                  <MapPinIcon className="size-5 text-gray-500 mr-2" />
                  <p className="text-gray-600">San Jose, CA</p>
                </div>
                <div className="inline-flex">
                  <ClockIcon className="size-5 text-gray-500 mr-2" />
                  <p className="text-gray-600">Fulltime</p>
                </div>
              </div>
            </div>

            <div className="mb-6 mt-4">
              <h2 className="font-medium text-gray-800">
                Minimum Qualifications:
              </h2>
              <ul className="list-disc list-inside text-gray-700 mt-4 marker:text-gray-400 marker:text-sm">
                <li>
                  Bachelor’s degree in Computer Science or related technical
                  field, or equivalent practical experience.
                </li>
                <li>
                  Experience in Program Management on technical cross-functional
                  projects.
                </li>
                <li>
                  Experience with one of the following: mobile application
                  software development, mobile release management, mobile
                  operating systems and app ecosystems, and/or software hardware
                  integration (SDK/frameworks, embedded software layers, or
                  devices).
                </li>
              </ul>
            </div>
            <div className="mb-6 mt-8">
              <h2 className="font-medium text-gray-800">
                Preferred Qualifications:
              </h2>
              <ul className="list-disc list-inside text-gray-700 mt-2 marker:text-gray-400 marker:text-sm">
                <li>
                  Bachelor’s degree in Computer Science or related technical
                  field, or equivalent practical experience.
                </li>
                <li>
                  Experience in Program Management on technical cross-functional
                  projects.
                </li>
                <li>
                  Experience with one of the following: mobile application
                  software development, mobile release management, mobile
                  operating systems and app ecosystems, and/or software hardware
                  integration (SDK/frameworks, embedded software layers, or
                  devices).
                </li>
                <li>
                  Technical experience within the mobile technology stack.
                </li>
                <li>
                  Experience developing features from conception to launch,
                  managing execution and delivering high quality products.
                </li>
                <li>
                  Ability to exercise technical judgment in solving software
                  engineering challenges.
                </li>
                <li>
                  Ability to be an influential member of a highly integrated
                  team composed of both technical and non-technical members.
                </li>
              </ul>
            </div>
            <div className="mb-6 mt-8">
              <h2 className="font-medium text-gray-800">About the Job</h2>
              <div className="text-gray-700 mt-2 space-y-6">
                <p>
                  Google builds products that help create opportunities for
                  everyone, whether they’re down the street or across the globe.
                </p>
                <p>
                  As a Technical Program Manager for mobile software
                  engineering, you’ll manage the development of products that
                  get our users the information they need, no matter where they
                  are — including phones, tablets, TVs, wearable devices, cars,
                  and the Internet of Things. In this role, you’ll plan
                  requirements, identify risks, manage schedules, and
                  communicate clearly with project stakeholders. And, thanks to
                  Google’s industry leading benefits and ample opportunities for
                  personal and professional development, you’ll learn and grow
                  alongside talented teammates who share your attention to
                  detail and appetite for problem-solving.
                </p>
                <p>
                  Candidates of all experience levels are encouraged to apply.
                  We’ll consider your experience to best match you with open
                  roles.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Working at Adobe
              </h2>
              <div className="inline-flex space-x-8">
                <div className="text-gray-700 mt-2 space-y-6 w-3/5">
                  <p>
                    We started out in Sweden in 2010, selling high-quality,
                    healthy food supplements. Since then we’ve sent over 1
                    million orders and succeeded in growing into one of Europe’s
                    leading health and dietary supplement companies - constantly
                    innovating to develop the best products backed by science.
                  </p>
                  <p>We are located in the heart of Copenhagen, Denmark.</p>
                </div>
                <div>
                  <img src="./src/assets/worklife.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/5 h-fit p-2 space-y-4">
            <div className="space-y-2">
              <span className="p-2">Location</span>
              <div className="w-full h-28 bg-black"></div>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <BanknotesIcon className="size-5 text-gray-800" />
              <p className="text-gray-800 font-medium text-sm">$48K-$89K</p>
            </div>

            <button className="bg-orange-600 w-full text-sm text-white py-2 px-4">
              Apply Job
            </button>
          </div>
        </div>
        <div className="mx-auto mt-10 px-10 py-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Similar Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4">
              <div className="inline-flex mb-4">
                <img src="./src/assets/mercedes.svg" className="size-8" />
                <h3 className="text-sm font-medium p-1 ml-2 mr-28">
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

                <h3 className="text-sm font-medium p-1 ml-2 mr-36">Dropbox</h3>
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
                <img src="./src/assets/microsoft2.svg" className="size-8" />

                <h3 className="text-sm font-medium p-1 ml-2 mr-36">
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
          </div>
        </div>
      </div>
      <FooterSmall />
    </div>
  );
};

export default JobListing;
