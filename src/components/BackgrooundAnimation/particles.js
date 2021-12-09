import React, { Component } from 'react';
import Particles from 'react-particles-js';

var style = {
    width: "100%",
    height: "100vh",
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
};


class ParticlesBackground extends Component {

    render() {
        return (
            <div style={style}>
            <Particles
                params={{
                    "particles": {
                    "number": {
                    "value": 30
                    },
                    "size": {
                    "value": 1
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