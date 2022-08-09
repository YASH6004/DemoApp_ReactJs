import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CurrentLocation from "./components/CurrentLocation";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currentLocation" element={<CurrentLocation />} />
        <Route
          path="*"
          element={
            <div
              style={{
                display: "flex",
                flex:1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>PAGE NOT FOUND</p>
            </div>
          }
        />
      </Routes>
      {/* <Home /> */}
    </BrowserRouter>
  );
}

export default App;
