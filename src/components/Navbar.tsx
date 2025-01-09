import Link from "next/link";
import { Button } from '@/components/ui/button';

const Navbar = () => {
    return (
        <nav className="flex flex-row items-center p-5">
            <div className="flex items-center justify-center">
                <div className="flex flex-row justify-between mt-20">
                <Link href="/proyectos">
                <Button variant="ghost" className="text-primaryText md:text-[1.75rem] sm:text-[1.5rem] font-title flex items-center hover:scale-105 transition ease-in duration-300 hover:bg-altBackground">
                Proyectos
                </Button>
        </Link>
        <Link href="/contacto">
        <Button variant="ghost" className="text-primaryText md:text-[1.75rem] sm:text-[1.5rem] font-title flex items-center hover:scale-105 transition ease-in duration-300  hover:bg-altBackground">
                Contacto
                </Button>
        </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
