import {useState} from "react";
import {useLanguage} from "./LanguageProvider.tsx";
import {TooltipComponent} from "./TooltipComponent.tsx";

export const CV = () => {
    const [selected, setSelected] = useState<{ [key: string]: boolean }>({});
    const {selectedLanguage} = useLanguage();
    const handleClick = (id: string) => {
        setSelected((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/website/files/DavidHenriksson_CV.pdf";
        link.download = "DavidHenriksson_CV.pdf";
        link.click();
    }

    return (
        <>
            {selectedLanguage === 'English' ? (
                <div className="cv-navbar">

                    <div className="cv-navbar-buttons">
                        <button className={selected["comp"] ? "active" : ""} onClick={() => handleClick("comp")}>
                            <p style={{fontWeight: 'bold'}}>Competence</p>
                        </button>
                        <button className={selected["edu"] ? "active" : ""} onClick={() => handleClick("edu")}>
                            <p style={{fontWeight: 'bold'}}>Education</p>
                        </button>
                        <button className={selected["projects"] ? "active" : ""}
                                onClick={() => handleClick("projects")}>
                            <p style={{fontWeight: 'bold'}}>Projects</p>
                        </button>
                        <button className={selected["work"] ? "active" : ""} onClick={() => handleClick("work")}>
                            <p style={{fontWeight: 'bold'}}>Work Experience</p>
                        </button>
                        <button className={selected["misc"] ? "active" : ""} onClick={() => handleClick("misc")}>
                            <p style={{fontWeight: 'bold'}}>Miscellaneous</p>
                        </button>
                        <TooltipComponent onClick={handleDownload}>
                            <img src="downloadcv.png" alt="downloadcv" className="downloadbutton"/>
                        </TooltipComponent>
                    </div>

                    <div className="cv-navbar-content">
                        {selected["comp"] && (
                            <div>
                                <h3>COMPETENCE</h3>
                                <p style={{fontWeight: 'bold'}}>Operating system:</p>
                                <p className="p-pop-out">Windows, WSL, (Linux)</p>
                                <p style={{fontWeight: 'bold'}}>Programming languages:</p>
                                Java, JavaScript, HTML/CSS
                                <p style={{fontWeight: 'bold'}}>Libraries/Frameworks:</p>
                                <p className="p-pop-out">TypeScript, Vue, React, JUnit, Spring, Spring Boot</p>
                                <p style={{fontWeight: 'bold'}}>Tools:</p>
                                <p className="p-pop-out">Docker, Jenkins, Bash, Git, Maven, Gradle</p>
                                <p style={{fontWeight: 'bold'}}>Databases:</p>
                                <p className="p-pop-out"> SQL, MySQL, MongoDB, SQL Server, SQLite, PostgreSQL</p>
                                <p style={{fontWeight: 'bold'}}>Work methods:</p>
                                <p className="p-pop-out"> Agile methods, Scrum, Kanban</p>
                            </div>
                        )}
                        {selected["edu"] && (
                            <div>
                                <h3>EDUCATION</h3>
                                <p className="p-pop-out">
                                    2023– ongoing:
                                    Java Enterprise Developer, Yrgo, higher vocational education, City of Gothenburg
                                    Higher Vocational Diploma 400 YH credits (2 years)
                                    IT High School, specialization in programming and web design
                                </p>
                                <p className="p-pop-out">
                                    2010– 2013:
                                    IT High School, Gothenburg, high school diploma 2,500 credits (3 years)
                                </p>
                            </div>
                        )}
                        {selected["projects"] && (
                            <div>
                                <h3>CODING PROJECTS</h3>
                                <a href="https://github.com/Hjulverkstan/hjulverkstan"
                                   target="_blank" rel="noopener noreferrer">
                                    <p>Hjulverkstan</p>
                                </a>

                                <a href="https://github.com/Hjulverkstan/hjulverkstan/commits/main/?author=Daviduber69"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <p>My contributions</p>
                                </a>
                            </div>
                        )}
                        {selected["work"] && (
                            <div>
                                <h3>WORK EXPERIENCE</h3>
                                <p className="p-pop-out">
                                    2020-2023:<br/>
                                    Warehouse Worker, Skåne Finkost. At Skåne Finkost, I had a more responsible role as
                                    a
                                    warehouse worker.
                                    I handled almost everything in the warehouse. Managed bookings for incoming and
                                    outgoing
                                    deliveries,
                                    as well as loading and unloading. Organized the warehouse both physically and
                                    systematically.
                                    Supplied production with materials and products. Skåne Finkost is a food
                                    manufacturing
                                    company in
                                    Partille.
                                </p>
                                <p className="p-pop-out">
                                    2016-2020: <br/>
                                    Warehouse Worker, worked at DAWA Däck and Amring, which are tire warehouses.
                                    Operated
                                    all
                                    kinds of
                                    forklifts and managed incoming and outgoing deliveries. Worked extensively with
                                    their
                                    computer systems.
                                    Became skilled at forklift operation and got used to stressful and physically
                                    demanding
                                    work.
                                </p>
                                <p className="p-pop-out">
                                    2015-2016:<br/>
                                    Telemarketer, KeyCode Gothenburg. Called people and sold key tags to help customers
                                    recover
                                    their lost
                                    keys
                                </p>
                                <p className="p-pop-out">
                                    Summer 2014:<br/>
                                    West Swedish Newspaper Distribution, Newspaper delivery in Fjärås
                                </p>
                            </div>
                        )}
                        {selected["misc"] && (
                            <div>
                                <h3>Miscellaneous</h3>
                                <p>
                                    I have a Category B driver's license and a TLP10 A-B forklift license.

                                </p>
                                d.henriksson1994@gmail.com
                            </div>
                        )}
                    </div>
                </div>

            ) : (
                <div className="cv-navbar">

                    <div className="cv-navbar-buttons">
                        <button className={selected["comp"] ? "active" : ""} onClick={() => handleClick("comp")}>
                            <p style={{fontWeight: 'bold'}}>Kompetens</p>
                        </button>
                        <button className={selected["edu"] ? "active" : ""} onClick={() => handleClick("edu")}>
                            <p style={{fontWeight: 'bold'}}>Utbildning</p>
                        </button>
                        <button className={selected["projects"] ? "active" : ""}
                                onClick={() => handleClick("projects")}>
                            <p style={{fontWeight: 'bold'}}>Projekt</p>
                        </button>
                        <button className={selected["work"] ? "active" : ""} onClick={() => handleClick("work")}>
                            <p style={{fontWeight: 'bold'}}>Arbetslivserfarenhet</p>
                        </button>
                        <button className={selected["misc"] ? "active" : ""} onClick={() => handleClick("misc")}>
                            <p style={{fontWeight: 'bold'}}>Övrigt</p>
                        </button>
                        <TooltipComponent onClick={handleDownload}>
                            <img src="downloadcv.png" alt="downloadcv" className="downloadbutton"/>
                        </TooltipComponent>
                    </div>

                    <div className="cv-navbar-content">
                        {selected["comp"] && (
                            <div>
                                <h3>KOMPETENS</h3>
                                <p style={{fontWeight: 'bold'}}>Operativsystem:</p>
                                <p className="p-pop-out">Windows, WSL, (Linux)</p>
                                <p style={{fontWeight: 'bold'}}>Programmeringsspråk:</p>
                                Java, JavaScript, HTML/CSS
                                <p style={{fontWeight: 'bold'}}>Bibliotek/Ramverk:</p>
                                <p className="p-pop-out">TypeScript, Vue, React, JUnit, Spring, Spring Boot</p>
                                <p style={{fontWeight: 'bold'}}>Tools:</p>
                                <p className="p-pop-out">Docker, Jenkins, Bash, Git, Maven, Gradle</p>
                                <p style={{fontWeight: 'bold'}}>Databaser:</p>
                                <p className="p-pop-out">SQL, MySQL, MongoDB, SQL Server, SQLite, PostgreSQL</p>
                                <p style={{fontWeight: 'bold'}}>Arbetsmetoder:</p>
                                <p className="p-pop-out">Agila metoder, Scrum, Kanban</p>
                            </div>
                        )}
                        {selected["edu"] && (
                            <div>
                                <h3>UTBILDNING</h3>
                                <p className="p-pop-out">
                                    2023– pågående:
                                    Java Enterprise Developer, Yrgo, högre yrkesutbildning, Göteborgs stad
                                    Yrkeshögskoleexamen 400 YH-poäng (2 år)
                                </p>
                                <p className="p-pop-out">
                                    2010– 2013:
                                    IT-Gymnasiet, Göteborg, gymnasieexamen 2 500 poäng (3 år)
                                </p>
                            </div>
                        )}
                        {selected["projects"] && (
                            <div>
                                <h3>KODPROJEKT</h3>
                                <a href="https://github.com/Hjulverkstan/hjulverkstan"
                                   target="_blank" rel="noopener noreferrer">
                                    <p>Hjulverkstan</p>
                                </a>

                                <a href="https://github.com/Hjulverkstan/hjulverkstan/commits/main/?author=Daviduber69"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <p>Mina bidrag</p>
                                </a>
                            </div>
                        )}
                        {selected["work"] && (
                            <div>
                                <h3>ARBETSLIVSERFARENHET</h3>
                                <p className="p-pop-out">
                                    2020-2023:<br/>
                                    Lagerarbetare, Skåne Finkost. På Skåne Finkost hade jag en mer ansvarsfull roll som
                                    lagerarbetare.
                                    Jag hanterade nästan allt i lagret. Ansvarade för bokningar av inkommande och
                                    utgående
                                    leveranser,
                                    samt lastning och lossning. Organiserade lagret både fysiskt och systematiskt.
                                    Försåg
                                    produktionen
                                    med material och produkter. Skåne Finkost är ett livsmedelsföretag i Partille.
                                </p>
                                <p className="p-pop-out">
                                    2016-2020: <br/>
                                    Lagerarbetare, arbetade på DAWA Däck och Amring, som är däcklager. Opererade alla
                                    typer
                                    av truckar
                                    och hanterade inkommande och utgående leveranser. Arbetade mycket med deras
                                    datorsystem.
                                    Blev skicklig på truckkörning och van vid stressigt och fysiskt krävande arbete.
                                </p>
                                <p className="p-pop-out">
                                    2015-2016:<br/>
                                    Telefonförsäljare, KeyCode Göteborg. Ringde upp personer och sålde nyckelbrickor för
                                    att
                                    hjälpa
                                    kunder att få tillbaka sina borttappade nycklar.
                                </p>
                                <p className="p-pop-out">
                                    Sommar 2014:<br/>
                                    Västsvensk Tidningsdistribution, tidningsutdelning i Fjärås
                                </p>
                            </div>
                        )}
                        {selected["misc"] && (
                            <div>
                                <h3>Övrigt</h3>
                                <p>
                                    Jag har B-körkort samt truckkort TLP10 A-B.
                                </p>
                                d.henriksson1994@gmail.com
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )

}
