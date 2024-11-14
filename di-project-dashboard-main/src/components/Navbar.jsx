import React from "react";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import NotificationsIcon from '@mui/icons-material/Notifications';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2 bg-gray-100 w-[710px] border border-gray-200 p-1 rounded-lg h-10">
        <MagnifyingGlassIcon className="size-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search for anything..."
          className="h-9 px-4 py-2 bg-gray-100 w-[700px] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>
      <div className="flex items-center space-x-2">
        <NotificationsIcon/>
        <div className="bg-gray-500 rounded-full h-8 w-8"></div>
        <span className="font-medium text-sm">Ellise Beverly</span>
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-1 py-1 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200">
          <ChevronDownIcon className=" h-4 w-4 text-gray-400" aria-hidden="true" />
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
                Help
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
              >
                Profile
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
              >
                Log Out
              </a>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>

      </div>
    </div>
  );
};

export default Navbar;
