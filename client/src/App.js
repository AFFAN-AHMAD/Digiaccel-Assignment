import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Navbar from "./components/nav/Nav";
import User from "./pages/user/User";
import Admin from "./pages/admin/Admin";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path={"/"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/user"} element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
