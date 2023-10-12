import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from a library like React Icons

const navItem = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Games",
    path: "/games",
  },
  {
    label: "Results",
    path: "/results",
  },
  {
    label: "Standings",
    path: "/standings",
  },
  {
    label: "Stats",
    path: "/stats",
  },
  {
    label: "Teams",
    path: "/teams",
  },
  {
    label: "Pools",
    path: "/pools",
  },
  {
    label: "FB Challenge",
    path: "/fb-challenges",
  },
  {
    label: "Records",
    path: "/records",
  },
  {
    label: "Admin",
    path: "/admin",
  },
];

const MainNavBar = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div
      className="w-full rounded border border-[#626262] my-5 flex items-center"
      style={{
        background: "linear-gradient(185deg, #45423A 15.54%, #202126 114.57%)",
      }}
    >
      <button
        onClick={toggleNav}
        className="md:hidden absolute top-0 left-0 m-3 text-white"
      >
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul
        className={`${
          isNavOpen ? "block" : "hidden"
        } md:flex flex-wrap gap-4 h-full items-center`}
      >
        {navItem.map((item, index) => {
          return (
            <li
              key={index}
              className={`text-xl px-2 h-full flex items-center font-light text-white
                          ${
                            location.pathname === item.path ? "active-item" : ""
                          }
                        `}
            >
              <NavLink to={item.path}>{item.label} </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainNavBar;
