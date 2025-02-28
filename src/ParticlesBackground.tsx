import {Particles} from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"
import {Container, Engine} from "tsparticles-engine";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        // Log the engine object to check its structure
        console.log("Initializing particles engine:", engine);

        // Safely load the full tsParticles package
        try {
            await loadFull(engine);
            console.log("Particles engine initialized successfully.");
        } catch (error) {
            console.error("Error initializing particles engine:", error);
        }
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    attract: {
                        distance: 100,
                        duration: 0.5,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 15,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    links: {
                        color: "#00ff00",

                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 1,
                        warp: true,
                        blink: {
                            enable: true,
                            frequency: 10,
                        }
                    },
                    shape: {
                        type: "triangle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                    life: {
                        duration: 3,
                        count: 0,
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;