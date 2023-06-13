import React from "react";
import "animate.css";

const RedesDetail = () => {
  return (
    <div id="redesDetails" className="bg-gray-100 min-h-[calc(90vh)]">
      <div className="w-full lg:m-auto md:ml-24">
        <h1 className="text-black text-4xl lg:text-5xl text-center mb-4 pt-4 animate__animated animate__fadeInUp">
          Gestión de <span className="font-bold">Redes Sociales</span>
        </h1>
      </div>
      <div className="flex flex-column flex-wrap justify-center gap-12 m-auto lg:mt-12">
        <div
          className="min-h-[300px] text-black shadow-xl w-4/5 md:w-[380px] lg:w-[420px] bg-white rounded-bl-[50px] rounded-tr-[50px] rounded-br-[10px] rounded-tl-[15px] p-2
    animate__animated animate__fadeInUp"
        >
          <div className="text-center mt-2 w-full">
            <h2>
              Pack <span className="font-bold">Presencia Efectiva</span>
            </h2>
          </div>
          <div className="text-sm text-start ml-2 mt-2 w-7/8 bg-base-100 text-black">
            <ul className="list-disc ml-4 mt-4">
              <li>3 posteos y 3 stories por semana.</li>
              <li>
                Creación de contenido visual esencial para mantener una
                presencia efectiva.
              </li>
              <li>
                Diseño de gráficos y/o imágenes que reflejen tu identidad de
                marca.
              </li>
              <li>
                Adaptación del contenido a las distintas plataformas sociales.
              </li>
              <li>
                Impulsa tu presencia en las redes sociales con un pack esencial
                y de calidad.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="min-h-[300px] text-black shadow-xl w-4/5 md:w-[380px] lg:w-[420px] bg-white rounded-bl-[50px] rounded-tr-[50px] rounded-br-[10px] rounded-tl-[15px] p-2
    animate__animated animate__fadeInUp"
        >
          <div className="text-center mt-2 w-full">
            <h2>
              Pack <span className="font-bold">Impacto Estratégico</span>
            </h2>
          </div>
          <div className="text-sm text-start ml-2 mt-2 w-7/8 bg-base-100 text-black">
            <ul className="list-disc ml-4 mt-4">
              <li>5 posteos y 5 stories por semana.</li>
              <li>Creactión de material visual de para impresionar a tu audiencia.</li>
              <li>Diseño de imágenes y/o animaciones impactantes y cautivadoras.</li>
              <li>Personalización del diseño acorde a tu marca y estilo.</li>
              <li>Potencia tu presencia en las redes sociales con un pack profesional y de alto impacto.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-black w-4/5 m-auto mt-6 mb-4">
        <p>
          <span className="font-bold">Potencia tu presencia en Redes Sociales.</span> Nuestro enfoque
          estratégico y contenido personalizado te ayudarán a destacar entre la
          multitud, conectar con tu audiencia y alcanzar tus objetivos.
        </p>
      </div>
    </div>
  );
};

export default RedesDetail;
