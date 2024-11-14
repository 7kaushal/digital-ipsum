import React from "react";
import {
  CalendarIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col bg-white p-4 w-[108px] font-sans items-center border-r-2">
      <div className="flex items-center justify-center h-16 mb-12 ">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0V11.0769H12V36L22.5 26V11.0769V0H0Z" fill="#057AFD" />
          <path d="M36 0H25.5V11L36 0Z" fill="#2FBCF0" />
        </svg>
      </div>
      <div className="mb-2">
        <ul>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[#667085] hover:bg-gray-200 rounded-md mb-3 mt-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 16.5C3 17.76 2.5 21.5 2.5 21.5C2.5 21.5 6.24 21 7.5 19.5C8.21 18.66 8.2 17.37 7.41 16.59C7.02131 16.219 6.50929 16.0046 5.97223 15.988C5.43516 15.9714 4.91088 16.1537 4.5 16.5ZM12 15L9 12C9.53214 10.6194 10.2022 9.29607 11 8.05C12.1652 6.18699 13.7876 4.65305 15.713 3.5941C17.6384 2.53514 19.8027 1.98637 22 2C22 4.72 21.22 9.5 16 13C14.7367 13.7984 13.3967 14.4684 12 15Z"
                  fill="#057AFD"
                  stroke="#057AFD"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 12H4C4 12 4.55 8.96999 6 7.99999C7.62 6.91999 11 7.99999 11 7.99999M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13"
                  fill="#057AFD"
                />
                <path
                  d="M9 12H4C4 12 4.55 8.96999 6 7.99999C7.62 6.91999 11 7.99999 11 7.99999M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13"
                  stroke="#057AFD"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="16" cy="8" r="2" fill="#EFF6FE" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[#667085] hover:bg-gray-200 rounded-md mt-3 mb-3"
            >
              <CalendarIcon className="size-6 text-[#414141]" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[#667085] hover:bg-gray-200 rounded-md hover:text-[#101010] mt-3 mb-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.942 13.021C21.1466 11.2288 20.808 9.41656 19.9701 7.8192C19.1322 6.22184 17.8336 4.91312 16.2428 4.0628C14.652 3.21247 12.8424 2.85977 11.0487 3.05045C9.25504 3.24113 7.56004 3.96639 6.18357 5.13215C4.8071 6.29791 3.81268 7.85039 3.3293 9.58821C2.84592 11.326 2.89588 13.169 3.47271 14.8781C4.04954 16.5872 5.12661 18.0835 6.56422 19.173C8.00183 20.2624 9.73364 20.8948 11.535 20.988" stroke="#414141" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V12L15 15M15 19L17 21L21 17" stroke="#414141" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[#667085] hover:bg-gray-200 rounded-md hover:text-[#101010] mt-3 mb-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 6H8M10 10H8M4 18.646V8.054C4 5.2 4 3.774 4.879 2.887C5.757 2 7.172 2 10 2H14C16.828 2 18.243 2 19.121 2.887C20 3.773 20 5.2 20 8.054V18.646C20 20.157 20 20.913 19.538 21.211C18.783 21.697 17.616 20.677 17.029 20.307C16.544 20.001 16.302 19.849 16.032 19.84C15.742 19.83 15.495 19.977 14.971 20.307L13.06 21.512C12.544 21.837 12.287 22 12 22C11.713 22 11.456 21.837 10.94 21.512L9.03 20.307C8.544 20.001 8.302 19.849 8.033 19.84C7.742 19.83 7.495 19.977 6.971 20.307C6.384 20.677 5.217 21.697 4.461 21.211C4 20.913 4 20.158 4 18.646Z" stroke="#414141" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 9.875C13.672 9.875 13 10.463 13 11.188C13 11.912 13.672 12.5 14.5 12.5C15.328 12.5 16 13.088 16 13.813C16 14.537 15.328 15.125 14.5 15.125M14.5 9.875C15.153 9.875 15.709 10.24 15.915 10.75M14.5 9.875V9M14.5 15.125C13.847 15.125 13.291 14.76 13.085 14.25M14.5 15.125V16" stroke="#414141" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[#667085] hover:bg-gray-200 rounded-md hover:text-[#101010] mt-3 mb-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12V17.09C20 17.938 20 18.36 19.874 18.699C19.7738 18.9676 19.617 19.2116 19.4143 19.4143C19.2116 19.617 18.9676 19.7738 18.699 19.874C18.36 20 17.937 20 17.09 20H12C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12Z" stroke="#414141" stroke-width="1.5"/>
<path d="M9 11H15M12 15H15" stroke="#414141" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </a>
          </li>
        </ul>
      </div>
      <div className="mt-[475px]">
        <ul>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[#414141] hover:bg-gray-200 rounded-md hover:text-[#101010] mb-3"
            >
              <Cog6ToothIcon className="size-6" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-[#414141] hover:bg-gray-200 rounded-md hover:text-[#101010] mb-3"
            >
              <ArrowRightStartOnRectangleIcon className="size-6" />
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
