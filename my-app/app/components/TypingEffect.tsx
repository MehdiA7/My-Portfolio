"use client";
import React from "react";
import { useState, useEffect } from "react";

// I'm stopped here

const TypingEffect = () => {
    const [typing, setTyping] = useState("");
    const [index, setIndex] = useState(0);
    const myText: string = "godeff is Mehdi lol";
    const destructuredText: string[] = myText.split("")

    useEffect(() => {
        if (i < destructuredText.length - 1) {
            setTimeout(() => {
                setTyping(typing + destructuredText[i]);
                i++;
            }, 1000);
        }
    });

    return <p>{typing}</p>;
};

export default TypingEffect;
