import { Info } from "../../types/IDinos";
import AccordionItem from "../accordion/AccordionItem";

const DinoWeight = ({ info }: Info) => {
  return (
    <>
      <AccordionItem title="Peso" info={info.peso} />
    </>
  );
};

export default DinoWeight;
