import { Info } from "../../types/IDinos";
import AccordionItem from "../accordion/AccordionItem";

export const DinoBehavior = ({ info }: Info) => {
  return (
    <>
      <AccordionItem title="Comportamento" info={info.comportamento} />
    </>
  );
};
