import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="h-auto md:p-3 sm:p-8 flex items-center w-[100%] shadow-xl">
            <div className="container flex justify-between items-center ml-8">
                    <Link href="/">
                        <Image src="/CI-light-sinFondo.png" alt='Logo' width={120} height={100}/>
                    </Link>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;