import { Info } from "../../types/IDinos";
import AccordionItem from "../accordion/AccordionItem";

const DinoPop = ({ info }: Info) => {
  return (
    <>
      <AccordionItem
        title="Cultura popular"
        info={info.importancia_cultura_popular}
      />
    </>
  );
};

export default DinoPop;
