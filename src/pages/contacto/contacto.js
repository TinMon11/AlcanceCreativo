import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import dotenv from "dotenv";
dotenv.config();
import "react-toastify/dist/ReactToastify.css";

const Contactanos = () => {
  const [name, setName] = useState("");
  const [interests, setInterests] = useState([]);
  const [sendingFrom, setSendingFrom] = useState("");

  const validateForm = () => {
    const nameValue = name.trim();
    const whatsappValue = document.getElementById("whatsapp").value.trim();
    const emailValue = document.getElementById("email").value.trim();

    if (!nameValue || (!whatsappValue && !emailValue)) {
      toast.error("Completa todos los campos", {
        position: "bottom-center",
        autoClose: 2000,
        className: "text-lg font-bold",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSendingFrom(true);

    emailjs
      .sendForm(
        "service_alcance",
        "template_alcance",
        event.target,
        process.env.EMAIL_JS_KEY,
        {
          name: event.target.name.value,
          whatsapp: event.target.whatsapp.value,
          email: event.target.email.value,
          services: event.target.services
            ? Array.from(event.target.services)
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value)
                .join(", ")
            : "",
          comments: event.target.comments.value,
        }
      )
      .then((response) => {
        setSendingFrom(false);
        toast.success("Consulta Enviada 🚀", {
          position: "bottom-center",
          autoClose: 2000,
          className: "text-lg font-bold",
        });
      })
      .catch((error) => {
        setSendingFrom(false);
        console.error("Error sending email:", error);
        // Aquí puedes mostrar un mensaje de error o tomar otras medidas según sea necesario.
      });
  };

  const handleInterestChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setInterests((prevInterests) => [...prevInterests, value]);
    } else {
      setInterests((prevInterests) =>
        prevInterests.filter((interest) => interest !== value)
      );
    }
  };

  const handleWhatsappClick = () => {
    const services = interests.map((interest) => {
      if (interest === "ads_facebook_instagram") {
        return "Facebook/Instagram Ads";
      } else if (interest === "ads_google") {
        return "Google Ads";
      } else if (interest === "redes_sociales") {
        return "Redes Sociales";
      } else if (interest === "tienda_online") {
        return "Tienda Online";
      }
      return "";
    });

    let nombreString = "";
    if (name != "") {
      nombreString = `Hola, mi nombre es ${name}. `;
    } else {
      nombreString = `Hola equipo de Alcance Creativo. `;
    }

    let serviciosString = "";
    if (services.length === 0) {
      serviciosString = "contratar sus servicios para hacer crecer mi marca";
    } else {
      serviciosString =
        "información sobre sus servicios de " + services.join(", ");
    }
    const message = `${nombreString}Estoy interesado en ${serviciosString}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=542954695949&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      id="contacto"
      className="bg-primary flex flex-col items-center pt-6 min-h-[calc(90vh)] w-7/8"
    >
      <h1 className="text-4xl md:text-5xl text-white mb-4 mt-4">
        Contactanos Para <span className="font-bold">Trabajar en Equipo</span>
      </h1>

      <ToastContainer></ToastContainer>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-4 text-sm w-4/5 md:w-[600px] mt-4"
      >
        <div className="mb-2 flex items-center">
          <label
            htmlFor="name"
            className="block text-black font-bold mr-2 w-1/3"
          >
            Nombre y Apellido:
          </label>
          <input
            type="text"
            id="name"
            className="flex-1 border-gray-300 border p-2 text-black"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-2 flex items-center">
          <label
            htmlFor="whatsapp"
            className="block text-black font-bold mr-2 w-1/3 text-black"
          >
            Whatsapp de Contacto:
          </label>
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            className="flex-1 border-gray-300 border p-2 text-black"
          />
        </div>

        <div className="mb-2 flex items-center">
          <label
            htmlFor="email"
            className="block text-black font-bold mr-2 w-1/3"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="flex-1 border-gray-300 border p-2 text-black"
          />
        </div>

        <label className="block text-black font-bold text-lg mb-1">
          Quiero información sobre:
        </label>
        <div className="mb-2 flex flex-column flex-wrap justify-around text-black gap-4">
          <div>
            <label
              htmlFor="ads_facebook_instagram"
              className="flex items-center"
            >
              <input
                type="checkbox"
                name="services"
                id="ads_facebook_instagram"
                value="ads_facebook_instagram"
                onChange={handleInterestChange}
              />
              <span className="ml-2">Facebook/Instagram Ads</span>
            </label>
          </div>
          <div>
            <label htmlFor="ads_google" className="flex items-center">
              <input
                type="checkbox"
                name="services"
                id="ads_google"
                value="ads_google"
                onChange={handleInterestChange}
              />
              <span className="ml-2">Google Ads</span>
            </label>
          </div>
          <div>
            <label htmlFor="redes_sociales" className="flex items-center">
              <input
                type="checkbox"
                name="services"
                id="redes_sociales"
                value="redes_sociales"
                onChange={handleInterestChange}
              />
              <span className="ml-2">Redes Sociales</span>
            </label>
          </div>
          <div>
            <label htmlFor="tienda_online" className="flex items-center">
              <input
                type="checkbox"
                name="services"
                id="tienda_online"
                value="tienda_online"
                onChange={handleInterestChange}
              />
              <span className="ml-2">Tienda Online</span>
            </label>
          </div>
        </div>

        <div className="mb-2 flex items-center">
          <label
            htmlFor="comments"
            className="block text-black font-bold mr-2 w-1/3"
          >
            Dejanos tu consulta:
          </label>
          <textarea
            id="comments"
            name="comments"
            className="text-black flex-1 border-gray-300 border p-2"
            rows="4"
          ></textarea>
        </div>
        <div className="flex flex-column items-center justify-center gap-2">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            {sendingFrom ? "Enviando..." : "Enviar Consulta"}
          </button>
          <button
            onClick={handleWhatsappClick}
            className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Contactar por Whatsapp
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactanos;
