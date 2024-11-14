import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {EllipsisHorizontalIcon, PresentationChartBarIcon} from "@heroicons/react/24/outline"

const data1 = [
  { label: 'Office', value: 80, color:'#11428C' },
  { label: 'Hybrid', value: 240, color:'#3FC8E4' },
  { label: 'Remote', value: 480, color:'#FFC90A' },
];

function WorkingFormat() {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <div className="inline-flex">
        <PresentationChartBarIcon className="size-6 text-blue-700 mr-2"/>
        <h2 className="text-lg font-semibold mb-4">Working Format</h2>
        <EllipsisHorizontalIcon className="size-6 ml-44"/>
        </div>
      <div className="flex items-center justify-center">
      <PieChart
      series={[
        {
          innerRadius: 75,
          outerRadius: 100,
          data: data1,
        },
      ]}
      width={400}
      height={250}
    />
      </div>
      <div className="mt-4 inline-flex">
        <p className="text-sm text-gray-500 mt-2 mr-2">Total</p>
        <p className="text-3xl font-bold">800</p>
      </div>
    </div>
  );
}

export default WorkingFormat;
