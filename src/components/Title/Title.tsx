import "../../styles/FadeInAnimation.css";

type TitleProps = {
  title: string;
};

export const Title: React.FC<TitleProps> = ({ title }: TitleProps) => {
  return (
    <>
      <h2 className="text-primary text-4xl md:text-6xl font-FiraCode font-bold px-[50px] md:px-[100px] my-[50px] fadeIn">
        {title}
      </h2>
    </>
  );
};
