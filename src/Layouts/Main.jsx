import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Main = () => {
    return (
        <div className="font-serif">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

Main.propTypes = {
    
};

export default Main;