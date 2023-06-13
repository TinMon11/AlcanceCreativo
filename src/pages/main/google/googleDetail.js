import React from "react";
import CampaignCard from "../../../components/campaignCard";
import "animate.css";
import post_icon from "../../../assets/post_icon.png";
import whatsapp_icon from "../../../assets/whatsapp_icon.png";
import remarketing_icon from "../../../assets/remarketing_icon.png";
import conversion_icon from "../../../assets/conversion_icon.png";
import { Helmet } from "react-helmet";


const campaigns = [
  {
    image: post_icon,
    title: "Busqueda",
    description:
      "Llega a tu audiencia en el momento preciso. Nuestras campañas de búsqueda en Google Ads te permiten mostrar anuncios relevantes cuando los usuarios buscan activamente lo que ofreces. Lograrás atraer clientes altamente interesados en tu negocio.",
    id: "metaHome",
  },
  {
    image: remarketing_icon,
    title: "Display",
    description:
      "Atrae y cautiva a tu audiencia con anuncios visuales llamativos. Nuestras campañas de Display en Google Ads colocarán estratégicamente tus anuncios en sitios web populares, aumentando la visibilidad de tu marca y atrayendo a nuevos clientes potenciales de manera efectiva.",
    id: "metaHome",
  },
  {
    image: conversion_icon,
    title: "Remarketing",
    description:
      "Alcanza a tu público objetivo con remarketing estratégico. Nuestras tácticas en Google Ads te permiten llegar directamente a personas que ya han mostrado interés en tu negocio. Mantén una presencia constante, refuerza tu propuesta de valor y aumenta tus conversiones.",
    id: "metaHome",
  },
  {
    image: whatsapp_icon,
    title: "YouTube",
    description:
      "Potencia tu marca con las Campañas de Video en YouTube. Aprovecha el poder del video para destacarte ante la competencia y mejorar tu visibilidad online. Llega a tu audiencia objetivo de manera efectiva, generando interés y atrayendo tráfico cualificado a tu sitio web.",
    id: "metaHome",
  },
];

const GoogleDetails = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Campañas de Publicidad en Google Ads. Ofrecemos campañas de publicidad en redes sociales, SEO, diseño web y más."
        />
        <meta
          name="keywords"
          content="Agencia Marketing digital, TiendaNube, Facebook Ads, Google Ads, redes sociales, tiendas online, Instagram Ads, Publicidad Digital, Redes Sociales, Community Manager"
        />
        <meta
          property="og:title"
          content="Agencia de Marketing Digital - ALcance Creativo"
        />
        <meta
          property="og:description"
          content="Aumenta tus Ventas Online. Somos expertos en Campañas de Facebook Ads, Google Ads, gestión de redes sociales y creación de tiendas online."
        />
      </Helmet>
      <div
        id="googleDetails"
        className="flex flex-column bg-gray-100 min-h-[calc(90vh)]"
      >
        <div className="mb-4">
          <div className="w-7/8 lg:m-auto md:ml-24 mt-18 mb-18">
            <h1 className="text-black text-4xl lg:text-5xl text-center mb-4 mt-4 animate__animated animate__fadeInUp">
              Publicidad en <span className="font-bold">Google</span>
            </h1>
          </div>
          <div className="flex flex-column flex-wrap gap-5 m-auto lg:w-4/5 lg:mt-8 justify-center">
            {campaigns.map((campaign, index) => (
              <CampaignCard
                key={index}
                image={campaign.image}
                title={campaign.title}
                description={campaign.description}
                id={campaign.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleDetails;
