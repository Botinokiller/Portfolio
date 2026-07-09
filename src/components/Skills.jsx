// import React from 'react'

import { useTranslation } from "react-i18next"

export default function Skills({img1,img2,img3,img4}) {

      const skills = [
            {name:"HTML",icon:img1},
            {name:"JS",icon:img2},
            {name:"React",icon:img3},
            {name:"Node JS",icon:img4}
        ]
    const {t} = useTranslation()
  return (
    <>
        <section className="inner__4" id="skills">
            <h2 className="skill__title">{t("skills.title")}</h2>
                <ul className="skill__list">
                    {skills.map((skill)=>(
                        <li key={skill.name} className='skill_text' >
                            <img src={skill.icon} alt="" />
                            {skill.name}
                        </li>
                    ))}
                </ul>
        </section>
    </>
  )
}
