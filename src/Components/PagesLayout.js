import MobilePageNavigator from "./Mobile/MobilePageNavigator";
import MobileNavbar from "./Mobile/MobileNavbar";
import { Outlet } from "react-router-dom";
import Massages from "./Mobile/Massages";
import { useState, useEffect } from "react";

export default function PagesLayout() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <Massages setIsOpen={setIsOpen} isOpen={isOpen} />
      <div
        onDrag={() => setIsOpen(true)}
        className={`absolute top-0 h-screen w-screen transition-all duration-500 overflow-y-auto ${
          !isOpen ? "left-0 " : "left-[-100vw] "
        }`}
      >
        <MobileNavbar setIsOpen={setIsOpen} />
        <Outlet />
        <MobilePageNavigator />
      </div>
    </>
  );
}
