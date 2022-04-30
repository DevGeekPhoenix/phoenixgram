import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Activities from "./Pages/Activities";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import PagesLayout from "./Components/PagesLayout";
import NewPost from "./Pages/NewPost";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen bg-[#fff]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagesLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/newpost" element={<NewPost />} />
          </Route>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
