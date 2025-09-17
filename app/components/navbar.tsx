"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // สี navy blue เรียบๆ (แบบธงชาติอังกฤษ)
    const mainBlue = "bg-[#1a237e]"; // navy blue
    const hoverBlue = "hover:bg-[#283593]"; // navy blue เข้มขึ้น

    return (
        <nav className={`${mainBlue} border-b border-[#23305a] w-full`}>
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 relative">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-3">
                    <Image
                        src="/logo.png"
                        alt="EIC Logo"
                        width={50}
                        height={50}
                        className="h-[50px] w-auto"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        EIC TIME
                    </span>
                </a>
                {/* Hamburger */}
                <button
                    type="button"
                    className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden ${hoverBlue} focus:outline-none focus:ring-2 focus:ring-blue-300`}
                    aria-controls="navbar-default"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <ul className="font-medium flex flex-row space-x-8">
                        <li>
                            <a href="/" className="block py-2 px-3 text-white md:p-0 hover:text-[#ff2e63]" aria-current="page">GENERAL</a>
                        </li>
                        <li>
                            <a href="/sport" className="block py-2 px-3 text-white md:p-0 hover:text-[#ff2e63]">SPORTS</a>
                        </li>
                        <li>
                            <a href="/technology" className="block py-2 px-3 text-white md:p-0 hover:text-[#ff2e63]">TECHNOLOGY</a>
                        </li>
                        <li>
                            <a href="/food" className="block py-2 px-3 text-white md:p-0 hover:text-[#ff2e63]">FOOD</a>
                        </li>
                        <li>
                            <a href="/events" className="block py-2 px-3 text-white md:p-0 hover:text-[#ff2e63]">EVENTS</a>
                        </li>
                    </ul>
                </div>
                {/* Mobile Menu */}
                {open && (
                    <div className={`absolute top-full left-0 w-full ${mainBlue} border-t border-[#23305a] shadow-md md:hidden z-10`}>
                        <ul className="flex flex-col font-medium p-4 space-y-2">
                            <li>
                                <a href="/" className="block py-2 px-3 text-white rounded hover:text-[#ff2e63]" aria-current="page">GENERAL</a>
                            </li>
                            <li>
                                <a href="/sport" className="block py-2 px-3 text-white rounded hover:text-[#ff2e63]">SPORTS</a>
                            </li>
                            <li>
                                <a href="/technology" className="block py-2 px-3 text-white rounded hover:text-[#ff2e63]">TECHNOLOGY</a>
                            </li>
                            <li>
                                <a href="/food" className="block py-2 px-3 text-white rounded hover:text-[#ff2e63]">FOOD</a>
                            </li>
                            <li>
                                <a href="/events" className="block py-2 px-3 text-white rounded hover:text-[#ff2e63]">EVENTS</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;