
import { useRouteError } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  // Log the error to the console
  console.error(error);

  return (
    <div id="error-page">
      <Navbar />
      <div>
        <h1>404</h1>
        {/* <img className="w-full h-[90vh]" src={img} alt="404 Not Found" /> */}
      </div>
      <Footer/>
    </div>
  );
};

export default ErrorPage;
