
import { useTranslation } from "react-i18next";
// import { NavLink } from "react-router-dom";


export default function Navbar({navLinks}) {
    const { i18n } = useTranslation();
    const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ru");
    } else {
      i18n.changeLanguage("en");
    }
  };
  return (
    <>
    <nav className="Navbar">
        <div className="inner_1">
    <span className="nav__logo">MD</span>
                <ul className="nav__list">
                {navLinks.map((link) => (
                    <li key={link.href} className="nav__link">
                        <a href={link.href}>{link.label}</a>
                    </li>   
                ))}
                </ul>
            <div className="lang_mode_Btn">
                <button className="lang_btn" onClick={changeLanguage}>
                    {i18n.language ==="en" ? "RU" : "EN"}
                </button>
            </div>

        </div>
    </nav>
    </>
    )
}
