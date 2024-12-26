import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex flex-row items-center">
            <div className="flex items-center justify-center">
                <div className="flex flex-row justify-between mt-20">
                <Link href="/proyectos" className="px-6 py-2 text-secondary text-xl font-bold hover:scale-110 hover:text-white hover:shadow-md transition-all duration-300 ease-in-out">
            Proyectos
        </Link>
        <Link href="/contacto" className="px-6 py-2 text-secondary text-xl font-bold hover:scale-110 hover:text-white hover:shadow-md transition-all duration-300 ease-in-out">
            Contacto
        </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
