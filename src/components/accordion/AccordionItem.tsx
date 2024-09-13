import useToggle from "../../hooks/useToggle";
import { Answer } from "./Answer";
import { Question } from "./Question";

const AccordionItem = ({ title, info }: { title: string; info: string }) => {
  const [showInfo, setShowInfo] = useToggle(false);
  return (
    <div className="question" onClick={setShowInfo}>
      <Question title={title} showInfo={showInfo} />
      <Answer info={info} showInfo={showInfo} />
    </div>
  );
};
export default AccordionItem;
