import NavLogo from "../../Assets/SVGs/NavLogo";
import MassageIcon from "../../Assets/SVGs/MassageIcon";
import PostIcon_sm from "../../Assets/SVGs/PostIcon_sm";
import { Link, useLocation } from "react-router-dom";

export default ({ setIsAllMsgModalOpenOpen }) => {
  return (
    <div className="fixed top-0 z-50 bg-white pb-5 border-b border-[#7b83b3]">
      <div className=" xs:hidden flex w-screen justify-around mt-5">
        <Link to="/newpost">
          <PostIcon_sm />
        </Link>
        <Link to="/home">
          <NavLogo />
        </Link>
        <div onClick={() => setIsAllMsgModalOpenOpen(true)}>
          <MassageIcon />
        </div>
      </div>
    </div>
  );
};
