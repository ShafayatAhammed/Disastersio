import { useState } from "react";
import PageHeader from "../page-header.jsx";
import { useNavigate } from "react-router-dom";
import Step1 from "./step-1.jsx";
import Step2 from "./step-2.jsx";
import Step3 from "./step-3.jsx";
import Type from "../../assets/type.png";
import Details from "../../assets/details.png";
import Location from "../../assets/location.png";
import useIncidents from "../../hooks/use-incidents.jsx";
import Incident1 from "../../assets/incident-1.png";
import { v4 as uuidv4 } from "uuid";

const StepCard = ({ id, icon, title, description }) => {
  return (
    <div
      className={`${
        id === 3
          ? "sm:col-span-2 mdincident:col-span-1 w-full mdincident:w-[240px] xl4:w-[300px]"
          : "w-full sm:w-[240px] xl4:w-[300px]"
      } px-4 py-6 bg-normal-whitesmoke rounded-lg border-high-whitesmoke`}
    >
      <img src={icon} alt="icon" />
      <div className="mt-10">
        <h3 className="text-xl font-bold xl4:text-2xl text-high-dark">
          {title}
        </h3>
        <p className="mt-2 text-sm font-normal xl4:text-lg text-medium-gray">
          {description}
        </p>
      </div>
    </div>
  );
};

const NewIncident = () => {
  const navigate = useNavigate();
  const incidents = useIncidents();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedType, setSelectedType] = useState(null);
  const [details, setDetails] = useState({ title: "", description: "" });
  const [address, setAddress] = useState("");

  const steps = [
    {
      icon: Type,
      title: "What type of incident?",
      description: "Choose the category that best describes the incident.",
    },
    {
      icon: Details,
      title: "Tell us about the incident?",
      description: "Let’s connect the dots and see where to start.",
    },
    {
      icon: Location,
      title: "Where did the incident occur?",
      description: "Lorem ipsum dolar sit general sac mascho werho",
    },
  ];

  const nextStep = () => {
    if (currentStep === 1) {
      if (selectedType) {
        setCurrentStep((prev) => prev + 1);
      } else {
        alert("Please select an Incident type!");
      }
    } else if (currentStep === 2) {
      if (
        details.title.trim() !== "" &&
        details.title.replace(/\s+/g, "").length >= 10 &&
        details.description.trim() !== "" &&
        details.description.replace(/\s+/g, "").length >= 40
      ) {
        setCurrentStep((prev) => prev + 1);
      } else {
        if (details.title.trim() === "" || details.description.trim() === "") {
          alert("Title and Description are required!");
        } else {
          alert("Title should at least 10 characters and Description 40 long!");
        }
      }
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const cancel = () => {
    if (selectedType) {
      setSelectedType(null);
    }

    if (details.title.trim() !== "" || details.description.trim() !== "") {
      setDetails({ title: "", description: "" });
    }

    if (address.trim() !== "") {
      setAddress("");
    }

    navigate("/incidents");
  };

  const finish = () => {
    if (address.trim() !== "" && address.replace(/\s+/g, "").length >= 10) {
      const incident = {
        id: uuidv4(),
        type: selectedType,
        img: Incident1,
        title: details.title,
        description: details.description,
        location: address,
        amount: "1,456,654.00",
      };
      incidents.push(incident);
      setSelectedType(null);
      setDetails({ title: "", description: "" });
      setAddress("");
      navigate(`/locations/${incidents[incidents.length - 1].id}`);
    } else {
      if (address.trim() === "") {
        alert("Address is required!");
      } else {
        alert("Address should at least 10 characters long!");
      }
    }
  };

  return (
    <>
      {currentStep !== 0 && (
        <PageHeader
          page="new-incident"
          currentStep={currentStep}
          next={nextStep}
          back={prevStep}
          cancel={cancel}
          finish={finish}
        />
      )}
      {currentStep === 0 && (
        <div className="flex flex-col items-center justify-center gap-8 px-8 mt-20 mb-16 xspghd:mb-40 sm:px-20">
          <div className="text-center">
            <h1 className="font-bold text-[25px] sm:text-[32px] xl4:text-5xl text-high-dark">
              Let’s get started
            </h1>
            <p className="text-sm font-normal text-medium-gray sm:text-base xl4:text-lg xl4:mt-2">
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum{" "}
              <br className="hidden sm:block" /> dolar sit general sac mascho
              werhoLorem ipsum dolar sit gene
            </p>
          </div>
          <div className="flex items-center justify-between h-1 w-full sm:w-[600px] xl4:w-[700px] bg-high-whitesmoke">
            <div className="w-[30px] h-[30px] bg-high-whitesmoke rounded-full" />
            <div className="w-[30px] h-[30px] bg-high-whitesmoke rounded-full" />
            <div className="w-[30px] h-[30px] bg-high-whitesmoke rounded-full" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-10 sm:grid-cols-2 mdincident:grid-cols-3">
            {steps.map(({ icon, title, description }, i) => {
              return (
                <StepCard
                  id={i + 1}
                  icon={icon}
                  title={title}
                  description={description}
                  key={i}
                />
              );
            })}
          </div>
          <button
            className="bg-high-pmr hover:bg-[#d44c04] text-white transition-colors text-sm font-bold px-8 rounded-md py-2 sm:mt-8 xl4:text-lg"
            onClick={nextStep}
          >
            Get started
          </button>
        </div>
      )}
      {currentStep === 1 && (
        <Step1
          selectedType={{ selectedType, setSelectedType }}
          details={{ details, setDetails }}
        />
      )}
      {currentStep === 2 && <Step2 details={{ details, setDetails }} />}
      {currentStep === 3 && <Step3 address={{ address, setAddress }} />}
    </>
  );
};

export default NewIncident;
