import React from "react";
import MobileMain from "../../assets/mobile_main.png";
import Arrows from "../../assets/arrows.png";
import "animate.css";
import { handleOnClick } from "../../components/navbar";

const main = () => {
  return (
    <div id="home" className="bg-primary flex flex-row flex-wrap items-center m-auto content-center h-[calc(100vh)]">
      <div className="lg:w-3/5 md:w-full w-7/8 m-auto">
        <div className="w-7/8 lg:m-auto ml-12 md:ml-24 mt-12 md:mt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-start mt-4 md:mt-16 animate__animated animate__fadeInUp">
            IMPULSA TU MARCA CON <span className="font-bold">CAMPAÑAS DIGITALES EFECTIVAS</span>
          </h1>
        </div>
        <div className="lg:text-start md:text-start mt-4">
          <button className="btn btn-accent font-bold btn-lg text-white rounded-full lg:w-72 md:mt-6
           lg:m-auto md:ml-24"
           onClick={()=>handleOnClick("contacto")}>
            CONTACTANOS
          </button>
        </div>
        <div className="lg:m-auto ml-12 md:ml-24 align-bottom animate__animated animate__fadeInLeft">
          <img src={Arrows} className="mt-8" alt="logo" />
        </div>
      </div>

      <div className="m-auto animate__animated animate__fadeInRight">
        <img className="mt-10 h-72 md:h-96" src={MobileMain} alt="" />
      </div>
    </div>
  );
};

export default main;
