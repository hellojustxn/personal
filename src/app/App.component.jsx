import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./shared/Footer.component";
import { Navbar } from "./shared/Navbar/Navbar.component";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black font-montserrat flex justify-center">
        <div className="mx-5 sm:mx-32 text-white min-h-screen w-full flex flex-col max-w-9xl">
          <Navbar />
          <div className="flex-1">
            <Router />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
