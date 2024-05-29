

import { useState } from "react";
import "./stylesAccordion.css";
import image1 from "./Designer(37).jpeg";
import image2 from "./Designer(37).jpeg";
import image3 from "./Designer(37).jpeg";
import image4 from "./Designer(37).jpeg";
import image5 from "./Designer(37).jpeg";

const items = [
  {
    header: "¿Cómo me siento?",
    image: image2,
    text: `La adolescencia es un período crucial para el desarrollo de hábitos sociales y emocionales importantes para el bienestar mental. 
    Durante esta etapa, los jóvenes experimentan una serie de cambios físicos, emocionales y sociales que pueden influir en cómo se sienten, 
    es por ello que es fundamental que se promueva su salud mental, a través de intervenciones que fortalezcan su capacidad para regular las emociones,
    fomentar comportamientos saludables y desarrollar la resiliencia para hacer frente a situaciones difíciles. Estas intervenciones se centran 
    en potenciar alternativas a los comportamientos de riesgo, promover entornos y redes sociales favorables y brindar herramientas para gestionar 
    de manera saludable las emociones.`,
  },

  {
    header: "New Zealand",
    image: image1,
    text: `Image description`,
  },

  {
    header: "Indonesia",
    image: image4,
    text: `Image description`,
  },
  {
    header: "South Africa",
    image: image5,
    text: `Image description`,
  },
  {
    header: "Spain",
    image: image3,
    text: `Image description`,
  },
];

export const ImageAccordion = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <>
      <div
        className="image-accordion-background"
        style={{ backgroundImage: `url(${items[active].image})` }}
      ></div>
      <div className="image-accordion">
        {items.map((item, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <div
              key={item.image}
              className={`image-accordion-item ${isActive}`}
              onClick={() => handleToggle(index)}
            >
              <img src={item.image} />
              <div className="content">
                {/* <span className="material-symbols-outlined">photo_camera</span> */}
                <div>
                  <h2>{item.header}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageAccordion