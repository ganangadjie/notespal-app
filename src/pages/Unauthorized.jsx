import { Link } from "react-router-dom";
import "../assets/css/Unauthorized.css";
import { LoginPage } from "./LoginPage";

const Unauthorized = () => {
  return (
    <div className="unauthorized-container">
      <div className="box">
        <h2>Unauthorized Access</h2>
        <p>You do not have permission to access this page.</p>
        <Link to="/LoginPage">Please Login First!</Link>
      </div>
    </div>
  );
};

export default Unauthorized;
