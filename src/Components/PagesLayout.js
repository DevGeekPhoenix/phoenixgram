import MobilePageNavigator from "./Mobile/MobilePageNavigator";
import MobileNavbar from "./Mobile/MobileNavbar";
import { Outlet } from "react-router-dom";
import Massages from "./Mobile/Massages";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export default function PagesLayout() {
  const [isAllMsgModalOpen, setIsAllMsgModalOpenOpen] = useState(false);

  const SwipedLeft = () => {
    setIsAllMsgModalOpenOpen(true);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => SwipedLeft(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      <Massages
        setIsAllMsgModalOpenOpen={setIsAllMsgModalOpenOpen}
        isAllMsgModalOpen={isAllMsgModalOpen}
      />

      <div
        {...handlers}
        className={`absolute top-0 h-screen w-screen transition-all duration-500 overflow-y-auto ${
          !isAllMsgModalOpen ? "left-0 " : "left-[-100vw] "
        }`}
      >
        <MobileNavbar setIsAllMsgModalOpenOpen={setIsAllMsgModalOpenOpen} />
        <Outlet />
        <MobilePageNavigator />
      </div>
    </>
  );
}
