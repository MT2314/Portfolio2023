import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-me" element={<About />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
