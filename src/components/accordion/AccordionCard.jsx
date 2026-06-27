import { ArrowBigDownIcon } from "lucide-react";

export const AccordionCard = ({ id, activeId, setActiveId }) => {
  return (
    <div className="w-full border border-gray-200 rounded-sm flex flex-col gap-4 px-4 py-1">
      <div
        className="flex flex-row items-center justify-between cursor-pointer"
        onClick={() => {
          // Keep multiple accordions OPEN
          setActiveId((prev) => {
            if (activeId.length && activeId.includes(id)) {
              return activeId.filter((active) => active != id);
            } else return [...prev, id];
          });
        }}
      >
        <h3 className="font-bold text-xl">Title</h3>
        <ArrowBigDownIcon size={20} />
      </div>

      <div
        className={`flex flex-col gap-3 ${activeId?.length && activeId.includes(id) ? " visible " : "hidden"} `}
      >
        <div>
          {" "}
          something related to accordion body textsomething related to accordion
          body text something related to accordion body text something related
          to accordion body text something related to accordion body text
          something related to accordion body text something related to
          accordion body text something related to accordion body text something
          related to accordion body text something related to accordion body
          text something related to accordion body text
        </div>
        <div className="border border-gray-200 rounded-sm">
          Accordion footer content
        </div>
      </div>
    </div>
  );
};
