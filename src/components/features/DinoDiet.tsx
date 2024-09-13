import { Info } from "../../types/IDinos";
import AccordionItem from "../accordion/AccordionItem";

const DinoDiet = ({ info }: Info) => {
  return (
    <>
      <AccordionItem title="Dieta" info={info.dieta} />
    </>
  );
};

export default DinoDiet;
