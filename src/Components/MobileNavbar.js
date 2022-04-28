import NavLogo from "../Assets/SVGs/NavLogo";
import MassageIcon from "../Assets/SVGs/MassageIcon";
import PostIcon_sm from "../Assets/SVGs/PostIcon_sm";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <div className="flex w-screen justify-around mt-5">
        <Link to="/newpost">
          <PostIcon_sm />
        </Link>
        <Link to="/home">
          <NavLogo />
        </Link>
        <Link to="/massages">
          <MassageIcon />
        </Link>
      </div>
    </div>
  );
};
