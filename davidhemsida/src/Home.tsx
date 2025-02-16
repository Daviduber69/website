import {About} from "./About.tsx";
import ParticlesBackground from "./ParticlesBackground.tsx";

export const Home = () => {
    return (
        <>
            <div className="content">
                <ParticlesBackground/>
                <About/>
            </div>

        </>
    )
}