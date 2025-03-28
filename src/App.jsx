/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import FeedBack from "./Components/FeedkBacks";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Dra Andréa Azeredo",
  title: "Harmonizacão Orofacial",
  paragrafo:
    "Bem-vindo à minha clínica de Harmonização Orofacial, onde combinamos beleza e saúde com tratamentos personalizados e avançados. Descubra como posso realçar a sua aparência de forma natural e elevar sua autoestima. Seja bem-vindo à sua melhor versão!",
  email: "azeredohof@gmail.com",
  instagram: "draandreaazeredo",
  facebook: "andreaaazeredo",
  whatapp: "+55 21 98668-4285",
};

const primaryColor = "#232B35";
const secondaryColor = "#EAC584";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} paragrafo={siteProps.paragrafo}/>
      <About />
      <Portfolio />
      <FeedBack></FeedBack>
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
