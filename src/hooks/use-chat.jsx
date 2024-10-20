import { useContext } from "react";
import { ChatContext } from "../contexts/chat-context.jsx";

const useChat = () => {
  return useContext(ChatContext);
};

export default useChat;
