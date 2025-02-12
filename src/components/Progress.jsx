import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

function Progress() {
  const { pathname } = useLocation();
  const [step, setStep] = useState(1);
  const [stage, setStage] = useState("Ticket Selection");
  const totalSteps = 3;

  const stepMapping = {
    "/": {
      step: 1,
      stage: "Ticket Selection",
    },
    "/event": {
      step: 1,
      stage: "Ticket Selection",
    },
    "/form": {
      step: 2,
      stage: "Attendee Details",
    },
    "/ticket": {
      step: totalSteps,
      stage: "Ready",
    },
  };

  useEffect(() => {
    setStep(stepMapping[pathname]?.step);
    setStage(stepMapping[pathname]?.stage);
  }, [pathname]);

  const progressWidth = useMemo(() => (step / totalSteps) * 90, [step]);

  return (
    <div className="space-y-3">
      <div className="w-full flex justify-between items-center flex-wrap gap-4 md:gap-0">
        <h3 className="text-lg md:text-3xl font-jeju font-normal ">{stage}</h3>
        <p>
          Step {step} / {totalSteps}
        </p>
      </div>
      <div className="w-full rounded-[5px] h-1 bg-tertiary relative ">
        <div
          className="absolute top-0 left-0 h-1 bg-primary  rounded-[5px] transition-all duration-300 "
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Progress;
