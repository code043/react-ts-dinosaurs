import { Info } from "../../types/IDinos";

const DinoHeader = ({ info }: Info) => {
  return (
    <>
      <div>
        <h3>{info.nome}</h3>
      </div>
      <div>
        <img src={info.image} alt="t-rex" />
      </div>
    </>
  );
};

export default DinoHeader;
