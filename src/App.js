import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NaviBar from "./Components/NaviBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Users } from "./Components/Users";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NaviBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
