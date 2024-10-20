import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const IncidentCard = ({ id, img, type, icon, title, location, amount }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col gap-1 hover:scale-[1.03] transition-transform select-none cursor-pointer"
      onClick={() => navigate(`/locations/${id}`)}
    >
      <div className="relative">
        <img src={img} alt="incident-img" className="w-full h-full" />
        <div className="absolute flex items-center justify-center gap-1 px-2 py-1 bg-white rounded-full top-2 right-2">
          <Icon icon={icon} className="text-lg text-normal-dark" />
          <h5 className="text-sm font-bold text-normal-dark">{type}</h5>
        </div>
      </div>
      <h3 className="text-base font-bold mdpghd:text-lg xl4:text-xl text-high-dark">
        {title.length <= 25 ? title : title.slice(0, 25) + "..."}
      </h3>
      <p className="text-xs font-normal mdpghd:text-sm xl4:text-lg text-medium-gray">
        {location.length <= 40 ? location : location.slice(0, 40) + "..."}
      </p>
      <h3 className="text-base font-bold mdpghd:text-lg xl4:text-xl text-high-dark">
        ${amount}
      </h3>
    </div>
  );
};

export default IncidentCard;
