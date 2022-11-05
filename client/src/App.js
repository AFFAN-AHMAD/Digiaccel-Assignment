import "./App.css";
import Signup from "./pages/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Admin from "./pages/admin/Admin";
import Quiz from "./pages/admin/quiz/Quiz";
import Question from "./pages/admin/question/Question";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path={"/"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/admin"} element={<Admin />}>
          <Route path={""} element={<Question />} />
          <Route path={"generate"} element={<Quiz />} />
        </Route>
        <Route path={"/user"} element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
