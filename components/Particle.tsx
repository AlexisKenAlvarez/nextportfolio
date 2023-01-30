import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useEffect, useState, useCallback } from "react";

const Particle = () => {

    const modeStorage = typeof window !== 'undefined' ? localStorage.getItem("mode") : null
    const [mode, setMode] = useState(modeStorage)

    useEffect(() => {
        setMode(modeStorage)
    }, [modeStorage])

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded}
            options={{

                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 150,
                            duration: 1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: mode === 'dark' ? "#111111" : "#ffffff",
                    },
                    links: {
                        color: mode === 'dark' ? "#ffffff" : "#111111",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
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
                        speed: 0.6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 1 },
                    },
                },
                detectRetina: true,
            }} />
    );
}

export default Particle; 