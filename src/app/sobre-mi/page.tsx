"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const SobreMi = () => {

    const [text, setText] = useState("");
    const phrases = ["<Frontend Developer./>", "<Code & Design./>", "<Creative Mind./>"];
    const typingSpeed = 100;

    useEffect(() => {
        let currentPhraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentPhrase = phrases[currentPhraseIndex];
            const updatedText = isDeleting
                ? currentPhrase.substring(0, charIndex - 1)
                : currentPhrase.substring(0, charIndex + 1);

            setText(updatedText);

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, 1000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
            } else {
                charIndex += isDeleting ? -1 : 1;
                setTimeout(type, typingSpeed);
            }
        };

        type();
    }, []);

    return (
        <section className="flex items-center flex-col min-h-screen text-primaryText">
            {/* Phrases section */}
            <div className="my-28 text-white font-title uppercase">
                <h1 className="md:text-6xl sm:text-4xl">
                    {text}
                    <span className="blinking-cursor">|</span>
                </h1>
            </div>

            {/* About section */}
            <div className="bg-surface my-20 md:flex-row md:w-[75vw]  md:py-[50px] md:px-[30px] rounded-[24px] flex items-center shadow-xl sm:flex-col sm:w-[100%] sm:p-8">
                <Image src="/profile-1.jpeg" alt="Pofile image" width={280} height={300} className="md:w-[280px] md:h-[300px] object-cover md:ml-[-60px] md:mr-[30px] md:rounded-[24px] shadow-xl sm:w-[45vw] sm:h-[45vw] sm:rounded-[50%] sm:py-0 opacity-80"></Image>
                <div>
                    <h2 className="font-title text-[4rem] font-bold text-accent sm:mx-8 sm:text-[3rem]">Sobre mí</h2>
                    <div>
                        <p className="mt-4 text-primary font-body sm:p-8">
                            Soy estudiante de Desarrollo de Software Libre en la Universidad Nacional del Litoral. Me apasiona aprender constantemente nuevas tecnologías que complementen mi formación académica y me permitan crecer tanto a nivel personal como profesional. Me destaco por ser una persona dedicada y detallista en cada tarea o proyecto que realizo, siempre priorizando la responsabilidad de cumplir con las entregas en tiempo y forma.<br />
                            Aspiro a poder encontrar un espacio colaborativo que me permita seguir adquiriendo conocimientos mientras contribuyo con mi creatividad y habilidades al logro de objetivos comunes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Studies section */}
            <div className="mt-12 md:w-[70%] rounded-[15px] bg-surface shadow-xl p-16 sm:w-[100%]">
                <h3 className="text-[4rem] text-accent font-title sm:text-[3rem]">Mis estudios</h3>
                <ul className="mt-4 list-disc list-item text-lg md:ml-24 sm:ml-8">
                    <li>Farmacia - Universidad Nacional de Rosario(UNR) - [2017 - 2021]</li>
                    <li>Cursos [2021 - 2022]:
                        <ol className="list-circle ml-8">
                            <li>Programación desde cero con lógica de programación (Egg)</li>
                            <li>Argentina programa I (Lógica de programación)</li>
                            <li>Desarrollo web (HTML, CSS, JS, jQuery / CoderHouse)</li>
                            <li>Frontend (React, node, VUE / Codo a Codo - Ciudad de Buenos Aires)</li>
                        </ol>
                    </li>
                    <li>Desarrollo de Softwrare Libre - Universidad Nacional del Litoral(UNL) - [2023 - 2025]</li>
                </ul>
            </div>

            {/* Learning journey section */}
            <div className="mt-12 md:w-[85vw] rounded-[15px] bg-surface shadow-xl p-16 sm:w-[100%]">
                <h3 className="text-[4rem] text-accent font-title sm:text-[3rem]">Mi recorrido de aprendizaje</h3>
                <p className="mt-4 text-lg font-body">
                    Desde que comencé a interesarme por la programación, estudié en numerosos cursos y también de manera autodidacta. Mis primeros acercamientos fueron a través de freeCodeCamp con HTML y CSS, para luego reforzar esos conocimientos con cursos en CoderHouse, donde aprendí HTML, CSS, JavaScript y jQuery, junto con otras tecnologías o nociones útiles para el desarrollo web, como SEO, Sass, GitHub y la aplicación de librerías en general. <br /><br />
                    Además de estos cursos, también participé en uno de lógica de programación que me brindó herramientas para aprender de manera más sencilla a organizar las instrucciones de un algoritmo para un programa. <br /><br />
                    También he realizado cursos de testing y frontend con tecnologías como React y Node.js en el programa Codo a Codo de la Ciudad de Buenos Aires. Esto despertó aún más mi interés por aprender sobre frontend, lo que, de manera autodidacta, me ha llevado a profundizar en herramientas como Next.js, Tailwind CSS y otras librerías de diseño. <br /><br />
                    Finalmente, gracias a mi carrera, he podido profundizar en otras áreas, tales como administración con Linux, bases de datos con MySQL, y servidores con Apache y PHP.
                </p>

            </div>

            <div className="mt-8 flex justify-center items-center">
                <Button
                    className="text-accent bg-background text-[1rem] h-auto border-accent border hover:bg-accent hover:text-[#121212] hover:scale-110 py-2 px-4 rounded-lg  transition-all duration-300 ease-in-out hover:shadow-xl"
                    onClick={() => window.open('/cv.pdf', '_blank')}
                >
                    Descargar CV
                </Button>
            </div>
        </section>

    );
};

export default SobreMi;


