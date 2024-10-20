import { Icon } from "@iconify-icon/react/dist/iconify.js";
import useChat from "../hooks/use-chat.jsx";

const Message = ({ type, message }) => {
  if (type === "req") {
    return (
      <div className="w-[250px] xl4:w-[300px] self-end py-2 px-3 rounded-md bg-high-gray">
        <p className="text-sm font-normal text-white xl4:text-lg">{message}</p>
      </div>
    );
  } else {
    return (
      <div className="w-[250px] xl4:w-[300px] py-2 px-3 rounded-md bg-white border border-high-whitesmoke">
        <p className="text-sm font-normal xl4:text-lg text-medium-gray">
          {message}
        </p>
      </div>
    );
  }
};

const Chat = () => {
  const { isActive, setIsActive } = useChat();

  return (
    <div
      className={`fixed w-fit h-fit z-[45] bottom-0 xspghd:bottom-28 xspghd:right-8 sm:right-20 xspghd:rounded-xl bg-normal-whitesmoke ${
        !isActive ? "hidden" : ""
      }`}
    >
      <div className="overflow-auto h-dvh xspghd:h-fit w-dvw xspghd:w-[350px] xl4:w-[400px] flex flex-col justify-between">
        <div className="flex justify-between px-3 py-3 text-white xspghd:block xspghd:rounded-tl-xl xspghd:rounded-tr-xl bg-high-pmr">
          <p className="text-lg font-bold xl4:text-xl">Chat with Cypher</p>
          <Icon
            icon="material-symbols:close"
            className="text-3xl transition-colors cursor-pointer hover:text-gray-300 xspghd:hidden"
            onClick={() => setIsActive(false)}
          />
        </div>
        <div className="relative flex flex-col gap-4 mx-3 mt-6 mb-4 overflow-auto h-[276px] xl4:h-[340px]">
          <Message
            type="req"
            message="Lorem ipsum dolar sit general sac mascho werho"
          />
          <Message
            type="res"
            message="Lorem ipsum dolar sit general sac mascho werho"
          />
          <Message
            type="res"
            message="Lorem ipsum dolar sit general sac mascho werho"
          />
          <Message
            type="req"
            message="Lorem ipsum dolar sit general sac mascho werho"
          />
        </div>
        <div className="mx-3 mb-4">
          <input
            type="text"
            placeholder="Enter your question..."
            className="w-full py-3 px-2 border border-[#E5E7EB] bg-[#F3F4F6] outline-none rounded-md text-sm font-normal xl4:text-lg text-medium-gray"
          />
          <div className="flex justify-between mt-3">
            <div className="flex items-center gap-2 text-2xl xl4:text-3xl text-medium-gray">
              <Icon
                icon="circum:camera"
                className="text-3xl transition-colors cursor-pointer xl4:text-4xl hover:text-high-gray"
              />
              <Icon
                icon="carbon:image"
                className="transition-colors cursor-pointer hover:text-high-gray"
              />
              <Icon
                icon="tdesign:attach"
                className="transition-colors cursor-pointer hover:text-high-gray"
              />
            </div>
            <button
              type="button"
              className="py-2 text-sm xl4:text-lg font-normal text-white rounded-full px-7 bg-high-pmr hover:bg-[#d44c04] transition-colors select-none"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
