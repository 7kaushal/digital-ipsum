import React from "react";
import {
  MagnifyingGlassIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-white shadow-md p-4 font-sans">
      <div className="text-xl font-semibold">Dashboard</div>
      <div className="flex flex-row items-center space-x-4">
        {/* <div>
            <MagnifyingGlassIcon className="size-6"/>
        </div> */}

        <form class="max-w-md mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Search"
              required
            />
          </div>
        </form>
        <div className="flex flex-row space-x-2">
          <button className="bg-[#F6F8FA] text-[#101010] py-2 px-4 rounded-md flex items-center border border-gray-300 font-medium">
            <ArrowUpTrayIcon className="size-4 mr-2 " />
            Import
          </button>
          <button className="bg-[#F6F8FA] text-[#101010] py-2 px-4 rounded-md flex items-center border border-gray-300 font-medium">
            <ArrowUpTrayIcon className="size-4 mr-2 " />
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
