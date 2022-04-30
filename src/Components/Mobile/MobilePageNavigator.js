import HomeIcon from "../../Assets/SVGs/HomeIcon";
import Profile from "../../Assets/SVGs/Profile";
import SearchIcon from "../../Assets/SVGs/SearchIcon";
import LikeIcon from "../../Assets/SVGs/LikeIcon";
import PostIcon from "../../Assets/SVGs/PostIcon";
import NavBackground from "../../Assets/SVGs/NavBackground";
import { Link } from "react-router-dom";

export default () => {
  return (
    <section className="fixed xs:hidden bottom-0 ">
      <div className="fixed z-50 bottom-8 w-[28vw] flex justify-between ml-[5vw] ">
        <Link to={"/home"}>
          <HomeIcon />
        </Link>
        <Link to={"/explore"}>
          <SearchIcon />
        </Link>
      </div>
      <div className="fixed z-40 bottom-8 w-screen flex justify-center">
        <Link to={"/newpost"}>
          <PostIcon />
        </Link>
      </div>
      <div className="fixed z-50 bottom-8 w-[28vw] flex justify-between ml-[65vw] ">
        <Link to={"/activities"}>
          <LikeIcon />
        </Link>
        <Link to={"/profile"}>
          <Profile />
        </Link>
      </div>
      <div className="fixed backdrop-blur-lg  bottom-0 w-screen">
        <NavBackground />
      </div>
    </section>
  );
};
