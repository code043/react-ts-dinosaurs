import { Info } from "../../types/IDinos";
import AccordionItem from "../accordion/AccordionItem";

const DinoSize = ({ info }: Info) => {
  return (
    <>
      <AccordionItem title="Tamanho" info={info.tamanho} />
    </>
  );
};

export default DinoSize;
