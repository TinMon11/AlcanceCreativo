import React from "react";
import ServiceCard from "../../components/serviceCard";
import "animate.css";
import facebbookAds from "../../assets/facebookAds.png";
import googleAds from "../../assets/googleAds.png";
import redesHome from "../../assets/redesHome.png";


const services = [
  {
    image: facebbookAds,
    title: "Meta Ads",
    description:
      "Potencia tus ventas y alcanza a miles de usuarios con anuncios en Facebook e Instagram",
    id: "metaHome",
  },
  {
    image: googleAds,
    title: "Google Ads",
    description:
      "Aparece en los primeros resultados de búsqueda de Google con anuncios efectivos",
      id: "googleHome",
  },
  {
    image: redesHome,
    title: "Redes Sociales",
    description:
      "Potencia tu imagen de marca. Creamos contenido efectivo y aumentamos tu presencia en Facebook e Instagram",
      id: "redesHome",
  },
  {
    image: facebbookAds,
    title: "Tienda Online",
    description:
      "Atrae más clientes con una Tienda Online atractiva. Potencia tus ventas en el mundo digital.",
      id: "tiendaOnlineHome",
  },
];

const servicios = () => {
  return (
    <div id="servicios" className="flex flex-column bg-primary min-h-[calc(90vh)]">
      <div className="mb-24 md:w-full w-7/8">
        <div className="w-7/8 lg:m-auto ml-12 md:ml-24 mt-12 mb-18">
          <h1 className="text-4xl lg:text-5xl text-center mb-2 animate__animated animate__fadeInUp">
            NUESTROS <span className="font-bold">SERVICIOS</span>
          </h1>
        </div>
        <div className="flex flex-column flex-wrap gap-4 mt-4 lg:mt-12 justify-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              id={service.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default servicios;
