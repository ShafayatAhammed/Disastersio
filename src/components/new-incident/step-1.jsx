import { Icon } from "@iconify-icon/react/dist/iconify.js";
import useTypes from "../../hooks/use-types.jsx";

const TypeCard = ({ icon, type, selected, set }) => {
  return (
    <div
      className={`flex cursor-pointer xsincident:justify-start justify-center items-center gap-2 p-4 rounded-md ${
        selected
          ? "bg-high-pmr text-white"
          : "border bg-normal-whitesmoke border-high-whitesmoke text-medium-gray hover:bg-high-pmr hover:text-white transition-colors"
      }`}
      onClick={() => {
        if (selected) {
          set(null);
        } else {
          set(type);
        }
      }}
    >
      <Icon icon={icon} className="text-2xl xl4:text-4xl" />
      <p className="text-sm font-normal xl4:text-xl">{type}</p>
    </div>
  );
};

const Step1 = ({ selectedType }) => {
  const types = useTypes();

  return (
    <div className="flex flex-col items-center justify-center px-8 mt-8 mb-16 xspghd:mb-40 sm:px-20">
      <h1 className="text-xl font-bold text-center xl4:text-4xl smpghd:text-2xl text-high-dark">
        Which of these best describes the incident?
      </h1>
      <div className="grid w-full grid-cols-1 gap-3 mt-5 xsincident:w-fit xsincident:grid-cols-2 smincident:grid-cols-3 mdpghd:grid-cols-4">
        {types.map(({ icon, type }, i) => {
          return (
            <TypeCard
              icon={icon}
              type={type}
              selected={
                selectedType.selectedType
                  ? selectedType.selectedType === type
                  : false
              }
              key={i}
              set={selectedType.setSelectedType}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Step1;
