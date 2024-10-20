import PageHeader from "./page-header.jsx";
import IncidentCard from "./incident-card.jsx";
import useTypes from "../hooks/use-types.jsx";
import useIncidents from "../hooks/use-incidents.jsx";

const Incidents = () => {
  const incidents = useIncidents();
  const types = useTypes();

  return (
    <>
      <PageHeader page="incidents" />
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
    </>
  );
};

export default Incidents;
