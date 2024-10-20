import { createContext } from "react";
import Incident1 from "../assets/incident-1.png";
import Incident2 from "../assets/incident-2.png";
import Incident3 from "../assets/incident-3.png";
import Incident4 from "../assets/incident-4.png";
import Incident5 from "../assets/incident-5.png";
import Incident6 from "../assets/incident-6.png";
import { v4 as uuidv4 } from "uuid";

const IncidentsContext = createContext(null);

const IncidentsProvider = ({ children }) => {
  const title = {
    1: "Whitechapel Rd.",
    2: "Tulare County",
  };

  const location = "Tulare County,  Los Angles, CA 23415";

  const amount = "1,456,654.00";

  const incidents = [
    {
      id: uuidv4(),
      img: Incident1,
      type: "Blizzard",
      title: title["1"],
      description:
        "Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho",
      location,
      amount,
    },
    {
      id: uuidv4(),
      img: Incident2,
      type: "Blizzard",
      title: title["1"],
      description:
        "Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho",
      location,
      amount,
    },
    {
      id: uuidv4(),
      img: Incident3,
      type: "Blizzard",
      title: title["2"],
      description:
        "Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho",
      location,
      amount,
    },
    {
      id: uuidv4(),
      img: Incident4,
      type: "Blizzard",
      title: title["2"],
      description:
        "Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho",
      location,
      amount,
    },
    {
      id: uuidv4(),
      img: Incident5,
      type: "Blizzard",
      title: title["2"],
      description:
        "Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho",
      location,
      amount,
    },
    {
      id: uuidv4(),
      img: Incident6,
      type: "Blizzard",
      title: title["2"],
      description:
        "Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho",
      location,
      amount,
    },
  ];

  return (
    <IncidentsContext.Provider value={incidents}>
      {children}
    </IncidentsContext.Provider>
  );
};

export { IncidentsContext, IncidentsProvider };
