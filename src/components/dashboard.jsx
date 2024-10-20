import IncidentCard from "./incident-card.jsx";
import PageHeader from "./page-header.jsx";
import ChatBtn from "../assets/chat.png";
import Chat from "../components/chat.jsx";
import useChat from "../hooks/use-chat.jsx";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import useTypes from "../hooks/use-types.jsx";
import useIncidents from "../hooks/use-incidents.jsx";

const Dashboard = () => {
  const { isActive, setIsActive } = useChat();
  const incidents = useIncidents();
  const types = useTypes();

  return (
    <>
      <PageHeader page="dashboard" />
      <div className="grid grid-cols-1 mx-8 mt-10 mb-16 xspghd:mb-40 xspghd:grid-cols-2 md:grid-cols-3 sm:mx-20 xlnav:grid-cols-4 gap-x-5 gap-y-8">
        {incidents.map(({ id, img, type, title, location, amount }, i) => {
          return (
            <IncidentCard
              id={id}
              img={img}
              type={type}
              icon={
                types.find((t) => {
                  return t.type === type;
                }).icon
              }
              title={title}
              location={location}
              amount={amount}
              key={i}
            />
          );
        })}
      </div>
      <Chat />
      <div
        className="fixed z-40 rounded-full cursor-pointer bottom-5 right-8 sm:right-20 hover:scale-[1.05] transition-transform"
        onClick={() => {
          if (isActive) {
            setIsActive(false);
          } else {
            setIsActive(true);
          }
        }}
      >
        {(isActive && (
          <div className="w-[77px] h-[77px] bg-white shadow-chat rounded-full flex justify-center items-center">
            <Icon icon="material-symbols:close" className="text-4xl" />
          </div>
        )) || <img src={ChatBtn} alt="chat" />}
      </div>
    </>
  );
};

export default Dashboard;
