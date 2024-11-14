import React from 'react';
import TaskRoles from './TaskRoles';
import WorkingFormat from './WorkingFormat';
import EmployeeList from './EmployeeList';
import {UsersIcon, EllipsisHorizontalIcon, UserPlusIcon, UserMinusIcon, ArrowTrendingUpIcon} from "@heroicons/react/24/outline"
function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-6">
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold inline-flex">
      <UsersIcon className="size-4 mt-1 mr-2 text-blue-500"/>
            Total Employee
            <EllipsisHorizontalIcon className="size-5 mt-2 ml-20 text-gray-500"/>
        </h2>
      <p className="text-2xl font-bold mt-4 mb-4">800</p>
      <p className="text-sm text-gray-500">Compare with last month:
        <span className="ml-12 border border-[#12B76A] rounded-xl p-[1px] bg-[#A6F4C5] text-[#12B76A]">&nbsp;+150 &nbsp;</span>
      </p>
    </div>
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold inline-flex">
      <UserPlusIcon className="size-4 mt-1 mr-2 text-blue-500"/>
            New Employee
            <EllipsisHorizontalIcon className="size-5 mt-2 ml-20 text-gray-500"/>
        </h2>
      <p className="text-2xl font-bold mt-4 mb-4">24</p>
      <p className="text-sm text-gray-500">Compare with last month:
        <span className="ml-12 border border-[#12B76A] rounded-xl p-[1px] bg-[#A6F4C5] text-[#12B76A]"> &nbsp;+5 &nbsp;</span>
      </p>
    </div>
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold inline-flex">
      <UserMinusIcon className="size-4 mt-1 mr-2 text-blue-500"/>
            Resigned Employee
            <EllipsisHorizontalIcon className="size-5 mt-2 ml-10 text-gray-500"/>
        </h2>
      <p className="text-2xl font-bold mt-4 mb-4">15</p>
      <p className="text-sm text-gray-500">Compare with last month:
        <span className="ml-12 border border-[#FF0101] rounded-xl p-[1px] bg-[#ECFDF3] text-[#FF0101] }">&nbsp;  -4 &nbsp;</span>
      </p>
    </div>
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold inline-flex">
      <ArrowTrendingUpIcon className="size-4 mt-1 mr-2 text-blue-500"/>
            Performance Employee
            <EllipsisHorizontalIcon className="size-5 mt-2 ml-3 text-gray-500"/>
        </h2>
      <p className="text-2xl font-bold mt-4 mb-4">25%</p>
      <p className="text-sm text-gray-500">Compare with last month:
        <span className="ml-10 border border-[#12B76A] rounded-xl p-[1px] bg-[#A6F4C5] text-[#12B76A]">&nbsp;+10% &nbsp;</span>
      </p>
    </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <TaskRoles />
        <WorkingFormat />
      </div>
      <EmployeeList />
    </div>
  );
}

export default Dashboard;
