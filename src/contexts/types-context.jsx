import { createContext } from "react";

const TypesContext = createContext(null);

const TypesProvider = ({ children }) => {
  const types = [
    {
      icon: "mdi:avalanche-outline",
      type: "Avalanche",
    },
    {
      icon: "solar:dna-outline",
      type: "Biological",
    },
    {
      icon: "carbon:snow-blizzard",
      type: "Blizzard",
    },
    {
      icon: "streamline:interface-weather-snow-flake-winter-freeze-snow-freezing-ice-cold-weather-snowflake",
      type: "Cold/Freezing",
    },
    {
      icon: "carbon:drought",
      type: "Drought",
    },
    {
      icon: "ri:earthquake-line",
      type: "Earthquake",
    },
    {
      icon: "material-symbols-light:flood",
      type: "Flooding",
    },
    {
      icon: "mdi:heat-index",
      type: "Heat Wave",
    },
    {
      icon: "ri:hail-fill",
      type: "Hail",
    },
    {
      icon: "rivet-icons:lightning",
      type: "Lightning",
    },
    {
      icon: "ic:baseline-back-hand",
      type: "Man Made",
    },
    {
      icon: "mingcute:rain-fill",
      type: "Mudslide",
    },
    {
      icon: "solar:cloud-storm-bold",
      type: "Severe Storm",
    },
    {
      icon: "solar:cloud-storm-bold",
      type: "Strong Wind",
    },
    {
      icon: "bi:tornado",
      type: "Tornado",
    },
    {
      icon: "material-symbols:tsunami",
      type: "Tsunami",
    },
    {
      icon: "emojione-monotone:volcano",
      type: "Volcanic Eruption",
    },
    {
      icon: "mdi:wildfire",
      type: "Wildfire",
    },
  ];

  return (
    <TypesContext.Provider value={types}>{children}</TypesContext.Provider>
  );
};

export { TypesContext, TypesProvider };
