import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-grow flex flex-col">
          <Navbar />
          <div className="flex-grow p-4 bg-gray-100">
                    <Dashboard/>
                </div>
        </div>
      </div>
    </>
  );
}

export default App;
