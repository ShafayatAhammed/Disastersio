import { useContext } from "react";
import { RefContext } from "../contexts/ref-context.jsx";

const useReference = () => {
  return useContext(RefContext);
};

export default useReference;
