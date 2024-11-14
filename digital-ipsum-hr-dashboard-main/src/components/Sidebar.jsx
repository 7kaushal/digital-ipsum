import React from "react";
import { HomeIcon, CalendarIcon, UsersIcon, ChatBubbleLeftIcon, ChartBarSquareIcon, InformationCircleIcon, LifebuoyIcon, Cog6ToothIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col bg-white p-4 w-[260px] font-sans">
      <div className="flex items-center justify-center h-16 border-b mb-12 ">
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.5308 40.1396C27.5757 35.5503 26.4122 31.8183 24.9322 31.8038C23.4521 31.7894 22.2159 35.498 22.1711 40.0872C22.1262 44.6765 23.2897 48.4086 24.7697 48.423C26.2498 48.4375 27.486 44.7289 27.5308 40.1396Z"
          fill="#6172F3"
        />
        <path
          d="M18.9471 39.0973C21.4662 35.2609 22.5053 31.4923 21.2681 30.6799C20.0308 29.8675 16.9857 32.3189 14.4667 36.1553C11.9476 39.9917 10.9085 43.7602 12.1457 44.5727C13.383 45.3851 16.428 42.9337 18.9471 39.0973Z"
          fill="#6172F3"
        />
        <path
          d="M12.2791 33.5933C16.4725 31.7281 19.3842 29.1197 18.7826 27.7673C18.1811 26.4149 14.2941 26.8307 10.1007 28.696C5.90738 30.5612 2.99565 33.1696 3.5972 34.522C4.19874 35.8744 8.08578 35.4586 12.2791 33.5933Z"
          fill="#6172F3"
        />
        <path
          d="M18.2795 23.9743C18.5047 22.5114 15.01 20.7595 10.474 20.0613C5.93785 19.3631 2.07811 19.9831 1.85295 21.446C1.62779 22.9089 5.12247 24.6607 9.65855 25.3589C14.1946 26.0571 18.0544 25.4371 18.2795 23.9743Z"
          fill="#6172F3"
        />
        <path
          d="M19.9081 20.4897C20.8883 19.3807 18.8951 16.0178 15.4562 12.9785C12.0173 9.93919 8.43491 8.37443 7.45473 9.48349C6.47455 10.5926 8.46775 13.9555 11.9067 16.9948C15.3456 20.0341 18.928 21.5988 19.9081 20.4897Z"
          fill="#6172F3"
        />
        <path
          d="M23.1514 18.4526C24.5756 18.0496 24.7171 14.1429 23.4675 9.72682C22.2179 5.31073 20.0503 2.05749 18.6261 2.4605C17.2019 2.86351 17.0604 6.77015 18.31 11.1863C19.5596 15.6023 21.7272 18.8556 23.1514 18.4526Z"
          fill="#6172F3"
        />
        <path
          d="M31.9584 11.3238C33.2949 6.93317 33.2305 3.02449 31.8145 2.59348C30.3985 2.16246 28.1672 5.37232 26.8307 9.76291C25.4943 14.1535 25.5587 18.0622 26.9747 18.4932C28.3907 18.9242 30.622 15.7144 31.9584 11.3238Z"
          fill="#6172F3"
        />
        <path
          d="M38.2514 17.2569C41.7491 14.2854 43.8077 10.9621 42.8493 9.83418C41.891 8.70618 38.2787 10.2006 34.7811 13.172C31.2834 16.1435 29.2249 19.4669 30.1832 20.5949C31.1415 21.7229 34.7538 20.2284 38.2514 17.2569Z"
          fill="#6172F3"
        />
        <path
          d="M40.332 25.652C44.881 25.0434 48.4095 23.3608 48.2132 21.8937C48.017 20.4267 44.1702 19.7308 39.6212 20.3393C35.0723 20.9479 31.5437 22.6305 31.74 24.0976C31.9363 25.5646 35.783 26.2606 40.332 25.652Z"
          fill="#6172F3"
        />
        <path
          d="M46.2004 34.9413C46.8285 33.6011 43.9688 30.9358 39.813 28.9882C35.6573 27.0406 31.7792 26.5483 31.1511 27.8885C30.523 29.2288 33.3827 31.8941 37.5385 33.8417C41.6942 35.7892 45.5723 36.2816 46.2004 34.9413Z"
          fill="#6172F3"
        />
        <path
          d="M37.459 44.8297C38.712 44.0419 37.7474 40.2535 35.3045 36.3682C32.8616 32.4829 29.8654 29.972 28.6124 30.7598C27.3594 31.5476 28.324 35.336 30.7669 39.2213C33.2098 43.1066 36.206 45.6176 37.459 44.8297Z"
          fill="#6172F3"
        />
      </svg>
      <div className="flex justify-center p-3 text-2xl font-sans font-semibold">
        PICKHER
      </div>
      </div>
      <div className="mb-2">
        <span className="">Main Menu</span>
        <ul>
          <li>
            <a href="#" className="flex items-center p-2 text-[#667085] hover:bg-gray-200 rounded-md hover:text-[#101010] mb-3 mt-2">
            <HomeIcon className="size-6 mr-2"/>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-[#667085] hover:bg-gray-200 rounded-md hover:text-[#101010] mt-3 mb-3">
            <CalendarIcon className="size-6 mr-2"/>
              Schedule
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-[#667085] hover:bg-gray-200 rounded-md hover:text-[#101010] mt-3 mb-3">
            <UsersIcon className="size-6 mr-2"/>
              Employee
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-[#667085] hover:bg-gray-200 rounded-md hover:text-[#101010] mt-3 mb-3">
            <ChatBubbleLeftIcon className="size-6 mr-2"/>
              Message
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-[#667085] hover:bg-gray-200 rounded-md hover:text-[#101010] mt-3 mb-3">
            <ChartBarSquareIcon className="size-6 mr-2"/>
              Report
            </a>
          </li>
          </ul>
      </div>
      <div>
        <span className="">Management</span>
        <ul>
          <li>
            <a href="#" className="flex items-center p-2 text-[#667085] hover:bg-gray-200 rounded-md hover:text-[#101010] mb-3 mt-2">
            <InformationCircleIcon className="size-6 mr-2"/>
              Help
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-[#667085] hover:bg-gray-200 rounded-md hover:text-[#101010] mt-3 mb-3">
            <LifebuoyIcon className="size-6 mr-2"/>
              Support
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-[#667085] hover:bg-gray-200 rounded-md hover:text-[#101010] mt-3 mb-3">
            <Cog6ToothIcon className="size-6 mr-2"/>
              Settings
            </a>
          </li>
          </ul>
      </div>
      <div className="p-4 border-t">
                <div className="flex items-center mt-64 -ml-5">
                    <div className="bg-[#D9D9D9] rounded-full h-10 w-10">
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium">Admin</p>
                        <p className="text-sm text-[#667085]">admin@gmail.com</p>
                    </div>
                    <ArrowRightStartOnRectangleIcon className="size-5 text-[#667085] ml-4 mb-4"/>
                </div>
      </div>
    </div>
  );
};

export default Sidebar;