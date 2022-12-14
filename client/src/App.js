import "./App.css";
import Signup from "./pages/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Admin from "./pages/admin/Admin";
import Quiz from "./pages/admin/quiz/Quiz";
import Question from "./pages/admin/question/Question";
import LiveTests from "./pages/admin/liveTests/LiveTests";
import CurrentTest from "./pages/admin/currentTest/CurrentTest";
import Live from "./pages/user/live/Live";
import Scores from "./pages/user/scores/Scores";
import MyTest from "./pages/user/myTest/MyTest";
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
          <Route path={"tests"} element={<LiveTests />} />
          <Route path={"tests/:id"} element={<CurrentTest />} />
        </Route>
        <Route path={"/user"} element={<User />}>
          <Route path={"scores"} element={<Scores />} />
          <Route path={"userTest"} element={<Live />} />
          <Route path={"userTest/:id"} element={<MyTest />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
