import React from "react"
import Particles from "react-tsparticles"

const ParticleBackground = () => {
    return (
        <div>
            <Particles 
            options={{
                background: {
                    color: "#110914",
                },
                fpsLimit: 144,
                interactivity: {
                    detectsOn: 'canvas',
                    events: {
                        resize: true,
                    },
                },
                particles: {
                    color: {
                        value: "d4bade"
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1080
                        },
                        limit: 0,
                        value: 400,
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.05,
                            speed: 1.5,
                            sync: true
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.05,
                        },
                        value: 1
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 0.5,
                        },
                        value: 1.5,
                    }
                }
            }}
            />
        </div>
    )
}

export default ParticleBackground