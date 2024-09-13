import { Info } from "../../types/IDinos";

import AccordionItem from "../accordion/AccordionItem";

const DinoPeriod = ({ info }: Info) => {
  return (
    <>
      <AccordionItem title="Periodo" info={info.periodo} />
    </>
  );
};

export default DinoPeriod;
