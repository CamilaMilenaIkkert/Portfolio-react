"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Button onClick={scrollToTop} className={`fixed bottom-5 right-5 sm:right-12 z-50  p-3 shadow-lg transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`} aria-label="Back to the top">
            <Image src="/toTopButton.svg" alt="Back to the top" width={30} height={30}></Image>
        </Button>
    );
};

export default BackToTopButton;
