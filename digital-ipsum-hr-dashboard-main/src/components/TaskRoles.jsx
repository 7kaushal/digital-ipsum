import React from 'react';
import {DocumentTextIcon} from "@heroicons/react/24/outline"
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [0, 0, 0, 0, 0, 0, 0, 400,0,0,0,0];
const pData = [600, 400, 500, 300, 500, 600, 300, 0, 500, 700, 400, 700];
const iData = [900, 700, 800, 500, 600, 700, 500, 1000 , 900, 800, 700, 900];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function TaskRoles() {
  return (
    <div className="col-span-2 bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4 inline-flex">
        <DocumentTextIcon className="size-4 mt-[5px] mr-1 text-blue-600"/>
        Task Roles</h2>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <BarChart
      width={700}
      height={300}
      series={[
        { data: uData, label: 'Design', id: 'uvId', stack: 'total', color:'#115DFB' },
        { data: pData, label: 'Development', id: 'pvId', stack: 'total', color:'#B7CEFE' },
        { data: iData, label: 'Others', id: 'ivId', stack: 'total', color:'#E0EAFF' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band'}]}
      grid={{horizontal:true}}
      borderRadius={25}
    />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-bold">300</p>
          <p className="text-sm text-gray-500">Design</p>
          <p className="text-3xl font-bold">242</p>
          <p className="text-sm text-gray-500">Development</p>
          <p className="text-3xl font-bold">180</p>
          <p className="text-sm text-gray-500">Other</p>
        </div>
      </div>
    </div>
  );
}

export default TaskRoles;
