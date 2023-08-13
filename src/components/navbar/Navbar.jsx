import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { oluHigh2, menu, close } from "../../assets";
// import {olu} from "../assets/olu.svg";

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Navbar = (props) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { onSectionChange, menuOpened, setMenuOpened, onClick, label } = props;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className=" w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items -center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={oluHigh2}
            alt="logo"
            className="w-9 h-9 pr-1 mr-5 object-contain"
          />
          <p
            className="text-white text-[18px]
          font-bold cursor-pointer flex"
          >
            Olu &nbsp;
            <span className="sm:block hidden"> | Visioneer</span>
          </p>
        </Link>
          <div className="flex flex-1 justify-end items-center">
        <button
          className="z-20    top-12  right-12 p-3 bg-indigo-600 
      w-11 h-11 rounded-md"
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <div
            className={`bg-black h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "rotate-45 translate-y-0.5" : " "
            }`}
          />
          <div
            className={`bg-black h-0.5 rounded-md w-full my-1 ${
              menuOpened ? "hidden" : " "
            }`}
          />
          <div
            className={`bg-black h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "-rotate-45 " : " "
            }`}
          />
        </button>
            </div>
        <div
          className={`z-10 fixed top-0 right-0 bottom-0 backdrop-blur bg-indigo-500/50 transition-all overflow-hidden 
            flex flex-col ${menuOpened ? "w-80" : "w-0"}`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }  flex items-start justify-center flex-col gap-6 p-8 font-bold cursor-pointer hover:text-indigo-600 transition-colors`}
              onClick={() => setActive(link.title)}
            >
              <Link
                to={`#${link.id}`}
                onClick={() => {
                  setActive(link.title);
                  scrollToSection(link.id);
                }}
              >
                {link.title}
              </Link>
            </button>
          ))}
        </div>

        {/* <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x2`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <Link
                    to={`#${link.id}`}
                    onClick={() => {
                      setActive(link.title);
                      scrollToSection(link.id);
                    }}
                  >
                    {link.title}
                  </Link>
                </button>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
