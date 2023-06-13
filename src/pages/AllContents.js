import React from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Agencia de Marketing Digital - Alcance Creativo</title>
        <meta
          name="description"
          content="Alcance Creativo ofrece servicios profesionales de marketing digital para empresas y emprendedores. Ofrecemos campañas de publicidad en redes sociales, SEO, diseño web y más."
        />
        <meta
          name="keywords"
          content="Agencia Marketing digital, TiendaNube, Facebook Ads, Google Ads, redes sociales, tiendas online, Instagram Ads, Publicidad Digital, Redes Sociales, Community Manager"
        />
        <meta property="og:title" content="Agencia de Marketing Digital - ALcance Creativo" />
        <meta
          property="og:description"
          content="Aumenta tus Ventas Online. Somos expertos en Campañas de Facebook Ads, Google Ads, gestión de redes sociales y creación de tiendas online."
        />
      </Helmet>
      <Main />
      <Servicios />
      <Nosotros />
      <MetaHome />
      <MetaDetails />
      <GoogleHome />
      <GoogleDetails />
      <RedesHome />
      <RedesDetails />
      <TiendaOnlineHome />
      <TiendaDetails />
      <Contactanos />
      <Preguntas />
    </>
  );
};

export default AllContents;
