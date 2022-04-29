import MobilePageNavigator from "./Mobile/MobilePageNavigator";
import MobileNavbar from "./Mobile/MobileNavbar";
import { Outlet } from "react-router-dom";
export default function PagesLayout() {
  return (
    <div>
      <MobileNavbar />
      <Outlet />
      <MobilePageNavigator />
    </div>
  );
}
