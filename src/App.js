import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Read/>}></Route>
        <Route path="/create" exact element={<Create/>}></Route>
        <Route path="/edit" exact element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
