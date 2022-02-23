import { BrowserRouter, Route, Routes } from "react-router-dom";

// Styles
import "./App.scss";

// Components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
