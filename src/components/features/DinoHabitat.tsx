import { Info } from "../../types/IDinos";
import AccordionItem from "../accordion/AccordionItem";

const DinoHabitat = ({ info }: Info) => {
  return (
    <>
      <AccordionItem title="Tamanho" info={info.habitat} />
    </>
  );
};

export default DinoHabitat;
