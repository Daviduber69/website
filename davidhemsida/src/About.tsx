import { useLanguage } from "./LanguageProvider.tsx";

export const About = () => {
    const { selectedLanguage } = useLanguage();


    return (
        <>
            <img src="src/assets/chadcigarettoguychan.jpg" alt="dave"/>
            <br/>
            <h2>David Henriksson</h2>
            <p>havid.denriksson94@gmail.com</p>
            {selectedLanguage === "English" ? (
                <>
                    <h3>PROFILE</h3>
                    <p>
                        I am computer literate as I have been using a computer my whole life.
                        I studied programming A-C in high school, which has helped me in my studies at YRGO JAVA,
                        which I am currently attending. In my jobs as a warehouse worker,
                        we have used different computer systems that I quickly learned and then taught others.
                        I find programming and various computer work very fun and interesting, so I am very engaged in
                        learning more.
                        I want to work with this because it is very satisfying to create applications and solve
                        technical problems
                    </p>
                </>
                ) : (
                <>
                <h3>PROFIL</h3>
                Jag är väldigt datorvan då jag har haft och suttit vid en dator i princip hela mitt liv. Jag läste
                programmering A-C på gymnasiet. Det har hjälpt mig på traven för mina studier på YRGO JAVA som jag
                läser nu. På mina jobb som lageranstäld har vi använt oss av olika datorsystem somjag snabbt lärde
                mig för att sedan lära ut till andra. Jag tycker programmering och diverse datorarbete är väldigt
                roligt och intressant så jag är väldigt engagerad att lära mig mer. Jag vill arbeta med detta då det
                är väldigt tillfredsställande att skapa applikationer och lösa tekniska problem.
                </>
                )}


        </>
    )
}