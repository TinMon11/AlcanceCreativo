import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AllContents from "./pages/AllContents";
import Preguntas from "./pages/preguntas/preguntas";

function App() {
  return (
    <>
      <Router>
        <div className="App bg-primary flex flex-column bg-white">
          <div className="navbar fixed bg-primary z-10">
            <Navbar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<AllContents />} />
              <Route path="/preguntas" element={<Preguntas />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;