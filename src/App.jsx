// import React from 'react'
import 'animate.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About1 from './components/About';
import Skills1 from './components/Skills';
import Projects1 from './components/Projects'
import Footer from './components/Footer';
import envelope from './assets/images/envelope.png'
import img1 from './assets/images/html.png'
import img2 from './assets/images/js.jpeg'
import img3 from './assets/images/react.jpeg'
import img4 from './assets/images/node.png'
import sec from './assets/images/imgsec.jpg'
import clock from './assets/images/clock.jpg'
import paint from './assets/images/paints.jpg'
import node from './assets/images/node.png'
import equipment from './assets/images/equipment.jpg'
import mountain from './assets/images/mountain.jpg'
import property from './assets/images/property.jpg'
import webdesign from './assets/images/webdesign.jpg'
import pot from './assets/images/pot.jpg'
import todolist from './assets/images/todolist.jpg'
import linkedin from './assets/images/linkedin.png'
import { useTranslation } from "react-i18next";
// import {Routes,Route, Navigate} from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects.jsx";
// import Skills from "./pages/Skills";
// import Contact from "./pages/Contact";

export default function App() {

    const { t } = useTranslation();

  const navLinks = [
  { href: "#about",    label: t("nav.about")    },
  { href: "#projects", label: t("nav.projects") },
  { href: "#skills",   label: t("nav.skills")   },
  { href: "#contact",  label: t("nav.contact")  },  
];
  const skills = [
        {name:"HTML",icon:img1},
        {name:"JS",icon:img2},
        {name:"React",icon:img3},
        {name:"Node JS",icon:img4}
    ]
  const projects = [
  {
    id: 1,
    title: t("projects.clock.title"),
    description: t("projects.clock.description"),
    color: "#4a90d9",
    link:"https://botinokiller.github.io/Clock/",
    img:clock,
    src: "https://github.com/Botinokiller/Clock"
  },
  {
    id: 2,
    title: t("projects.ecoPaint.title"),
    description: t("projects.ecoPaint.description"),
    color: "#b066f5",
    link:"https://botinokiller.github.io/Eco-Friendly-Paints/",
    img:paint,
    src:"https://github.com/Botinokiller/Eco-Friendly-Paints"
  },
  {
    id: 3,
    title: t("projects.fengShui.title"),
    description: t("projects.fengShui.description"),
    color: "#3ecf8e",
    link: "https://botinokiller.github.io/Feng_Shu/",
    img:pot,
    src:"https://github.com/Botinokiller/Feng_Shu"
  },
  {
    id: 4,
    title: t("projects.uiuxer.title"),
    description: t("projects.uiuxer.description"),
    color: "#3ecf8e",
    link:"https://botinokiller.github.io/UIUXER-website/",
    img:webdesign,
    src:"https://github.com/Botinokiller/UIUXER-website"
  },
  {
    id: 5,
    title: t("projects.property.title"),
    description: t("projects.property.description"),
    color: "#3ecf8e",
    link:"https://botinokiller.github.io/Property-Website/",
    img:property,
    src:"https://github.com/Botinokiller/Property-Website"
  },
  {
    id: 6,
    title: t("projects.security.title"),
    description: t("projects.security.description"),
    color: "#3ecf8e",
    link: "https://botinokiller.github.io/Web-Security/",
    img:sec,
    src:"https://github.com/Botinokiller/Web-Security"
  },
  {
    id: 7,
    title: t("projects.saintPetersburg.title"),
    description: t("projects.saintPetersburg.description"),
    color: "#3ecf8e",
    link: "https://botinokiller.github.io/Saint-Peterburg_1/",
    img:equipment,
    src:"https://github.com/Botinokiller/Saint_Peterburg"
  },
  {
    id: 8,
    title: t("projects.todo.title"),
    description: t("projects.todo.description"),
    color: "#3ecf8e",
    link: "https://botinokiller.github.io/TodoList/",
    img:todolist,
    src:"https://github.com/Botinokiller/To_Do_List"
  },
];




  return (
    <>



    <Navbar navLinks={navLinks} />
      
      <Header/>
      <About1/>
      <Skills1 img1={img1} img2={img2}  img3={img3} img4={img4} skills={skills} />
      <Projects1 projects={projects} sec={sec} clock={clock} paint={paint} node={node} equipment={equipment} todolist={todolist} mountain={mountain} property={property} webdesign={webdesign} pot={pot}/>
      <Footer envelope={envelope} linkedin={linkedin}/>
    </>
  )
}
