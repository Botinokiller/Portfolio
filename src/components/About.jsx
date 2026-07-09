// import React from 'react'
import { useTranslation } from "react-i18next";

export default function About() {
        const { t } = useTranslation();
    
  return (
    <>
            <section className="inner__3" id="about">
            <div className="image_wrapper">
                <div className="">
                    <span className="avatar-emoji">🧑‍💻</span>
                </div>
                <div className="badge">
                    <span className="badge-number">{t("about.experience")}</span>
                    <span className="badge-label"> <br />{t("about.experienceText")}</span>
                </div>
            </div>
 
            <div className="text-content">
                <h2 className="about-title">{t("about.title")}</h2>
                <p className="about-text">
                    {t("about.description1")}
                </p>
                <p className="about-text">
                    {t("about.description2")}
                </p>
            </div>
        </section>
    </>
  )
}
