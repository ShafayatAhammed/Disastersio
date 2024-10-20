import { createContext, useState } from "react";

const ChatContext = createContext(null);

const ChatProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <ChatContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
