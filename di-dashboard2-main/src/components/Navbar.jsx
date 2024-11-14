import React from "react";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import "flag-icons/css/flag-icons.min.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <MagnifyingGlassIcon className="size-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search anything..."
          className=" px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.962 17.986H18.772C19.0372 18.0009 19.3018 17.9476 19.5405 17.8311C19.7793 17.7147 19.9842 17.5391 20.1358 17.321C20.2874 17.1029 20.3806 16.8497 20.4066 16.5853C20.4325 16.321 20.3903 16.0544 20.284 15.811C19.924 14.723 18.489 13.418 18.489 12.134C18.489 9.284 18.489 8.534 17.086 6.858C16.6308 6.31899 16.0673 5.88185 15.432 5.575L14.649 5.195C14.5171 5.11628 14.4034 5.01054 14.3153 4.88472C14.2273 4.7589 14.1668 4.61586 14.138 4.465C14.0597 3.95741 13.7913 3.49859 13.3873 3.18159C12.9832 2.8646 12.4736 2.71316 11.962 2.758C11.4597 2.72807 10.9642 2.88634 10.5722 3.20194C10.1803 3.51754 9.91993 3.96784 9.84201 4.465C9.80693 4.62073 9.73805 4.76684 9.64024 4.89299C9.54243 5.01914 9.41809 5.12224 9.27601 5.195L8.49201 5.575C7.85744 5.88206 7.29458 6.31919 6.84001 6.858C5.43701 8.534 5.43701 9.284 5.43701 12.134C5.43701 13.418 4.06701 14.592 3.70701 15.745C3.49001 16.442 3.37001 17.986 5.18701 17.986H11.962Z"
            fill="#414141"
            stroke="#414141"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.226 17.986C15.2352 18.4171 15.157 18.8456 14.9962 19.2457C14.8354 19.6457 14.5952 20.0091 14.2903 20.314C13.9854 20.6188 13.6219 20.8588 13.2218 21.0195C12.8216 21.1802 12.3931 21.2583 11.962 21.249C11.5311 21.2581 11.1027 21.18 10.7027 21.0192C10.3028 20.8585 9.93949 20.6184 9.63473 20.3136C9.32997 20.0087 9.09005 19.6454 8.92941 19.2453C8.76878 18.8453 8.69075 18.417 8.70002 17.986"
            stroke="#414141"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="17" cy="6" r="3.5" fill="#EF3E32" stroke="white" />
        </svg>
        <span className="fi fis fi-gb size-6 w-6 h-6 text-2xl shadow-[inset_0_0_0_2px_rgba(0,0,0,0.06)] rounded-[100%] border-[none] bg-white" />
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200">
          <ChevronDownIcon className=" h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
              >
                French
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
              >
                Spanish
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
              >
                Hindi
              </a>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>

    <svg width="2" height="50" viewBox="0 0 2 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L1 49" stroke="#E5E5E5" stroke-linecap="round"/>
</svg>
<div className="bg-[#D9D9D9] rounded-full h-10 w-10"></div>
      </div>
    </div>
  );
};

export default Navbar;
