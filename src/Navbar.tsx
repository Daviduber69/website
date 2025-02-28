import {Link} from "react-router-dom";
import { useLanguage } from "./LanguageProvider.tsx";
import React, {useState} from "react";

export const Navbar = () => {
    const { selectedLanguage, setSelectedLanguage } = useLanguage();
    const [selected, setSelected] = useState(false);
const toggleDropDown = () => {
    setSelected((prev) => !prev);
}
const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    setSelected(false);
}
    return (
        <div className="navbar-menu">
            <nav>
                <img onClick={toggleDropDown} className="langbutton" src="langbutton.png" alt="lang"/>
                {selected && (
                    <select
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                    >
                        <option value="English">English</option>
                        <option value="Swedish">Swedish</option>
                    </select>
                )}

                <ul className="links">
                    <li ><Link to="/"><img src="homeimage4.png" alt="home" className="homeIcon"/> </Link></li>
                    <li><Link to="/CV"> <img src="resumeimage2.png" alt="resume" className="resumeIcon"/></Link></li>
                </ul>
            </nav>
        </div>
    )
}