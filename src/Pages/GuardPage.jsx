import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const GuardPage = ({ children }) => {
  console.log();
  if (Cookies.get("token") === undefined) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
};

export default GuardPage;
