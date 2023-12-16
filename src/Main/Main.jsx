import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Pages/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;