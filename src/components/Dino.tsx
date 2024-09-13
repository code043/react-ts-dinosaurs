import { Info } from "../types/IDinos";
import { DinoBehavior } from "./features/DinoBehavior";
import DinoDiet from "./features/DinoDiet";
import DinoDiscoveries from "./features/DinoDiscoveries";
import DinoFeatures from "./features/DinoFeatures";
import DinoHabitat from "./features/DinoHabitat";
import DinoHeader from "./features/DinoHeader";
import DinoPeriod from "./features/DinoPeriod";
import DinoPop from "./features/DinoPop";
import DinoSize from "./features/DinoSize";
import DinoWeight from "./features/DinoWeight";

const Dino = ({ info }: Info) => {
  return (
    <>
      <article>
        <header>
          <DinoHeader info={info} />
        </header>

        <div className="accordion">
          <DinoPeriod info={info} />
          <DinoDiet info={info} />
          <DinoSize info={info} />
          <DinoWeight info={info} />
          <DinoHabitat info={info} />
          <DinoFeatures info={info} />
          <DinoBehavior info={info} />
          <DinoDiscoveries info={info} />
          <DinoPop info={info} />
        </div>
      </article>
    </>
  );
};
export default Dino;
