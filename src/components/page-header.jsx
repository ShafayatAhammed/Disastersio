import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const Info = ({ subtitle, title }) => {
  return (
    <>
      <p className="text-sm font-normal xl4:text-lg text-medium-gray">
        {subtitle}
      </p>
      <h2 className="text-2xl font-bold xl4:text-3xl text-high-dark">
        {title}
      </h2>
    </>
  );
};

const Button = ({ type, content, click }) => {
  const theClassName = `px-5 w-full flex justify-center xspghd:col-span-2 items-center py-2 text-sm xl4:text-lg font-bold transition-colors rounded-lg ${
    type === "pmr"
      ? "bg-high-pmr hover:bg-[#d44c04] text-white"
      : "bg-white hover:bg-gray-100 border border-[#D4D4D8]"
  }`;

  return (
    <button type="button" className={theClassName} onClick={click}>
      {content}
    </button>
  );
};

const PageHeader = ({
  page,
  title,
  currentStep,
  next,
  back,
  cancel,
  finish,
}) => {
  const navigate = useNavigate();
  const isDashboard = page === "dashboard";
  const isIncidents = page === "incidents";
  const isLocations = page === "locations";

  const generateInfo = (type) => {
    if (type === "subtitle") {
      return isDashboard
        ? "Welcome back"
        : isIncidents
        ? "Home - Incidents"
        : isLocations
        ? `Incidents - ${
            title.length <= 13 ? title : title.slice(0, 13) + "..."
          }`
        : "Home - Incidents - New Incident";
    } else {
      return isDashboard
        ? "Dashboard"
        : isIncidents
        ? "Incidents"
        : isLocations
        ? `${title.length <= 13 ? title : title.slice(0, 13) + "..."}`
        : "New Incident";
    }
  };

  return (
    <div>
      {((isDashboard || isIncidents || isLocations) && (
        <div className="flex flex-col items-center justify-between gap-2 px-8 py-3 sm:px-20 mdincident:flex-row bg-high-whitesmoke">
          <div className="text-center mdpghd:text-start">
            <Info
              subtitle={generateInfo("subtitle")}
              title={
                isLocations ? generateInfo("title") : generateInfo("title")
              }
            />
          </div>
          <div className="grid grid-cols-1 grid-rows-3 gap-3 xspghd:grid-rows-1 xspghd:grid-cols-2 smpghd:flex">
            <form className="relative w-full">
              <Icon
                icon="material-symbols:search"
                className="absolute text-lg xl4:text-2xl text-medium-gray top-1/2 left-2 translate-y-[-50%]"
              />
              <input
                type="text"
                className="w-full h-full py-2 pr-2 text-sm font-normal bg-white border rounded-md outline-none xl4:text-lg pl-7 xl4:pl-8 border-high-whitesmoke text-medium-gray"
                placeholder="Search incident"
              />
            </form>
            <div className="flex items-center justify-center p-1 bg-white border rounded-md border-high-whitesmoke">
              <select className="text-sm font-normal bg-white outline-none cursor-pointer xl4:text-lg text-medium-gray">
                <option>Sort By: Date modified</option>
                <option>Sort By: Old to new</option>
                <option>Sort By: New to old</option>
              </select>
            </div>
            <Button
              type="pmr"
              content={
                isDashboard ? (
                  "Cypher AI"
                ) : (
                  <>
                    <Icon
                      icon="material-symbols:add"
                      className="text-lg xl4:text-xl"
                    />{" "}
                    {isIncidents ? "New Incident" : "New Location"}
                  </>
                )
              }
              click={() =>
                isIncidents && navigate("/incidents/new-incident" || undefined)
              }
            />
          </div>
        </div>
      )) || (
        <div className="flex flex-col items-center justify-between gap-3 px-8 py-3 xlnav:flex-row sm:px-20 bg-high-whitesmoke">
          <div className="flex items-center gap-2">
            <div
              className="flex items-center justify-center p-2 text-xl transition-colors bg-white rounded-full cursor-pointer hover:bg-gray-100 text-medium-gray"
              onClick={cancel}
            >
              <Icon icon="material-symbols:close" />
            </div>
            <div className="text-center xlnav:text-start">
              <Info
                subtitle={generateInfo("subtitle")}
                title={generateInfo("title")}
              />
            </div>
          </div>
          <div className="w-full h-2 bg-gray-300 rounded-full md:w-4/5 xlnav:w-1/2">
            <div
              className={`${
                currentStep === 1
                  ? "w-1/3"
                  : currentStep === 2
                  ? "w-1/2"
                  : "w-full"
              } h-2 rounded-full bg-normal-pmr`}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Button type="white" content="Back" click={back} />
            </div>
            <div>
              {currentStep < 3 ? (
                <Button type="pmr" content="Next step" click={next} />
              ) : (
                <Button type="pmr" content="Finished" click={finish} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
