"use client";
import React from "react";

const TypingEffect = () => {
    const myText: string = "godeff is Mehdi lol";

    const destructuredText: string[] = myText.split("");

    let intervalId: any = null;

    const startInterval = () => {
        // if (intervalId === null) {
        //     intervalId = setInterval(() => {
        //         console.log("Hello les gens");
        //     }, 1000);
        // }
    };

    const stopInterval = () => {
        // if (intervalId !== null) {
        //     clearInterval(intervalId);
        //     intervalId = null;
        // }
    };

    return (
        <>
            <button onClick={() => startInterval()}>Start</button>
            <br />
            <button onClick={() => stopInterval()}>Stop</button>
            <br />
            {intervalId = setInterval(() => {
                {destructuredText.forEach(element => {
                    
                });}
            }, 1000)
            }
            <br />
            <button
                onClick={() => console.log(destructuredText)}
                className="bg-amber-700 w-20"
            >
                Log
            </button>
        </>
    );
};

export default TypingEffect;
