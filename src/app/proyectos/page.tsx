import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const ProjectsPage = () => {
    const projects = [
        {
            title: 'Proyecto 1',
            description: 'Mi primera página web, desarrollada con HTML y CSS. Es un ecommerce sencillo que marcó el inicio de mis estudios en desarrollo web. Se puede observar la página haciendo click en el link de Netlify.',
            imageUrl: '/Proyectos/proyecto1.png',
            repoUrl1: 'https://github.com/CamilaMilenaIkkert/Farmacia-Raspo',
            repoUrl2: 'https://farmacia-raspo.netlify.app/',
        },
        {
            title: 'Proyecto 2',
            description: 'Esta página eccomerce fue creada con HTML, CSS y JavaScript a modo de afianzar conocimientos de Javascript y poder crear una página funcional para la compra de productos online. Se puede observar la página haciendo click en el link de Netlify.',
            imageUrl: '/Proyectos/proyecto2.png',
            repoUrl1: 'https://github.com/CamilaMilenaIkkert/E-commerce',
            repoUrl2: 'https://e-commerce-ejemplo.netlify.app/',
        },
        {
            title: 'Proyecto 3',
            description: 'Atrapa al ratón fue un juego creado con Js principalmente con la intención de continuar mis estudios y mejorar en mi escritura de código.',
            imageUrl: '/Proyectos/proyecto3.png',
            repoUrl1: 'https://github.com/CamilaMilenaIkkert/Atrapa-al-raton',
            repoUrl2: 'https://juego-raton.netlify.app/',
        },
        {
            title: 'Proyecto 4',
            description: 'Este proyecto esta basado principalmente en Js y es una página web capaz de crear listas, tildarlas como realizadas y eliminarlas de ser necesario.',
            imageUrl: '/Proyectos/proyecto4.png',
            repoUrl1: 'https://github.com/CamilaMilenaIkkert/Listas-checks',
            repoUrl2: 'https://listas-checks.netlify.app/',
        },
        {
            title: 'Proyecto 5',
            description: 'Este proyecto fue realizado con Vue y Vite para el frontend, y Nodejs, express y mysql para el backend. En Github se encuentra el tutorial para levantar localmente este proyecto.',
            imageUrl: '/Proyectos/proyecto5.png',
            repoUrl1: 'https://github.com/CamilaMilenaIkkert/Lista-de-contactos',
            repoUrl2: 'https://lista-contactos.netlify.app/',
        },
        {
            title: 'Proyecto 6',
            description: 'Este proyecto fue creado con Next.js y se encuentra cargado en Vercel para poder visulizarlo y utilizarlo.',
            imageUrl: '/Proyectos/proyecto6.png',
            repoUrl1: 'https://github.com/CamilaMilenaIkkert/Tateti-Game',
            repoUrl2: 'https://tateti-game-ten.vercel.app/',
        },
    ];

    return (
        <section className="flex items-center flex-col min-h-screen ">

            {/* Introducción */}
            <div className="mb-16 md:w-[60%] sm:w-[100%] mx-auto bg-background p-8 rounded-[12px]">
                <h1 className="text-[4rem] font-title text-accent mb-4">Mis Proyectos</h1>
                <p className="font-body text-primaryText">
                    En esta página puedes explorar algunos de los proyectos que he realizado. Estos proyectos se encuentran cargados en GitHub, Netlify y/o Vercel, y muestran el avance en mis estudios desde mis comienzos. <br /> Para ver el proyecto haz click en el cualquiera de los links que se encuentran debajo de cada proyecto.
                </p>
            </div>

            {/* Cards de proyectos */}
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <Card key={index} className="mt-6 w-96 flex flex-col min-h-[500px]">
    <CardHeader className="h-80">
        <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg"
        />
    </CardHeader>
    <CardContent className="text-center flex-grow flex flex-col justify-between">
        <div>
            <CardTitle className='text-accent font-title text-[2rem]'>
                {project.title}
            </CardTitle>
            <CardDescription className='text-primaryText mt-2'>
                {project.description}
            </CardDescription>
        </div>
    </CardContent>
    <CardFooter className="pt-0 flex gap-3">
        <Link href={project.repoUrl1} target="_blank" className="inline-block">
            <Button variant="ghost" className="flex items-center gap-4 text-accent bg-background text-[1rem] h-auto border-accent border hover:bg-accent hover:text-[#121212] hover:scale-110 py-2 px-4 rounded-lg  transition-all duration-300 ease-in-out hover:shadow-xl">
                Link GitHub
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </Button>
        </Link>
        <Link href={project.repoUrl2} target="_blank">
            <Button variant="ghost" className="flex items-center gap-4 text-accent bg-background text-[1rem] h-auto border-accent border hover:bg-accent hover:text-[#121212] hover:scale-110 py-2 px-4 rounded-lg  transition-all duration-300 ease-in-out hover:shadow-xl">
                Link proyecto
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </Button>
        </Link>
    </CardFooter>
</Card>
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;



