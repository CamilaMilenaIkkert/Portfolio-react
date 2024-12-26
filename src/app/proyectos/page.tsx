import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const ProjectsPage = () => {
    const projects = [
        {
            title: 'Proyecto 1',
            description: 'Descripción breve del proyecto 1. Aquí puedes explicar de qué trata el proyecto.',
            imageUrl: '/proyecto1.jpg',
            repoUrl1: 'https://github.com/usuario/proyecto2',
            repoUrl2: 'https://',
        },
        {
            title: 'Proyecto 2',
            description: 'Descripción breve del proyecto 2. Aquí puedes explicar de qué trata el proyecto.',
            imageUrl: '/proyecto2.jpg',
            repoUrl1: 'https://github.com/usuario/proyecto2',
            repoUrl2: 'https://',
        },
    ];

    return (
        <div className="container mx-auto p-6">
            {/* Introducción */}
            <section className="mb-16 md:w-[60%] mx-auto bg-accent p-8 rounded-[24px] bg-opacity-50">
                <h1 className="text-xl font-bold text-black mb-4">Mis Proyectos</h1>
                <p className="text-lg text-primary">
                    En esta página puedes explorar algunos de los proyectos que he realizado. Estos proyectos se encuentran cargados en GitHub y Netlify, y muestran el avance en mis estudios desde mis comienzos. <br /> Para ver el proyecto haz click en el link de GitHub o de Netlify.
                </p>
            </section>

            {/* Cards de proyectos */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Card key={index} className="mt-6 w-96">
                        <CardHeader className="h-80">
                        <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </CardHeader>
                        <CardContent className="text-center">
                        <CardTitle className='text-black font-title font-semibold'>{project.title}</CardTitle>
                        <CardDescription className='text-primary mt-2'>{project.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="pt-0 flex gap-3">
                            <Link href={project.repoUrl1} target="_blank" className="inline-block">
                                <Button variant="ghost" className="text-black flex items-center gap-4">
                                    Link GitHub
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </Link>
                            <Link href={project.repoUrl2} target="_blank">
                                <Button variant="ghost" className=" text-black flex items-center gap-2">
                                    Link Netlify
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </section>
        </div>
    );
};

export default ProjectsPage;



