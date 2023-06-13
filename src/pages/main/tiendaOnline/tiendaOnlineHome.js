import React from "react";
import tiendaOnlineImage from "../../../assets/tiendaOnlineImage.png";
import Arrows from "../../../assets/arrows.png";
import { handleOnClick } from "../../../components/navbar";

const tiendaOnlineHome = () => {
  return (
    <div
      id="tiendaOnlineHome"
      className="bg-primary flex flex-row flex-wrap m-auto min-h-[calc(90vh)]"
    >
      <div className="flex flex-row flex-wrap text-start">
        {/* div en columna con un titulo arriba y un texto abajo */}
        <div className="flex flex-col w-full lg:w-3/5 ml-12 justify-center">
          <div>
            <h1 className="align-middle font-bold text-5xl mb-12 mt-12 lg:text-6xl text-start sm:mt-16 animate__animated animate__fadeInUp">
              Diseño de Tienda Online
            </h1>
          </div>
          <div>
            <p className="text-sm md:text-xl lg:text-2xl text-start align-middle animate__animated animate__fadeInUp">
              Aprovecha el poder del comercio electrónico con una tienda online
              a medida. Nosotros nos ocupamos de cada detalle, desde el diseño
              atractivo hasta la funcionalidad, para que puedas destacar y
              vender más en internet. Además, te proporcionaremos la
              capacitación necesaria para que puedas gestionarla desde el primer
              día.
            </p>
          </div>
          <div className="mt-6">
            <button
              className="btn btn-accent w-48"
              onClick={() => handleOnClick("tiendaDetails")}
            >
              Más Información
            </button>
          </div>
          <div className="align-bottom">
            <img src={Arrows} className="mt-8" alt="logo" />
          </div>
        </div>
        <div className="w-4/5 md:w-2/3 lg:w-96 m-auto p-4 md:p-2">
          <img
            className="object-contain rounded-[50px] mx-auto rounded-bl-[60px] rounded-br-[10px] rounded-tl-[15px] rounded-tr-[60px]"
            src={tiendaOnlineImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default tiendaOnlineHome;
