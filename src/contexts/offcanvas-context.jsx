import { createContext, useState } from "react";

const OffcanvasContext = createContext(null);

const OffcanvasProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OffcanvasContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OffcanvasContext.Provider>
  );
};

export { OffcanvasContext, OffcanvasProvider };
