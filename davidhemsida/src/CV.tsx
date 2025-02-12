import {useState} from "react";

export const CV = () => {
    const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

    const handleClick = (id: string) => {
        setSelected((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href="/files/DavidHenriksson_CV.pdf";
        link.download = "DavidHenriksson_CV.pdf";
        link.click();
    }
    return (
        <div className="cv-navbar">

            <div className="cv-navbar-buttons">
                <button className={selected["comp"] ? "active" : ""} onClick={() => handleClick("comp")}>
                    <p style={{fontWeight: 'bold'}}>Competence</p>
                </button>
                <button className={selected["edu"] ? "active" : ""} onClick={() => handleClick("edu")}>
                    <p style={{fontWeight: 'bold'}}>Education</p>
                </button>
                <button className={selected["projects"] ? "active" : ""} onClick={() => handleClick("projects")}>
                    <p style={{fontWeight: 'bold'}}>Projects</p>
                </button>
                <button className={selected["work"] ? "active" : ""} onClick={() => handleClick("work")}>
                    <p style={{fontWeight: 'bold'}}>Work Experience</p>
                </button>
                <button className={selected["misc"] ? "active" : ""} onClick={() => handleClick("misc")}>
                    <p style={{fontWeight: 'bold'}}>Miscellaneous</p>
                </button>
                <button onClick={handleDownload}><img src="downloadcv.png" alt="downloadcv" className="downloadbutton"/> </button>
            </div>

            <div className="cv-navbar-content">
            {selected["comp"] && (
                    <div>
                        <h3>COMPETENCE</h3>
                        <p style={{fontWeight: 'bold'}}>Operating system:</p>
                        <p className="p-pop-out">Windows, WSL, (Linux)</p>
                        <p style={{fontWeight: 'bold'}}>Programming languages:</p>
                        Java, JavaScript, HTML/CSS, PHP
                        <p style={{fontWeight: 'bold'}}>Libraries/Frameworks:</p>
                        <p className="p-pop-out">TypeScript, Vue, React, JUnit</p>
                        <p style={{fontWeight: 'bold'}}>Tools:</p>
                        <p className="p-pop-out">IntelliJ, Docker, Jenkins, Bash, Git, Maven, Gradle, Visual Studio
                            Code, Eclipse</p>
                        <p style={{fontWeight: 'bold'}}>Databases:</p>
                        <p className="p-pop-out"> SQL, MySQL, MongoDB, SQL Server, SQLite, Postgres</p>
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
                            Warehouse Worker, Skåne Finkost. At Skåne Finkost, I had a more responsible role as a
                            warehouse worker.
                            I handled almost everything in the warehouse. Managed bookings for incoming and outgoing
                            deliveries,
                            as well as loading and unloading. Organized the warehouse both physically and
                            systematically.
                            Supplied production with materials and products. Skåne Finkost is a food manufacturing
                            company in
                            Partille.
                        </p>
                        <p className="p-pop-out">
                            2016-2020: <br/>
                            Warehouse Worker, worked at DAWA Däck and Amring, which are tire warehouses. Operated all
                            kinds of
                            forklifts and managed incoming and outgoing deliveries. Worked extensively with their
                            computer systems.
                            Became skilled at forklift operation and got used to stressful and physically demanding
                            work.
                        </p>
                        <p className="p-pop-out">
                            2015-2016:<br/>
                            Telemarketer, KeyCode Gothenburg. Called people and sold key tags to help customers recover
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
                        havid.denriksson94@gmail.com
                    </div>
                )}
            </div>
        </div>
    );
}