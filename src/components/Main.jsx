// import React from 'react'
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
// import { useTranslation } from "react-i18next";


export default function Main({projects}) {
    // const { t } = useTranslation();


  return (
    // <main className="main">
    //     <section className="inner__3">
    //         <div className="image_wrapper">
    //             <div className="">
    //                 <span className="avatar-emoji">🧑‍💻</span>
    //             </div>
    //             <div className="badge">
    //                 <span className="badge-number">{t("about.experience")}</span>
    //                 <span className="badge-label"> <br />{t("about.experienceText")}</span>
    //             </div>
    //         </div>
 
    //         <div className="text-content">
    //             <h2 className="about-title">{t("about.title")}</h2>
    //             <p className="about-text">
    //                 {t("about.description1")}
    //             </p>
    //             <p className="about-text">
    //                 {t("about.description2")}
    //             </p>
    //         </div>
    //     </section>

    //     <section className="inner__4">
    //         <h2 className="skill__title">{t("skills.title")}</h2>
    //             <ul className="skill__list">
    //                 {skills.map((skill)=>(
    //                     <li key={skill.name} className='skill_text' >
    //                         <img src={skill.icon} alt="" />
    //                         {skill.name}
    //                     </li>
    //                 ))}
    //             </ul>
    //     </section>

    //     <section className="project-section">    
    //         <div className="projects-header">
    //             <h2 className="projects-title">{t("projects.title")}</h2>
    //             <p className="projects-subtitle">{t("projects.description")}</p>
    //         </div>

    //             <ul className="project-grid">
    //             {projects.map((project) => (
    //                 <li key={project.id} className="project-card">
    //                 <div className="project-image">
    //                     <img src={project.img} alt={project.title} />
    //                         <div className="project-overlay">
    //                             <a href={project.link} target="_blank" rel="noreferrer" className="view-btn">
    //                                  View Project ↗</a>
    //                             <a href={project.src} target="_blank" rel="noreferrer" className="view-btn">
    //                                 View Code</a>     
                                
    //                         </div>
    //                 </div>
    //                 <div className="project-info">
    //                     <h2 className="project-name">{project.title}</h2>
    //                     <p className="project-desc">{project.description}</p>
    //                 </div>
    //                 </li>
    //             ))}
    //             </ul>            
    //     </section>
    // </main>

    <>
      <About />
      <Skills />
      <Projects projects={projects} />
    </>


  )
}
