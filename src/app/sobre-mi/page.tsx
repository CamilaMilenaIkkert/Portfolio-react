"use client";
import React from 'react';
import { Button } from "@/components/ui/button";

const SobreMi = () => {
    return (
        <section className="flex flex-col justify-center items-center min-h-screen">

            {/* Introduccion */}
            <div className="bg-accent md:flex-row md:w-[75vw] md:max-w-[850px] md:py-[50px] md:px-[30px] rounded-[24px] flex items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] sm:flex-col sm:w-[100%] sm:p-16">
                <img
                    src="/profile-1.jpeg"
                    alt="Mi imagen"
                    className="md:max-w-[280px] md:w-[35vw] md:h-[300px] object-cover md:ml-[-60px] md:mr-[30px] md:rounded-[24px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] sm:w-[45vw] sm:h-[45vw] sm:rounded-[50%] sm:ml-8 sm:py-0"
                />
                <div>
                    <h2 className="font-title text-lg font-bold text-black">Sobre mí</h2>
                    <p className=" mt-4 text-primary font-body tracking-wide">
                        Soy estudiante de Desarrollo de Software Libre en la Universidad Nacional del Litoral. Me apasiona aprender constantemente nuevas tecnologías que complementen mi formación académica y me permitan crecer tanto a nivel personal como profesional. Me destaco por ser una persona dedicada y detallista en cada tarea o proyecto que realizo, siempre priorizando la responsabilidad de cumplir con las entregas en tiempo y forma.<br />
                        Aspiro a poder encontrar un espacio colaborativo que me permita seguir adquiriendo conocimientos mientras contribuyo con mi creatividad y habilidades al logro de objetivos comunes.
                    </p>
                </div>
            </div>

            {/* Sección de Recorrido de academico */}
            <div className="mt-12 md:w-[70%] rounded-[15px] bg-opacity-40 bg-secondary p-16 sm:w-[100%]">
                <h3 className="text-xl font-bold text-black font-title">Mis estudios</h3>
                <ul className="mt-4 list-disc list-item text-xl text-primary tracking-wide">
                    <li>Farmacia - Universidad Nacional de Rosario(UNR) - [2017 - 2021]</li>
                    <li>Cursos [2021 - 2022]:
                        <ol className="list-circle ml-16 text-lg text-primary">
                            <li>Programación desde cero con lógica de programación (Egg)</li>
                            <li>Argentina programa I (Lógica de programación)</li>
                            <li>Desarrollo web (HTML, CSS, JS, jQuery / CoderHouse)</li>
                            <li>Tester (Codo a Codo - Ciudad de Buenos Aires)</li>
                            <li>Frontend (React / Codo a Codo - Ciudad de Buenos Aires)</li>
                        </ol>
                    </li>
                    <li>Desarrollo de Softwrare Libre - Universidad Nacional del Litoral(UNL) - [2023 - 2025]</li>
                </ul>
            </div>

            {/* Sección de Recorrido de Aprendizaje */}
            <div className="mt-12 md:w-[70%] rounded-[15px] bg-opacity-40 bg-secondary p-16 sm:w-[100%]">
                <h3 className="text-xl font-bold text-black font-title">Mi recorrido de aprendizaje</h3>
                <p className="mt-4 text-lg text-primary font-body tracking-wide">
                    Desde que comencé a interesarme por la programación, estudié en numerosos cursos y también de manera autodidacta. Mis primeros acercamientos fueron a través de freeCodeCamp con HTML y CSS, para luego reforzar esos conocimientos con cursos en CoderHouse, donde aprendí HTML, CSS, JavaScript y jQuery, junto con otras tecnologías o nociones útiles para el desarrollo web, como SEO, Sass, GitHub y la aplicación de librerías en general. <br />
                    Además de estos cursos, también participé en uno de lógica de programación que me brindó herramientas para aprender de manera más sencilla a organizar las instrucciones de un algoritmo para un programa. <br />
                    También he realizado cursos de testing y frontend con tecnologías como React y Node.js en el programa Codo a Codo de la Ciudad de Buenos Aires. Esto despertó aún más mi interés por aprender sobre frontend, lo que, de manera autodidacta, me ha llevado a profundizar en herramientas como Next.js, Tailwind CSS y otras librerías de diseño. <br />
                    Finalmente, gracias a mi carrera, he podido profundizar en otras áreas, tales como administración con Linux, bases de datos con MySQL, y servidores con Apache y PHP. <br />
                </p>

            </div>

            {/* Sección descargar cv */}
            <div className="mt-8 flex justify-center items-center">
                <Button
                    className="text-white bg-black hover:bg-accent-dark hover:scale-110 py-2 px-4 rounded-lg  transition-all duration-300 ease-in-out hover:shadow-[0_15px_40px_5px_rgba(0,0,0,0.3)]"
                    variant="secondary"
                    onClick={() => window.open('/cv.pdf', '_blank')}
                >
                    Descargar CV
                </Button>
            </div>
        </section>
    );
};

export default SobreMi;


