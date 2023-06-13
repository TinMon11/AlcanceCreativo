import React from "react";
import Main from "./main/main";
import Servicios from "./servicios/servicios";
import Nosotros from "./nosotros/nosotros";
import MetaHome from "./main/meta/metaHome";
import MetaDetails from "./main/meta/metaDetail";
import GoogleHome from "./main/google/googleHome";
import GoogleDetails from "./main/google/googleDetail";
import RedesHome from "./main/redes/redesHome";
import RedesDetails from "./main/redes/redesDetail";
import TiendaOnlineHome from "./main/tiendaOnline/tiendaOnlineHome";
import TiendaDetails from "./main/tiendaOnline/tiendaDetail";
import Contactanos from "../pages/contacto/contacto";
import Preguntas from "./preguntas/preguntas";

const AllContents = () => {
  return (
    <>
      <Main />
      <Servicios />
      <Nosotros />
      <MetaHome />
      <MetaDetails />
      <GoogleHome />
      <GoogleDetails />
      <RedesHome />
      <RedesDetails />
      <TiendaOnlineHome/>
      <TiendaDetails />
      <Contactanos/>
      <Preguntas />
    </>
  );
};

export default AllContents;
