import { Info } from "../../types/IDinos";
import AccordionItem from "../accordion/AccordionItem";

const DinoDiscoveries = ({ info }: Info) => {
  return (
    <>
      <AccordionItem title="Descobertas" info={info.descobertas_recentes} />
    </>
  );
};

export default DinoDiscoveries;
