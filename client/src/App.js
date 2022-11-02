import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Navbar from "./components/nav/Nav";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path={"/"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        {/* <Route path={"/admin"} element={}/>
        <Route path={"/user"} element={}/> */}
      </Routes>
    </div>
  );
}

export default App;
