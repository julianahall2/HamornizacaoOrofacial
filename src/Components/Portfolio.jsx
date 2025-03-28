/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/andrea.jpg";
import { title } from "process";
import { deserialize } from "v8";
import { url } from "inspector";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Toxina Botulíca",
    description:
      "Reduz rugas dinâmicas e suaviza linhas de expressão para um visual rejuvenescido. Atua bloqueando sinais nervosos que causam contrações musculares.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Preenchimento com Acido Hialurônico",
    description:
      "Restaura volumes faciais e aprimora os contornos do rosto com resultados naturais. Proporciona hidratação e elasticidade, harmonizando a estética facial.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Bioestimulador de Colageno",
    description:
      "Estimula a produção natural de colágeno, melhorando a firmeza e a textura da pele. Resulta em um aspecto mais jovem e revitalizado, com benefícios duradouros.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Biorremodelador Tecidual ",
    description:
      "Promove a reestruturação dos tecidos, redefinindo os contornos faciais. Melhora a qualidade da pele de forma natural, proporcionando resultados harmoniosos e duráveis.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
  {
    title: "Microagulhamento com Drug Delivery",
    description:
      "Estimula a produção de colágeno e potencializa a absorção de ativos na pele. Combina microagulhamento com a aplicação de substâncias que revitalizam a aparência.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
  {
    title: "Fios de PDO",
    description:
      "Oferece um efeito lifting não cirúrgico, elevando e sustentando a pele. Estimula a síntese de colágeno, proporcionando um rejuvenescimento gradual e natural.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
  {
    title: "Peelings Químicos",
    description:
      "Promovem a renovação celular, melhorando a textura e o tom da pele. São eficazes no tratamento de manchas, acne e sinais de envelhecimento para uma pele luminosa.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Servicos</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
