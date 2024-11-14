
import ProjectCard from "./ProjectCard";
import Activities from "./Activities";
import LeadsProjectActivity from "./LeadsProjectActivity";
import { LockClosedIcon } from "@heroicons/react/24/solid";

const projects = [
  {
    timeline: '04 May - 31 Oct',
    title: 'Cryptonesia - Redesign Crypto Website',
    stage: 'Under Review',
    progress: 83,
    team: ['A', 'B', 'C', 'D'],
    additionalMembers: 2,
  },
  {
    timeline: '29 Jun - 29 Aug',
    title: 'Carre - Rent Car Web Design',
    stage: 'Wireframing',
    progress: 23,
    team: ['A', 'B', 'C', 'D'],
    additionalMembers: 2,
  },
];

function Dashboard() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-3xl mb-2">Good Afternoon, <b>Fred!</b></h1> 
        <p className="text-gray-500">Hope all doing well today</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold inline-flex mr-28">Target Overview</h2>
          <p className="text-green-600 inline-flex bg-green-100 rounded-md p-[1px]">+4%</p>
          <p className="text-gray-400 text-sm mt-2 mb-4">This Month</p>
          <p className="text-xl font-bold mb-4">$24,650.00 <span className="text-gray-400 font-semibold">/</span><span className="text-gray-400 text-base font-semibold"> $35K</span> </p>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `75%` }}
            ></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold inline-flex mr-20">Running Projects</h2>
          <p className="text-red-600 inline-flex bg-red-100 rounded-md p-[1px]"> -3% </p>
          <div className="mt-2">
            <p className="text-sm text-gray-400 mb-4">This Month</p>
            <div className="rounded-full w-full h-5 inline-flex">
            <div
              className="h-full bg-blue-500 rounded-l-full mr-1 inline-flex"
              style={{ width: `25%` }}
            ></div>
            <div
              className="h-full bg-cyan-500  mr-1 inline-flex"
              style={{ width: `55%` }}
            ></div>  
            <div
              className="h-full bg-green-500 rounded-r-full inline-flex"
              style={{ width: `20%` }}
            ></div>                      
          </div>
            <div className="mt-2 text-sm inline-flex gap-8">
              <div className="inline-flex items-center"><div className="h-3 w-2 bg-blue-500 rounded-sm mr-2"></div><p>8 UI/UX</p></div>
              <div className="inline-flex items-center"><div className="h-3 w-2 bg-cyan-500 rounded-sm mr-2"></div><p>18 Mobile</p></div>
              <div className="inline-flex items-center"><div className="h-3 w-2 bg-green-500 rounded-sm mr-2"></div><p>6 Web</p></div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">On Hold Project</h2>
          <p className="text-sm text-gray-400 mb-4">This Month</p>
          <div className="inline-flex"><LockClosedIcon className="size-7 text-blue-600"/>
          <p className="text-2xl font-semibold mr-2">12 </p>
          <p className="text-xl text-gray-500">projects hold</p>
          </div>
        </div>
        <div className="bg-white p-4 pb-0 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold inline-flex">New Leads</h2>
          <p className="text-green-600 inline-flex bg-green-100 rounded-md p-[1px] ml-32">+4%</p>
          <div className="inline-flex">
          <p className="text-2xl font-semibold">104 </p>
          <p className="text-lg mt-1 ml-2 text-gray-500">Prospect Client</p>
          </div>
         <div>
         <svg width="302" height="44" viewBox="0 0 302 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 43L66 28.5L148.5 43L209 13L266.5 23.5L301 1" stroke="#057AFD" stroke-width="2" stroke-linejoin="round"/>
</svg>

         </div>

        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          <div className="col-span-2">
            <LeadsProjectActivity />
          </div>
        </div>
        <Activities className="col-span-1"/>
      </div>
    </div>
  );
}

export default Dashboard;
