import { CalendarIcon } from "@heroicons/react/24/outline";

function ProjectCard({ project }) {
    const totalBlocks = 20;
    const filledBlocks = Math.round((project.progress / 100) * totalBlocks);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-[388px] h-[285px]">
      <div className="flex items-center text-gray-600 text-sm mb-2">
        <CalendarIcon className="mr-2 size-4 font-medium" />
        <span className="font-medium">{project.timeline}</span>
      </div>
      <h3 className="text-2xl font-bold mb-6 w-[320px]">{project.title}</h3>
      <p className="text-gray-600 mb-4 text-sm inline-flex mr-48">Stage:<span className="font-semibold ml-1 text-black">{project.stage}</span></p>
      <span className="text-sm font-semibold">{project.progress}%</span>
      <div className="flex items-center mb-8">
      <div className="flex">
            {[...Array(totalBlocks)].map((_, index) => (
                <div
                    key={index}
                    className={`w-3.5 h-2 mx-0.5 rounded-sm ${index < filledBlocks ? 'bg-gradient-to-r from-[#C2F531] to-[#198C47]' : 'bg-gray-200'}`}
                ></div>
            ))}
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex -space-x-2">
          {project.team.map((member, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white"
            >
            </div>
          ))}
        </div>
        <div className="-ml-2 bg-blue-100 text-blue-500 rounded-full px-2 py-2 text-sm font-semibold">
          +{project.additionalMembers}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
