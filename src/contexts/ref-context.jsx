import { createContext, useRef } from "react";

const RefContext = createContext(null);

const RefProvider = ({ children }) => {
  const offcanvasRef = useRef(null);

  return (
    <RefContext.Provider value={{ offcanvasRef }}>
      {children}
    </RefContext.Provider>
  );
};

export { RefContext, RefProvider };
