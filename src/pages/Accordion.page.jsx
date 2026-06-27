import { useState } from "react";
import { AccordionCard } from "../components/accordion/AccordionCard";

export const Accordion = () => {
  const [activeId, setActiveId] = useState([]);
  const accordions = new Array(6).fill(0);
  console.log("active", activeId);
  return (
    <div className="my-10 flex flex-col gap-5 items-center justify-center">
      {accordions.map((_, ind) => (
        <AccordionCard
          key={ind}
          id={ind}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </div>
  );
};
