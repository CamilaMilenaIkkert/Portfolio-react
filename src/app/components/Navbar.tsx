import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Mi Portafolio</h1>
                <div>
                    <Link href="/proyectos" className="px-4 hover:underline">Proyectos</Link>
                    <Link href="/contacto" className="px-4 hover:underline">Contacto</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
