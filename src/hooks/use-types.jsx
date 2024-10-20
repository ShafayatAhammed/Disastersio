import { useContext } from "react";
import { TypesContext } from "../contexts/types-context.jsx";

const useTypes = () => {
  return useContext(TypesContext);
};

export default useTypes;
