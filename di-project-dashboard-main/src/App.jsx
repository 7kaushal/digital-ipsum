import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import QuickAccessTask from "./components/QuickAccessTask";
import TaskList from "./components/TaskList";
import StudioStats from "./components/StudioStats";
import VoiceSync from "./components/VoiceSync";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <QuickAccessTask />
            <TaskList />
          </div>
          <div className="space-y-8">
            <StudioStats />
            <VoiceSync />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
