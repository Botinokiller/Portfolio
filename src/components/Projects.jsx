// import React from 'react'

import { useTranslation } from "react-i18next"

export default function Projects({sec,clock, paint,equipment,todolist,property,webdesign,pot}) {
    const {t} = useTranslation()

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
            <section className="project-section" id="projects">    
            <div className="projects-header">
                <h2 className="projects-title">{t("projects.title")}</h2>
                <p className="projects-subtitle">{t("projects.description")}</p>
            </div>

                <ul className="project-grid">
                {projects.map((project) => (
                    <li key={project.id} className="project-card">
                    <div className="project-image">
                        <img src={project.img} alt={project.title} />
                            <div className="project-overlay">
                                <a href={project.link} target="_blank" rel="noreferrer" className="view-btn">
                                     View Project ↗</a>
                                <a href={project.src} target="_blank" rel="noreferrer" className="view-btn">
                                    View Code</a>     
                                
                            </div>
                    </div>
                    <div className="project-info">
                        <h2 className="project-name">{project.title}</h2>
                        <p className="project-desc">{project.description}</p>
                    </div>
                    </li>
                ))}
                </ul>            
        </section>
    </>
  )
}
