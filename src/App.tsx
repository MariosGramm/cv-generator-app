import TopNavbar from "./components/TopNavbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import PreviewSection from "./components/Preview.tsx";


function App() {


  return (
    <>
        <TopNavbar/>
        <div className="d-flex justify-content-between align-items-start w-100">
            <Sidebar/>
            <PreviewSection/>
        </div>

    </>
  )
}

export default App
