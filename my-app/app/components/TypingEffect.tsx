"use client";
import React, { FC } from "react";
import { useState, useEffect } from "react";

// this is my home made component to make type effect 

type ComponentProps = {
    myText: string;
    className?: string;
    classNameText?: string;
}

const TypingEffect: FC<ComponentProps> = ({ myText, className, classNameText }) => {
    const [typing, setTyping] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
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
        <div className={"flex " + className}>
            <p className={classNameText}>{typing}</p>
            <div className="inline bg-amber-50 w-1 h-7.5 ml-1 mt-1 animate-pulse" ></div>
        </div>
    );
};

export default TypingEffect;
