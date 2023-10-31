import { Link } from "react-router-dom";
import "../assets/css/Unauthorized.css";
import { LoginPage } from "./LoginPage";

const Unauthorized = () => {
  return (
    <div className="unauthorized-container">
      <h1>Unauthorized Access</h1>
      <p>You do not have permission to access this page.</p>
      <Link to="/LoginPage">Please Login First!</Link>
    </div>
  );
};

export default Unauthorized;
