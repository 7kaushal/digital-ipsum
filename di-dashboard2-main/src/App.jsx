import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar/>
        <div className="p-8">
          <Dashboard/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
