import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Read/>}></Route>
        <Route path="/create" exact element={<Create/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
