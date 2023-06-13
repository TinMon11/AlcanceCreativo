import React from "react";
import fotoMartin from "../../assets/foto_martin.png";
import fotoFiorella from "../../assets/foto_fiorella.png";
import Avatar from "../../components/avatar";

const team = [
  {
    image: fotoMartin,
    name: "MARTIN",
    text: "Ingeniero Industrial y Desarrollador Web especializado en Marketing Digital y Posicionamiento Web. Tengo la experiencia necesaria para llevar tu negocio al siguiente nivel.",
  },
  {
    image: fotoFiorella,
    name: "FIORELLA",
    text: "Diseñadora y Community Manager con experiencia en Publicidad Digital y gestión de Redes Sociales. Mi objetivo es crear una imagen de marca impactante y atractiva para impulsar tus ventas en línea.",
  },
];

const nosotros = () => {
  return (
    <>
      <div
        id="nosotros"
        className="content-center min-h-[calc(100vh-24px)] bg-white p-4"
      >
        <div>
          <p className="text-black text-bold text-5xl mb-8">¿Quiénes Somos?</p>
        </div>
        <div className="flex flex-wrap justify-center m-auto w-7/8 gap:8 md:gap-12">
          {team.map((member, index) => (
            <Avatar
              key={index}
              image={member.image}
              name={member.name}
              text={member.text}
            />
          ))}
        </div>
        <div className="mt-4 text-base text-black w-4/5 m-auto">
          <p>
            Con nuestro expertise en posicionamiento de marcas en línea, nos
            dedicamos a hacer crecer tus ventas. Confía en nosotros para
            posicionar tu negocio y alcanzar el éxito digital. <br />
            <span className="font-bold">
              ¡Contactanos ahora y descubrí todo lo que podemos lograr juntos!
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default nosotros;
