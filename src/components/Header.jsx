// import React from 'react'
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  
  return (
    <>
    <section></section>
      <div className="inner_2 animate__animated animate__fadeInUp"
      style={{animationDelay: '0.0003s'}}>
        <h1 className="Header_intro">{t("hero.greeting")}</h1>
        <h2 className="Header_name">{t("hero.title")}</h2>
        <p className="Header_script">{t("hero.description")}</p>
        <div className="Header_btns">
          <a href="#projects"><button className="Header_btn">{t("hero.projectsBtn")}</button></a>
          <a href="#contact"><button className="Header_btn">{t("hero.contactBtn")}</button></a>
        </div>

        <div className="chevron"></div>

      </div>
    </>
  )
}
