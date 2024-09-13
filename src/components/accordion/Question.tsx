import Icon from "../icons/Icon";

export const Question = ({
  title,
  showInfo,
}: {
  title: string;
  showInfo: boolean;
}) => {
  return (
    <>
      <header>
        <h4>{title}</h4>
        <div>
          <Icon showInfo={showInfo} />
        </div>
      </header>
    </>
  );
};
