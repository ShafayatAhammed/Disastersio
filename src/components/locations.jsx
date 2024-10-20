import PageHeader from "./page-header.jsx";
import MapPointer from "../assets/map-pointer.png";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import DayBuilding from "../assets/day-building.png";
import NightBuilding from "../assets/night-building.png";
import IncidentCard from "./incident-card.jsx";
import { useNavigate, useParams } from "react-router-dom";
import useIncidents from "../hooks/use-incidents.jsx";
import { useEffect, useState } from "react";

const ActDocCard = ({ img, title, location, amount }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg select-none bg-normal-whitesmoke hover:scale-[1.03] transition-transform">
      <img
        src={img}
        alt="incident-img"
        className="w-[78px] h-[78px] xl4:w-[100px] xl4:h-[100px]"
      />
      <div className="font-bold text-high-dark xl4:text-2xl">
        <h4>{title}</h4>
        <p className="text-sm font-normal xl4:text-xl text-normal-gray">
          {location}
        </p>
        <h4>${amount}</h4>
      </div>
    </div>
  );
};

const Locations = () => {
  const { incidentId } = useParams();
  const incidents = useIncidents();
  const [incident, setIncident] = useState(null);
  const navigate = useNavigate();
  const title = "Whitechapel Rd.";
  const location = "Tulare County,  Los Angles, CA 23415";
  const amount = "1,456,654.00";

  const locations = [
    {
      img: DayBuilding,
      title: title,
      location,
      amount,
    },
    {
      img: NightBuilding,
      title: title,
      location,
      amount,
    },
    {
      img: DayBuilding,
      title: title,
      location,
      amount,
    },
    {
      img: DayBuilding,
      title: title,
      location,
      amount,
    },
  ];

  useEffect(() => {
    const theIncident = incidents.find(
      (incident) => incident.id === incidentId
    );

    if (theIncident) {
      setIncident(theIncident);
    } else {
      alert("IncidentId is not valid!");
      navigate("/incidents");
    }
  }, []);

  return (
    <>
      {(incident && (
        <>
          <PageHeader page="locations" title={incident.title} />
          <div className="flex flex-col items-center gap-16 mx-8 mt-10 mb-16 mdincident:items-start mdincident:flex-row mdincident:justify-between xspghd:mb-32 sm:mx-20">
            <div className="order-2 w-full mdincident:order-1">
              <div className="pb-8 border-b border-high-whitesmoke">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-[40px] h-[40px] xl4:w-[60px] xl4:h-[60px] text-xl rounded-full text-medium-gray bg-normal-whitesmoke">
                    <Icon
                      icon="fluent:location-24-filled"
                      className="text-base xl4:text-xl"
                    />
                  </div>
                  <div>
                    <p className="font-normal text-xs lg:text-sm text-[#6B7280] xl4:text-xl">
                      Location
                    </p>
                    <h3 className="text-lg font-bold lg:text-xl xl4:text-3xl text-high-dark">
                      {incident.location.length <= 18
                        ? incident.location
                        : incident.location.slice(0, 18) + "..."}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="flex items-center justify-center w-[40px] h-[40px] xl4:w-[60px] xl4:h-[60px] text-xl rounded-full text-medium-gray bg-normal-whitesmoke">
                    <Icon icon="mdi:money" className="text-base xl4:text-xl" />
                  </div>
                  <div>
                    <p className="font-normal text-xs lg:text-sm xl4:text-xl text-[#6B7280]">
                      Approx. Cost:
                    </p>
                    <h3 className="text-lg font-bold lg:text-xl xl4:text-3xl text-high-dark">
                      $60,607,456.00
                    </h3>
                  </div>
                </div>
              </div>
              <div className="py-8 border-b border-high-whitesmoke">
                <h4 className="text-sm font-bold text-black xl4:text-xl">
                  Description
                </h4>
                <p className="mt-1 text-sm font-normal xl4:text-xl text-medium-gray lg:text-base">
                  {incident.description.length <= 276
                    ? incident.description
                    : incident.description.slice(0, 276) + "..."}
                </p>
              </div>
              <div className="py-8 border-b border-high-whitesmoke">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-black xl4:text-xl">
                    Locations
                  </h4>
                  <p className="text-sm font-normal underline cursor-pointer select-none xl4:text-xl text-normal-gray">
                    See all
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-5 mt-2 xsincident:grid-cols-2 smincident:grid-cols-3 md:grid-cols-4 mdincident:grid-cols-2 xlnav:grid-cols-3">
                  {locations.map(({ img, title, location, amount }, i) => {
                    return (
                      <IncidentCard
                        img={img}
                        type="Building"
                        icon="ri:building-line"
                        title={title}
                        location={location}
                        amount={amount}
                        key={i}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="py-8 border-b border-high-whitesmoke">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-black xl4:text-xl">
                    Activities
                  </h4>
                  <p className="font-normal text-sm text-[#0A0A0A] xl4:text-xl underline cursor-pointer select-none">
                    See all
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-2">
                  <ActDocCard
                    img={DayBuilding}
                    title="Activity name"
                    location="Location name - 16.12212, -122.1424"
                    amount="1,456,654.00"
                  />
                  <ActDocCard
                    img={DayBuilding}
                    title="Activity name"
                    location="Location name - 16.12212, -122.1424"
                    amount="1,456,654.00"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-black xl4:text-xl">
                    Documents
                  </h4>
                  <p className="font-normal text-sm xl4:text-xl text-[#0A0A0A] underline cursor-pointer select-none">
                    See all
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-2">
                  <ActDocCard
                    img={DayBuilding}
                    title="Document name"
                    location="Location name - 16.12212, -122.1424"
                    amount="1,456,654.00"
                  />
                  <ActDocCard
                    img={DayBuilding}
                    title="Document name"
                    location="Location name - 16.12212, -122.1424"
                    amount="1,456,654.00"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm xl4:text-xl font-normal text-medium-gray w-fit mdincident:w-[700px] xl4:w-[800px] items-center mdincident:items-start text-center mdincident:text-start order-1 mdincident:order-2">
              <p>Incident Map</p>
              <img
                src={MapPointer}
                alt="map-pointer"
                className="w-full xspghd:w-[450px] mdlocation:w-[530px] mdincident:w-full"
              />
              <p>Start 19.1232, -118.233 End 19.3245, -119.2323</p>
            </div>
          </div>
        </>
      )) || (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-[#F26922]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#F26922"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Locations;
