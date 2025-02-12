import {MyCanvas} from "./Canvas.tsx";
import {About} from "./About.tsx";
import ParticlesBackground from "./ParticlesBackground.tsx";

export const Home = () => {
    return (
        <>

            {/*<MyCanvas/>*/}
            <div className="content">
                <ParticlesBackground/>
                <About/>
            </div>

        </>
    )
}