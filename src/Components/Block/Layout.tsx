import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sider from "./Sider";



const Layout = () => {
  return (
  <div>
    <Header/>
    <Sider/>
    <Outlet/>
  </div>
  );
};

export default Layout
