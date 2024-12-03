import "../../styles/FadeInAnimation.css";
type PortfolioCardProps = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  linkGithub?: string;
  linkProject: string;
};

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
  techStack,
  linkGithub,
  linkProject,
}) => {
  return (
    <>
      <div className="flex  fadeIn bg-tertiary flex-col justify-between mx-[30px] my-[30px] p-1rem w-[400px] h-[auto] border-2 border-primary font-FiraCode gap-1rem shadow-primary shadow-3xl ease-linear transition-all hover:shadow-4xl">
        <div
          className={`w-full  h-200px ${image} bg-cover bg-center bg-no-repeat `}
        ></div>
        <div className="text-primary">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
          {
            <div className="flex gap-[5px] mt-1rem flex-wrap">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary font-bold text-tertiary px-[5px] py-[2px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          }
        </div>
        <div className="flex w-full justify-between gap-1rem">
          <a
            href={linkProject}
            className={`border-2 border-primary ease-out transition-all text-primary px-1rem py-0.5rem ${linkGithub ? "w-4/5" : "w-full"} hover:bg-primary hover:text-tertiary flex justify-center items-center text-2xl`}
          >
            View Site
          </a>
          {linkGithub && (
            <a
              href={linkGithub}
              className="border-2 ease-out transition-all hover:bg-primary hover:text-tertiary border-primary text-primary h-full flex justify-center items-center text-3xl px-[20px]"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          )}
        </div>
      </div>
    </>
  );
};
