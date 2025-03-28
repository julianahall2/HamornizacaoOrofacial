/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/Consultorio.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Eu sou Andréa Azeredo, graduada em Odontologia pela UFRJ e especializada em três áreas: Harmonização Orofacial, Saúde Pública e Vigilância em Saúde.Exerço minha profissão tanto em consultório particular quanto no serviço público. Como profissional de harmonização, busco aprimorar a beleza natural de cada paciente, corrigindo possíveis assimetrias e aprimorando a estética facial, proporcionando uma experiência de cuidado personalizado. ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Toxina Botulíca",
  "Preenchimento com Acido Hialurônico",
  "Bioestimulador colageno",
  "Biorremodelador Tecidual ",
  "Microagulhamento com Drug Delivery",
  "Fios de PDO",
  "Peelings Químicos",
];

const continuacao = 
  "Minha abordagem incorpora técnicas avançadas e uma variedade de opções de tratamento, visando assegurar que meus pacientes se sintam confiantes e satisfeitos com os resultados obtidos.";

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Cada sorriso transformado representa uma conquista significativa, uma vez que reconheco que estou promovendo o bem-estar e a autoestima daqueles que depositam confianca em meu trabalho.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Sobre mim</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "2rem 3rem 0" }}>{continuacao}</p>
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
