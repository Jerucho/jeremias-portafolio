import { useEffect, useState } from "react";

export const Hero: React.FC = () => {
  const getRandomPosition = () => {
    return Math.floor(Math.random() * 60);
  };
  const getRandomSize = () => {
    return Math.floor(Math.random() * 120);
  };
  const createCircle = () => {
    const circle = document.createElement("div");
    circle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="446" height="590" viewBox="0 0 446 590" fill="none">
<g filter="url(#filter0_bf_5_583)">
<circle cx="151" cy="295" r="95" fill="url(#paint0_linear_5_583)" fill-opacity="0.6"/>
</g>
<defs>
<filter id="filter0_bf_5_583" x="-144" y="0" width="590" height="590" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="50"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5_583"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5_583" result="shape"/>
<feGaussianBlur stdDeviation="100" result="effect2_foregroundBlur_5_583"/>
</filter>
<linearGradient id="paint0_linear_5_583" x1="151" y1="200" x2="151" y2="390" gradientUnits="userSpaceOnUse">
<stop stop-color="#6AF5FF"/>
<stop offset="1" stop-color="#6EC2C8" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`;

    circle.classList.add("circle");
    circle.style.borderRadius = "50%";
    circle.style.filter = "blur(50px)";
    circle.style.pointerEvents = "none";
    circle.style.transition = "all 1.5s ease-out, opacity 1s ease-in";

    circle.style.position = "absolute";
    circle.style.top = `${getRandomPosition()}%`;
    circle.style.left = `${getRandomPosition()}%`;
    circle.style.width = `${getRandomSize()}px`;
    circle.style.height = `${getRandomSize()}px`;
    circle.style.zIndex = "100";
    circle.style.zIndex = "20";
    circle.style.opacity = "0";
    document.body.appendChild(circle);

    requestAnimationFrame(() => {
      circle.style.opacity = "1";
    });

    setTimeout(() => {
      circle.style.opacity = "0";
      setTimeout(() => {
        circle.remove();
      }, 1000);
    }, 2000);
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const intervalId = setInterval(() => {
        createCircle();
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [window.innerWidth]);
  return (
    <section
      id="home"
      className="bg-hero-pattern bg-fixed h-screen flex justify-between items-center px-[40px] md:px-[100px]"
    >
      <div className="flex flex-col gap-1rem font-FiraCode text-primary">
        <h3 className="text-3xl font-FiraCode font-bold ">Hello World!</h3>
        <h2 className="text-6xl font-bold">
          Jeremias Amador <br /> Fullstack Developer
        </h2>
        <p className="text-5xl font-FiraCode text-secondary font-bold"></p>
        <div className="flex flex-wrap items-center gap-[30px]">
          <a
            target="_blank"
            href="https://github.com/Jerucho"
            className="text-5xl transition-all ease-out hover:text-secondary hover:scale-110"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jeremias-amador-37b583264/"
            className="text-5xl transition-all ease-out hover:text-secondary hover:scale-110"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="text-2xl font-bold"
            href="mailto:info@jeremiasamador.com"
          >
            info@jeremiasamador.com
          </a>
        </div>
      </div>
      <div>
        <i className="fa-solid fa-chevron"></i>
      </div>
    </section>
  );
};
