"use client";
import React, { useEffect }from "react";

const TestPage = () => {

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <>
            <div className="bg-amber-300 h-[200] m-4"></div>
            <div className="bg-amber-300 h-[200] m-4"></div>
            <div className="bg-amber-300 h-[200] m-4"></div>
            <div className="bg-amber-300 h-[200] m-4"></div>
            <div className="bg-amber-300 h-[200] m-4"></div>
            <div className="bg-amber-300 h-[200] m-4"></div>
            <div className="bg-amber-300 h-[200] m-4"></div>
            <div className="bg-amber-300 h-[200] m-4"></div>
        </>
    );
};

export default TestPage;
