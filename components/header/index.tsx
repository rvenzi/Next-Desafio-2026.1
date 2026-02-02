'use client';

import Link from "next/link";
import { useState } from "react";
import { UserCircle } from "phosphor-react";
import { List } from "phosphor-react";

const links = [
    {href: '/home', label: 'Home' },
    {href: '/contact', label: 'Contato' },
    {href: '/Products', label: 'Produtos' },
    {href: '/menagentment', label: 'Gerenciamento' },
];

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);


    return (
        <header className="bg-white sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 border-b-3 border-black">
            <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
                <Link href="/" className="flex py-5 gap-4 items-center">
                    <span className="font-imbue text-black text-2xl font-bold">Pure Essence</span>
                </Link>
                <nav className="flex justify-end" >
                    <div className="hidden w-full md:flex justify-end items-center gap-10">
                        {links.map((link, index) =>
                        <Link href={link.href} key={index}>
                            <span className="text-black text-md font-medium hover:underline">{link.label}</span>
                        </Link>
                        )}
                        <Link href="/perfil" className="text-black hover:text-gray-600 transition-colors">
                            <UserCircle size={32} weight="fill" /> 
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <div className="flex gap-4">
                            <List 
                                onClick={toggleNav}
                                className="w-12 h-12 text-black cursor-pointer"
                            />
                        </div>
                    </div>
                </nav>
                {isNavOpen && (
                    <div className="md:hidden flex basis-full flex-col items-center gap-6 mt-10">
                        {links.map((link, index) =>
                        <Link href={link.href} key={index}>
                            <span className="text-black text-md font-medium hover:underline">{link.label}</span>
                        </Link>
                        )}
                        <Link href="/perfil" className="text-black hover:text-gray-600 transition-colors">
                            <UserCircle size={32} weight="fill" /> 
                        </Link>
                    </div>
                )} 
            </div>
        </header>
    )
}