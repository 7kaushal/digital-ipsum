import React from 'react';

const tasks = [
  { name: 'Website Research', due: 'Due in 3 days', status: 'Active', color: 'pink', abbreviation: 'WR' },
  { name: 'Onboarding Illustration', due: 'Due in 7 days', status: 'Active', color: 'purple', abbreviation: 'OI' },
  { name: 'UX Research', due: 'Due in 3 days', status: 'Paused', color: 'gray', abbreviation: 'UR' },
  { name: 'Usability Testing', due: 'Due Tomorrow', status: 'Active', color: 'blue', abbreviation: 'UT' },
  { name: 'Social Media Design', due: 'Due in 5 days', status: 'Active', color: 'purple', abbreviation: 'SD' },
  { name: 'Website Research', due: 'Due in 2 days', status: 'Active', color: 'pink', abbreviation: 'WR' },
];

const TaskList = () => {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">All Task</h2>
        <button className="text-sm text-gray-500 font-semibold">This Month</button>
      </div>
      <div className="flex space-x-4 mb-6 border-b-2">
        <button className="text-gray-600 border-b-2 border-red-600 pb-2">Active Task</button>
        <button className="text-gray-500 pb-2">Complete Task</button>
        <button className="text-gray-500 pb-2">Archive</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>

          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-b">
                <td className="flex items-center py-4 space-x-4">
                  <div className={`h-10 w-10 flex items-center justify-center text-white rounded-lg bg-${task.color}-500`}>
                    {task.abbreviation}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold ml-4">{task.name}</h3>
                  </div>
                </td>
                <td className="py-4">
                  <p className="text-sm text-gray-500 font-medium">{task.due}</p>
                </td>
                <td className="py-4">
                  <span className={`text-sm text-white p-1 px-4 rounded-full ${task.status === 'Active' ? ' bg-[#66CA75]' : 'bg-[#FFB93F]'}`}>
                    {task.status}
                  </span>
                </td>
                <td className="py-4">
                <div className="flex -space-x-2 mt-2">
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white "></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="h-8 w-8 rounded-full bg-blue-600 border-2 border-white text-center text-white text-sm p-1">2+</div>
        </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
