"use client";
import React from "react";
import { useState, useEffect } from "react";

const TypingEffect = () => {
    const [typing, setTyping] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const myText: string = "🐣 Bonne vacances les Pious Pious 🐣";
    const destructuredText: string[] = myText.split("");

    useEffect(() => {
        if (index < destructuredText.length) {
            setTimeout(() => {
                setTyping(typing + destructuredText[index]);
                setIndex(index + 1);
            }, 100);
        }
    });

    return (
        <div className="flex">
            <p>{typing}</p>
            <div className="inline bg-amber-50 w-0.5 h-4 ml-1 mt-1 animate-pulse" ></div>
        </div>
    );
};

export default TypingEffect;
