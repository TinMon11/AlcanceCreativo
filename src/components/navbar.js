import React from "react";
import "../App.css";

import LogoAlcance from "../assets/LogoAlcance.jpg";

export const handleOnClick = (section_id) => {
  const element = document.getElementById(section_id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    window.scrollBy({ top: elementPosition - 96, behavior: "smooth" });
  }
};

const navbar = () => {
  return (
    <div className="navbar bg-primary w-7/8 justify-between align-middle font-medium h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <button onClick={() => handleOnClick("servicios")} href="">
                Servicios
              </button>
              <ul className="p-2">
                <li>
                  <button onClick={() => handleOnClick("metaHome")} href="">
                    Meta Ads
                  </button>
                </li>
                <li>
                  <button onClick={() => handleOnClick("googleHome")} href="">
                    Google Ads
                  </button>
                </li>
                <li>
                  <button onClick={() => handleOnClick("redesHome")}>
                    Redes Sociales
                  </button>
                </li>
                <li>
                <button onClick={() => handleOnClick("tiendaOnlineHome")}>
                    Tienda Online
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button onClick={() => handleOnClick("nosotros")}>
                Nosotros
              </button>
            </li>
            <li>
              <button
              onClick={() => handleOnClick("preguntasHome")}>Preguntas</button>
            </li>
          </ul>
        </div>
        <button
          className="cursor-pointer"
          onClick={() => handleOnClick("home")}
        >
          <img src={LogoAlcance} className="ml-4 h-16" alt="logo" />
        </button>
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl">
            <li>
              <button
                className="hover:bg-secondary"
                onClick={() => handleOnClick("servicios")}
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                className="hover:bg-secondary"
                onClick={() => handleOnClick("nosotros")}
              >
                Nosotros
              </button>
            </li>
            <li>
              <button className="hover:bg-secondary"
              onClick={() => handleOnClick("preguntasHome")}>Preguntas</button>
            </li>
          </ul>
        </div>
        <button className="btn btn-accent mr-4 text-white hidden md:block"
        onClick={()=> handleOnClick("contacto")}>
          Trabajemos Juntos
        </button>
        <div className="flex flex-row bg-accent p-4 rounded-box items-center cursor-pointer md:hidden">
          <p className="text-[12px] font-bold" onClick={()=>handleOnClick("contacto")}>CONTACTANOS</p>
        </div>
      </div>
    </div>
  );
};

export default navbar;
