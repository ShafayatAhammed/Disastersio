import { useContext } from "react";
import { OffcanvasContext } from "../contexts/offcanvas-context.jsx";

const useOffcanvas = () => {
  return useContext(OffcanvasContext);
};

export default useOffcanvas;
