import React from "react";
import CampaignCard from "../../../components/campaignCard";
import "animate.css";
import post_icon from "../../../assets/post_icon.png";
import messenger_icon from "../../../assets/messenger_icon.png";
import whatsapp_icon from "../../../assets/whatsapp_icon.png";
import remarketing_icon from "../../../assets/remarketing_icon.png";
import instagram_icon from "../../../assets/instagram_icon.png";
import conversion_icon from "../../../assets/conversion_icon.png";
import { Helmet } from "react-helmet";


const campaigns = [
  {
    image: post_icon,
    title: "Interacción",
    description:
      "Convierte a los interesados en clientes reales. Mediante interacciones en tus anuncios, estimulamos a tu audiencia a participar activamente. Genera reacciones, comentarios y compartidos, fortaleciendo tu marca, ampliando tu alcance y aumentando tus conversiones.",
    id: "metaHome",
  },
  {
    image: remarketing_icon,
    title: "Remarketing",
    description:
      "Alcanza nuevamente a tu público objetivo, ya sea visitantes anteriores, seguidores o aquellos que interactuaron con tu marca. Destaca tu propuesta de valor, incrementa tus posibilidades de venta y consolida la relación con tu público objetivo",
    id: "metaHome",
  },
  {
    image: conversion_icon,
    title: "Conversión",
    description:
      "Atrae a más compradores a tu tienda online con nuestras estrategias de conversión en Facebook e Instagram. Aumentaremos el tráfico a tu sitio para maximizar tus resultados. Convierte visitantes en ventas reales.",
    id: "metaHome",
  },
  {
    image: whatsapp_icon,
    title: "Mensajes a WhatsApp",
    description:
      "Aprovecha la combinación de Whatsapp con tus Redes Sociales. Incentivamos a potenciales clientes a contactarte por Whatsapp, brindando una comunicación directa y personalizada. Convierte potenciales clientes en ventas.",
    id: "metaHome",
  },
  {
    image: instagram_icon,
    title: "Mensajes a Instagram",
    description:
      "Potencia tu negocio utilizando Instagram Direct. Con campañas efectivas fomentamos a posibles clientes a contactarte con un mensaje en Instagram, ayudándote a convertir oportunidades en ventas tangibles.",
    id: "metaHome",
  },
  {
    image: messenger_icon,
    title: "Mensajes a Messenger",
    description:
      "Establece vínculos directos con tu audiencia a través de Messenger. Con campañas motivamos a los interesados a contactarte por Messenger, facilitando una comunicación directa. Convierte oportunidades en ventas reales.",
    id: "metaHome",
  },
];

const MetaDetails = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Agencia Publicidad Digital en Facebook e Instagram. Facebook Ads, Redes Sociales, Creacitón Contenido, Marketing Digital"
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
        id="metaDetails"
        className="flex flex-column bg-gray-100 min-h-[calc(90vh)]"
      >
        <div className="mb-24 md:w-full w-7/8">
          <div className="w-7/8 lg:m-auto md:ml-24 mt-12 mb-18">
            <h1 className="text-black text-4xl lg:text-5xl text-center mb-4 mt-4 animate__animated animate__fadeInUp">
              Publicidad en <span className="font-bold">Facebook</span>
            </h1>
          </div>
          <div className="flex flex-column flex-wrap gap-5 mt-8 m-auto lg:w-4/5 lg:mt-8 justify-center">
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

export default MetaDetails;
