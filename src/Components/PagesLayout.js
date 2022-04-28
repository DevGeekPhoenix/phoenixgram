import MobilePageNavigator from "./MobilePageNavigator";
import MobileNavbar from "./MobileNavbar";
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
