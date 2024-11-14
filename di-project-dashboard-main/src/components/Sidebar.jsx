import React from 'react';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import WindowIcon from '@mui/icons-material/Window';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import FlagIcon from '@mui/icons-material/Flag';


const Sidebar = () => {
  return (
    <div className="w-[250px] bg-white">
      <div className="p-6 inline-flex">
        <div className="bg-pink-600 size-8 p-2 px-1.5 rounded-lg mr-5">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 1.5C11 0.671573 10.3284 0 9.5 0C8.67157 0 8 0.671573 8 1.5C8 2.32843 8.67157 3 9.5 3C10.3284 3 11 2.32843 11 1.5ZM15.7054 3.71505C16.0974 3.32349 16.0983 2.68775 15.7074 2.29509C15.3165 1.90242 14.6819 1.90152 14.2899 2.29308L11.2946 5.28495C10.9026 5.67651 10.9017 6.31225 11.2926 6.70491C11.6835 7.09758 12.3181 7.09848 12.7101 6.70692L15.7054 3.71505ZM1.5 8C2.32843 8 3 8.67157 3 9.5C3 10.3284 2.32843 11 1.5 11C0.671573 11 0 10.3284 0 9.5C0 8.67157 0.671573 8 1.5 8ZM18 9.5C18 8.67157 17.3284 8 16.5 8C15.6716 8 15 8.67157 15 9.5C15 10.3284 15.6716 11 16.5 11C17.3284 11 18 10.3284 18 9.5ZM5.26757 11.2981C5.63356 10.9318 6.20842 10.903 6.60728 11.2121L6.70311 11.2964C7.06905 11.6652 7.09595 12.2384 6.78796 12.6339L6.70399 12.7289L3.72399 15.7045C3.35913 16.0688 2.78647 16.0962 2.39035 15.7871L2.29441 15.702L2.21066 15.6067C1.92925 15.2427 1.92984 14.7305 2.21209 14.3672L2.29605 14.2721L5.26757 11.2981ZM12.6301 11.212C12.2675 10.9299 11.7561 10.9293 11.3927 11.2106L11.2975 11.2943L11.2126 11.3902C10.904 11.7861 10.9313 12.3584 11.2951 12.7231L14.2659 15.7015L14.3613 15.786C14.7586 16.0958 15.3341 16.0694 15.7011 15.7057C16.0976 15.3128 16.0999 14.6734 15.7062 14.2777L12.7252 11.2959L12.6301 11.212ZM11 16.5C11 15.6716 10.3284 15 9.5 15C8.67157 15 8 15.6716 8 16.5C8 17.3284 8.67157 18 9.5 18C10.3284 18 11 17.3284 11 16.5ZM2.29937 2.29434C2.66657 1.93057 3.24233 1.90418 3.6398 2.21405L3.73523 2.29852L6.7057 5.27577L6.78967 5.37132C7.09738 5.76905 7.06725 6.34246 6.70063 6.70566C6.33343 7.06943 5.75767 7.09582 5.3602 6.78595L5.26477 6.70148L2.2943 3.72423L2.21033 3.62868C1.90262 3.23095 1.93275 2.65754 2.29937 2.29434Z" fill="white"/>
</svg>

        </div>
        <div className="text-xl font-semibold">Your Logo</div>
      </div>
      <nav className="mt-6 text-gray-500">
        <span className='ml-6'>MAIN NAVIGATION</span>
        <ul>
          <li className="flex items-center p-4 text-gray-600">
            <a href="" className="w-[220px] p-2 rounded-lg hover:bg-pink-100 hover:border-r-4 hover:border-pink-500"><StackedBarChartIcon className="mr-3"/>
            <span>Dashboard</span>
            </a>
          </li>
          <li className="flex items-center p-4 text-gray-600">
            <a href="" className="w-[220px] p-2 rounded-lg hover:bg-pink-100 hover:border-r-4 hover:border-pink-500"><WindowIcon className="mr-3"/>
            <span>Project</span>
            </a>
          </li>
          <li className="flex items-center p-4 text-gray-600">
            <a href="" className="w-[220px] p-2 rounded-lg hover:bg-pink-100 hover:border-r-4 hover:border-pink-500"><ModeCommentIcon className="mr-3"/>
            <span>Messages</span>
            </a>
          </li>
          <li className="flex items-center p-4 text-gray-600">
            <a href="" className="w-[220px] p-2 rounded-lg hover:bg-pink-100 hover:border-r-4 hover:border-pink-500"><EventAvailableIcon className="mr-3"/>
            <span>Schedule</span>
            </a>
          </li>
          <li className="flex items-center p-4 text-gray-600">
            <a href="" className="w-[220px] p-2 rounded-lg hover:bg-pink-100 hover:border-r-4 hover:border-pink-500"><SettingsIcon className="mr-3"/>
            <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="mt-6 text-gray-500">
        <span className='ml-6'>SUPPORT</span>
        <ul>
          <li className="flex items-center p-4 text-gray-600">
            <a href="" className="w-[220px] p-2 rounded-lg hover:bg-pink-100 hover:border-r-4 hover:border-pink-500"><CollectionsBookmarkIcon className="mr-3"/>
            <span>Insight</span>
            </a>
          </li>
          <li className="flex items-center p-4 text-gray-600">
            <a href="" className="w-[220px] p-2 rounded-lg hover:bg-pink-100 hover:border-r-4 hover:border-pink-500"><FlagIcon className="mr-3"/>
            <span>Help</span>
            </a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
