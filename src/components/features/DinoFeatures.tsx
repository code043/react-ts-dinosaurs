import { Info } from "../../types/IDinos";
import AccordionItem from "../accordion/AccordionItem";

const DinoFeatures = ({ info }: Info) => {
  return (
    <>
      <AccordionItem title="Caracteristics" info={info.caracteristicas} />
    </>
  );
};

export default DinoFeatures;
