"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const WelcomeMessage = () => {
    return (
        <>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "<Mehdi-Godefroid />",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "🔨 Site en construction 🔨",
                    1000,
                ]}
                wrapper="h1"
                speed={1}
                style={{
                    fontSize: "2em",
                    display: "inline-block",
                    textAlign: "center",
                }}
                repeat={Infinity}
            />
        </>
    );
};

export default WelcomeMessage;
