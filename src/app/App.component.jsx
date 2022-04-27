import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./shared/Footer.component";
import { Navbar } from "./shared/Navbar/Navbar.component";
import { Router } from "./Router";
import { useState } from "react";
import Sidebar from "./shared/Sidebar.component";

function App() {
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {

    setDrawer(!drawer);
  };

  return (
    <BrowserRouter>
      <Sidebar showSidebar={drawer}/>
      <div className="bg-black font-montserrat flex justify-center">
        <div className="mx-5 sm:mx-32 text-white min-h-screen w-full flex flex-col max-w-9xl">
          <Navbar handleDrawer={handleDrawer}/>
          <div className="flex-1" onClick={drawer ? handleDrawer : null}>
            <Router />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
