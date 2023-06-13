import React from "react";
import CampaignCard from "../../../components/campaignCard";
import "animate.css";
import ecommerce from "../../../assets/ecommerce.png";
import productos from "../../../assets/productos.png";
import pagos from "../../../assets/pagos.png";
import envios from "../../../assets/envios.png";
import capacitacion from "../../../assets/capacitacion.png";

const campaigns = [
  {
    image: ecommerce,
    title: "Diseño",
    description:
      "Crearemos una tienda online atractiva que refleje la identidad de tu marca. Utilizaremos los colores y elementos visuales que representen la esencia de tu negocio, creando una experiencia coherente que transmita confianza y profesionalismo a tus clientes.",
    id: "metaHome",
  },
  {
    image: pagos,
    title: "Medios de Pago",
    description:
      "Configuramos los métodos de pago en tu tienda online para que tus clientes puedan realizar compras de manera fácil y segura. Te ayudamos a integrar opciones como Mercado Pago y transferencia bancaria brindando alternativas para realizar compras de manera segura y conveniente",
    id: "metaHome",
  },
  {
    image: envios,
    title: "Medios de Envío",
    description:
      "Configuramos los métodos de envío en tu tienda online para que puedas ofrecer a tus clientes diversas opciones de entrega. Nos encargamos de toda la integración en tu tienda, para que tú puedas brindar una experiencia de compra sin complicaciones.",
    id: "metaHome",
  },
  {
    image: productos,
    title: "Productos",
    description:
    "Cargamos y configuramos tus primeros productos en la tienda online. Desde imágenes atractivas y variantes de talles, hasta descripciones detalladas, nos aseguramos de que cada uno esté listo para cautivar a tus clientes",
    id: "metaHome",
  },
  {
    image: capacitacion,
    title: "Capacitación",
    description:
      "Aprende a administrar tu tienda online de forma autónoma. Te capacitaremos de forma personalizada para que adquieras los conocimientos necesarios para gestionar tu ecommerce. Desde crear productos hasta despachar tus ventas.",
    id: "metaHome",
  }
];

const MetaDetails = () => {
  return (
    <div
      id="tiendaDetails"
      className="flex flex-column bg-gray-100 min-h-[calc(90vh)]"
    >
      <div className="mb-24 md:w-full w-7/8">
        <div className="w-7/8 lg:m-auto md:ml-24 mt-18 mb-18">
          <h1 className="text-black text-4xl lg:text-5xl text-center mb-4 mt-4 animate__animated animate__fadeInUp">
            Creación de <span className="font-bold">Tienda Online</span>
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
  );
};

export default MetaDetails;
