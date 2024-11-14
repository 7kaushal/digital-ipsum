import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/outline";

const PricingPage = () => {
  return (
    <div className="bg-white">
      <Navbar textColor="text-black" />
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex p-16 space-x-8">
          <h1 className="text-5xl font-semibold mb-4">
            The largest job board for the best candidates
          </h1>
          <div>
            <p className=" text-gray-600 mb-4">
              Aliquam ut justo fringilla, porta lectus ac, aliquam elit. Sed
              posuere mi vel porta aliquam.
            </p>
            <p className=" text-gray-600">
              Nullam in felis pretium, faucibus nunc quis, semper purus. Aliquam
              sit amet urna sed nulla fermentum finibus. Nulla ac nulla
              placerat, sodales est nec, pellentesque tortor.
            </p>
          </div>
        </div>

        <div className="bg-gray-200 w-full h-96 mb-20"></div>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold">
            Choose the plan that’s right for your business
          </h2>
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-12 accent-orange-600 bg-gray-100 p-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="quarterly"
                  name="plan"
                  defaultChecked
                  className="form-radio h-4 w-4 text-orange-600"
                />
                <label htmlFor="quarterly" className="ml-2 text-gray-700">
                  Quarterly Plans <br />{" "}
                  <span className="text-orange-600 text-sm">
                    Save up to 13%
                  </span>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="monthly"
                  name="plan"
                  className="form-radio h-4 w-4 text-orange-600"
                />
                <label htmlFor="monthly" className="ml-2 text-gray-700">
                  Monthly Plans
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          <div className="border-r p-6 flex flex-col">
            <ul className="mt-36 space-y-4 text-gray-700">
              <li className="flex items-center text-gray-500">
                See how Oval plan stacks up against the competition and saves
                you money
              </li>
              <li className="text-sm text-gray-400 font-medium">JOB BOARD</li>
              <li className="flex items-center">Job board slot</li>
              <li className="text-sm text-gray-400 font-medium">
                MANAGED RECRUITING
              </li>
              <li className="flex items-center">Dedicated Talent Manager</li>
              <li className="flex items-center">Candidate matching</li>
              <li className="flex items-center">
                Managed interview scheduling
              </li>
              <li className="flex items-center">ATS integration</li>
            </ul>
          </div>
          <div className="border-r p-6 flex flex-col">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm line-through">$250</span>
              <span className="text-4xl font-bold">$155</span>
              <p className="mt-4 text-sm text-center text-gray-600">
                Per month <br /> Billed quarterly{" "}
              </p>
            </div>

            <ul className="mt-6 space-y-2 text-gray-500">
              <li className="flex items-center text-black">
                <CheckCircleIcon className="text-green-500 size-5 mr-2" />
                Company Account
              </li>
              <li className=" text-center">Job Board</li>
              <li className="text-center">Curated Talent Pool</li>
            </ul>
            <ul className="mt-16 space-y-4">
              <li className=" text-center">-</li>
            </ul>
            <ul className="mt-16 space-y-8 mb-8">
              <li className="text-center">-</li>
              <li className="text-center">-</li>
              <li className="text-center">-</li>
              <li className="text-center">-</li>
            </ul>

            <button className="mt-auto bg-orange-500 text-white py-2">
              Subscribe
            </button>
          </div>
          <div className="border-r p-6 flex flex-col">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm line-through">$359</span>
              <span className="text-4xl font-bold">$299</span>
              <p className="mt-4 text-sm text-center text-gray-600">
                Per month <br /> Billed quarterly{" "}
              </p>
            </div>

            <ul className="mt-6 space-y-2 text-gray-500">
              <li className="text-center">Company Account</li>
              <li className="flex items-center text-black">
                <CheckCircleIcon className="text-green-500 size-5 ml-8 mr-2" />
                Job Board
              </li>
              <li className="text-center">Curated Talent Pool</li>
            </ul>
            <ul className="mt-16 space-y-4">
              <li className=" text-center">3</li>
            </ul>
            <ul className="mt-16 space-y-8 mb-8">
              <li className="text-center">-</li>
              <li className="text-center">-</li>
              <li className="text-center">-</li>
              <li className="text-center">-</li>
            </ul>

            <button className="mt-auto bg-orange-500 text-white py-2">
              Subscribe
            </button>
          </div>
          <div className="border-r p-6 flex flex-col">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm line-through">$599</span>
              <span className="text-4xl font-bold">$329</span>
              <p className="mt-4 text-sm text-center text-gray-600">
                Per month <br /> Billed quarterly{" "}
              </p>
            </div>

            <ul className="mt-6 space-y-2 text-gray-500">
              <li className="flex items-center text-black">
                <CheckCircleIcon className="text-green-500 size-5 mr-2" />
                Company Account
              </li>
              <li className="flex items-center text-black">
                <CheckCircleIcon className="text-green-500 size-5 ml-8 mr-2" />
                Job Board
              </li>
              <li className="text-center">Curated Talent Pool</li>
            </ul>
            <ul className="mt-16 space-y-4">
              <li className=" text-center">6</li>
            </ul>
            <ul className="mt-16 space-y-8 mb-8">
              <li className="text-center">-</li>
              <li className="text-center">-</li>
              <li className="text-center">-</li>
              <li className="text-center">-</li>
            </ul>

            <button className="mt-auto bg-orange-500 text-white py-2">
              Subscribe
            </button>
          </div>
          <div className="border-r p-6 flex flex-col">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm line-through">$799</span>
              <span className="text-4xl font-bold">$699</span>
              <p className="mt-4 text-sm text-center text-gray-600">
                Per month <br /> Billed Annually{" "}
              </p>
            </div>

            <ul className="mt-6 space-y-2 text-gray-500">
              <li className="flex items-center text-black">
                <CheckCircleIcon className="text-green-500 size-5 mr-2" />
                Company Account
              </li>
              <li className="flex items-center text-black">
                <CheckCircleIcon className="text-green-500 size-5 ml-8 mr-2" />
                Job Board
              </li>
              <li className="flex items-center text-black">
                <CheckCircleIcon className="text-green-500 size-5 mr-2" />
                Curated Talent Pool
              </li>
            </ul>
            <ul className="mt-16 space-y-4">
              <li className=" text-center">10</li>
            </ul>
            <ul className="mt-16 space-y-8 mb-8">
              <li className="text-center">
                <CheckIcon className="size-5 mx-20 text-green-500" />
              </li>
              <li className="text-center">
                <CheckIcon className="size-5 mx-20 text-green-500" />
              </li>
              <li className="text-center">
                <CheckIcon className="size-5 mx-20 text-green-500" />
              </li>
              <li className="text-center">
                <CheckIcon className="size-5 mx-20 text-green-500" />
              </li>
            </ul>

            <button className="mt-auto bg-gray-100 py-2">Contact us</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
