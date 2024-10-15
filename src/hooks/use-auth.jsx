import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context.jsx";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
