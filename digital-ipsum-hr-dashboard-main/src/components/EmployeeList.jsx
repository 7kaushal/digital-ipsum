import React from 'react';
import {EllipsisHorizontalIcon, TrashIcon, PencilSquareIcon} from "@heroicons/react/24/outline"

function EmployeeList() {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-6 font-inter">
      <div className="inline-flex">
        <h2 className="text-lg font-semibold mb-4">Employees</h2>
        <EllipsisHorizontalIcon className="size-6 ml-[1075px]"/>
        </div>
      <table className="w-full table-auto text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Level</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Date Joined</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          <tr>
            <td className="border px-4 py-2 flex ">
            <div className="bg-[#D9D9D9] rounded-full h-10 w-10 mt-3">
            </div>
                <span className="mt-2 ml-2">Guy Hawkins
                    <br/>
                    #123342
                </span>
                </td>
            <td className="border px-4 py-2">UI Designer</td>
            <td className="border px-4 py-2">Senior</td>
            <td className="border px-4 py-2">Internship</td>
            <td className="border px-4 py-2">20 Jan 2023</td>
            <td className="border px-4 py-2">
              <button className="text-red-500">
                <TrashIcon className="size-6"/>
              </button>
              <button className="ml-2">
                <PencilSquareIcon className="size-6"/>
              </button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 flex ">
            <div className="bg-[#D9D9D9] rounded-full h-10 w-10 mt-3">
            </div>
                <span className="mt-2 ml-2">Kathryn Murphy
                    <br/>
                    #242404
                </span>
                </td>
            <td className="border px-4 py-2">Product Designer</td>
            <td className="border px-4 py-2">Senior</td>
            <td className="border px-4 py-2">Full Time</td>
            <td className="border px-4 py-2">19 Jan 2023</td>
            <td className="border px-4 py-2">
              <button className="text-red-500">
                <TrashIcon className="size-6"/>
              </button>
              <button className="ml-2">
                <PencilSquareIcon className="size-6"/>
              </button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 flex ">
            <div className="bg-[#D9D9D9] rounded-full h-10 w-10 mt-3">
            </div>
                <span className="mt-2 ml-2">Jony Senates
                    <br/>
                    #242346
                </span>
                </td>
            <td className="border px-4 py-2">Product Designer</td>
            <td className="border px-4 py-2">Senior</td>
            <td className="border px-4 py-2">Part Time</td>
            <td className="border px-4 py-2">20 Jan 2022</td>
            <td className="border px-4 py-2">
              <button className="text-red-500">
                <TrashIcon className="size-6"/>
              </button>
              <button className="ml-2">
                <PencilSquareIcon className="size-6"/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
