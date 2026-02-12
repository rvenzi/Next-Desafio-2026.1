'use client'

import { Home, Icon, LayoutDashboard, LogOut, Menu, ScrollText } from "lucide-react"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const LinkSidebar = [
    { href: '/gerenciamento', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/', label: 'Home', icon: Home },
    { href: '/gerenciamento/tabela-gerenciamento', label: 'Tabela Gerenciamento', icon: ScrollText },
]

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {setIsSidebarOpen(!isSidebarOpen);};

    return (
        <div>
            <div className="bg-linear-to-r from-gray-700 to-gray-400 sm:hidden flex flex-wrap items-center justify-between px-3 py-4 border-b-2 border-black">
                <div className="flex items-center gap-2 cursor-default">
                    <span className="font-bold text-xl font-imbue text-black">Pure Essence</span>
                </div>
                <Menu 
                    className="w-8 h-8 text-black"
                    onClick={toggleSidebar}
                />
            </div>
            <aside
            className={`fixed top-0 left-0 z-40 w-full sm:w-72 h-screen transition-transform ${isSidebarOpen ? '': '-translate-x-full'}
            sm:translate-x-0 bg-linear-to-r from-gray-700 to-gray-400 border-r-2 border-black`}
            >
                <div className="bg-linear-to-r from-gray-700 to-gray-400 h-full px-3 py-5 overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 cursor-default">
                            <span className="font-bold text-xl font-imbue text-black">Pure Essence</span>
                        </div>
                        <X 
                            className="w-8 h-8 text-black sm:hidden"
                            onClick={toggleSidebar}
                        />
                    </div>
                    <div className="h-px mt-5 w-full bg-black" />
                    <ul className="space-y-8 p-5 flex flex-col justify-between">
                        {LinkSidebar.map(({href, label, icon: Icon}, index) => (
                            <li key={index}>
                                <Link href={href} className="flex items-center px-2 py-3 border-b border-r border-black hover:bg-gray-500">
                                    <Icon className="w-5 h-5 text-black" />
                                    <span className="ms-3 text-lg text-black">{label}</span>
                                </Link>
                            </li>
                        ))}
                        <div className=" h-px mt-5 w-full bg-black">
                            <div className="flex flex-col items-center justify-end gap-2 cursor-default mt-5">
                                <button className="flex items-center justify-center px-2 py-3 hover:bg-gray-400 cursor-pointer">
                                    <LogOut className="w-5 h-5 text-black" />
                                </button>
                                <span className="text-xl flex items-end justify-center text-black">Logout</span>
                            </div>
                        </div>
                    </ul>
                </div>
            </aside>
        </div>
    )
}