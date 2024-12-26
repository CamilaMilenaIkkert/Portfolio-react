import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-foreground h-auto p-10 flex items-center w-[100%]">
            <div className="container flex justify-between items-center">
                    <Link href="/">
                        <Image src="/CI-light-sinFondo.png" alt='Logo' width={100} height={100}/>
                    </Link>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;