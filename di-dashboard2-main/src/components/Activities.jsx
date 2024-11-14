import React from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';

function Activities() {
  const activities = [
    {
      name: 'Andrew Mark',
      time: 'Today, 02:43 PM',
      action: 'Completed Wireframe for Cryptonesia - Redesign Crypto Website task',
      likes: 12,
    },
    {
      name: 'Lusiana Rambeu',
      time: 'Today, 10:04 AM',
      action: 'Completed Research for Carre - Rent Car Web Design task',
      likes: 19,
    },
    {
      name: 'William Lawson',
      time: 'Today, 02:43 PM',
      action: 'Completed Design for New Project task',
      likes: 5,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-[435px]">
      <h3 className="text-lg font-semibold mb-4">Activities</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
              {activity.name.charAt(0)}
            </div>
            <div className="flex-1">
              <p className="text-gray-600 text-sm font-semibold">{activity.name}</p>
              <p className="text-gray-500 text-xs mb-4">{activity.time}</p>
              <p className="text-gray-800 text-sm mt-1 mb-4">{activity.action}</p>
              <div className="flex items-center mt-1 text-gray-500 text-xs border p-2 w-[52px] border-gray-400 rounded">
                <HandThumbUpIcon className="mr-1 size-4" /> {activity.likes}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
