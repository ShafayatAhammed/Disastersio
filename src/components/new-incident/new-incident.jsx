import { useState } from "react";
import PageHeader from "../page-header.jsx";
import { useNavigate } from "react-router-dom";
import Step1 from "./step-1.jsx";
import Step2 from "./step-2.jsx";
import Step3 from "./step-3.jsx";

const NewIncident = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const cancel = () => {
    navigate("/incidents");
  };

  const finish = () => {
    navigate("/incidents");
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
      {currentStep === 0 && <p>this is new incident</p>}
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
      <button onClick={() => setCurrentStep((prev) => prev + 1)}>
        Get Started
      </button>
    </>
  );
};

export default NewIncident;
