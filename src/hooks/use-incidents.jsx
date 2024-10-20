import { useContext } from "react";
import { IncidentsContext } from "../contexts/incidents-context.jsx";

const useIncidents = () => {
  return useContext(IncidentsContext);
};

export default useIncidents;
