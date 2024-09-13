export const Answer = ({
  info,
  showInfo,
}: {
  info: string;
  showInfo: boolean;
}) => {
  return <>{showInfo && <p>{info}</p>}</>;
};
