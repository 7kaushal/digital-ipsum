import {
    TrashIcon,
    PencilSquareIcon,
    AdjustmentsHorizontalIcon,
    MagnifyingGlassIcon,
  } from "@heroicons/react/24/outline";
  
  function LeadsProjectActivity() {
    const leads = [
      {
        project: "Design Brugg Website",
        timeline: "14 Jun - 14 Aug",
        team: "+2",
        progress: 50,
        initials: "B",
        color: "bg-blue-200",
        members: [1, 2, 3, 4],
      },
      {
        project: "Development AI Chatbot",
        timeline: "10 Feb - 10 Jul",
        team: "+4",
        progress: 70,
        initials: "A",
        color: "bg-green-200",
        members: [1, 2, 3, 4],
      },
    ];
  
    const totalBlocks = 4;
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Leads & Project Activity</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gray-100 rounded-md shadow-sm">
              <AdjustmentsHorizontalIcon className="size-6" />
            </button>
            <MagnifyingGlassIcon className="size-6" />
            <input
              type="text"
              placeholder="Search"
              className="p-2 border rounded-md shadow-sm"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="">
              <tr className="bg-gray-100 text-gray-500">
                <th className="p-2">Project Name</th>
                <th className="p-2">Timeline</th>
                <th className="p-2">Team</th>
                <th className="p-2">Progress</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {leads.map((lead, index) => {
                const filledBlocks = Math.round((lead.progress / 100) * totalBlocks);
                return (
                  <tr key={index} className="border-b">
                    <td className="p-2 flex items-center space-x-2">
                      <div
                        className={`w-8 h-8 flex items-center justify-center text-gray-600 rounded-full ${lead.color}`}
                      >
                        {lead.initials}
                      </div>
                      <span className="font-semibold">{lead.project}</span>
                    </td>
                    <td className="p-2">{lead.timeline}</td>
                    <td className="p-2">
                      <div className="flex items-center">
                        <div className="flex -space-x-4">
                          {lead.members.map((member, index) => (
                            <div
                              key={index}
                              className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white"
                            ></div>
                          ))}
                        </div>
                        <div className="-ml-4 bg-blue-100 text-blue-500 rounded-full px-1.5 py-1.5 text-sm font-semibold">
                          {lead.team}
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(totalBlocks)].map((_, index) => (
                            <div
                              key={index}
                              className={`w-3.5 h-2 mx-0.5 rounded-sm ${index < filledBlocks ? 'bg-gradient-to-r from-[#C2F531] to-[#198C47]' : 'bg-gray-200'
                                }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 flex items-center space-x-2">
                      <button className="p-2 shadow-sm text-gray-700">
                        <PencilSquareIcon className="size-6" />
                      </button>
                      <button className="p-2 shadow-sm text-gray-700">
                        <TrashIcon className="size-6" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default LeadsProjectActivity;
  