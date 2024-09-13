import { useState } from "react";
import { DinoInfos } from "../types/IDinos";

import Dino from "./Dino";
import { dinoData } from "../data/dino-data";

const Dinosaurs = () => {
  const [infos] = useState<DinoInfos[]>(dinoData);

  return (
    <section>
      {infos.map((info) => {
        return <Dino key={info.id} info={info} />;
      })}
    </section>
  );
};

export default Dinosaurs;
