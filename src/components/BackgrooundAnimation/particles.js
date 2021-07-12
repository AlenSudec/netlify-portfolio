import React, { Component } from 'react';
import Particles from 'react-particles-js';

var style = {
    width: "100vw",
    height: "100vh",
};


class ParticlesBackground extends Component {

    render() {
        return (
            <div style={style}>
            <Particles
                params={{
                    "particles": {
                    "number": {
                    "value": 50
                    },
                    "size": {
                    "value": 5
                    }
                },
                    "interactivity": {
                    "events": {
                    "onhover": {
                    "enable": true,
                    "mode": "repulse"
                    }
                    }
                    }
                }}/>
            </div>
            )
    }
}

export default ParticlesBackground;