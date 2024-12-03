import "./Navbar.styles.css";
import { useEffect, useRef, useState } from "react";
export const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleScroll = () => {
    if (navRef.current) {
      if (window.scrollY >= 0) {
        navRef.current.classList.toggle("bg-tertiary", window.scrollY > 0);
        navRef.current.classList.toggle("shadow-md", window.scrollY > 0);
        navRef.current.classList.toggle("text-secondary", window.scrollY > 0);
        navRef.current.classList.toggle("backdrop-opacity-10");
        navRef.current.classList.toggle("z-50", window.scrollY > 0);
        navRef.current.classList.toggle("backdrop-blur-sm", window.scrollY > 0);

        navRef.current.children[0].classList.toggle(
          "text-secondary",
          window.scrollY > 0
        );
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed h-[90px] w-full top-0 left-0 flex flex-col md:flex-row justify-center items-center  md:px-[100px] px-[20px] py-4 shadow-md z-50"
    >
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-FiraCode font-bold text-primary md:text-4xl">
          Jeremias Amador
        </h1>
        <button
          className="md:hidden text-primary text-5xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i
            className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-align-justify"}`}
          ></i>
        </button>
      </div>
      <ul
        className={`w-full ease-in absolute p-[30px] gap-[20px] top-[90px] md:relative md:top-0 md:w-[50%] justify-center  flex flex-col md:flex-row list-none items-start md:items-center md:gap-[50px]  text-primary text-xl font-FiraCode transition-all duration-300 ${
          menuOpen ? "block bg-tertiary" : "hidden"
        } md:flex`}
      >
        <li className="hover:text-secondary transition-colors duration-300 cursor-pointer border-b md:border-0 w-full md:w-auto p-[3px]">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-secondary transition-colors duration-300 cursor-pointer border-b md:border-0 w-full md:w-auto p-[3px]">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="hover:text-secondary transition-colors duration-300 cursor-pointer border-b md:border-0 w-full md:w-auto p-[3px]">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-secondary transition-colors duration-300 cursor-pointer border-b md:border-0 w-full md:w-auto p-[3px]">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
