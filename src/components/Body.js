import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex gap-6">
      <Sidebar />
      <Outlet/>
    </div>
  );
};

export default Body;
