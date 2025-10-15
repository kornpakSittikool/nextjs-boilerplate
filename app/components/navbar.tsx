"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const mainBlue = "bg-[#1a237e]";
    const hoverBlue = "hover:bg-[#283593]";

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
                        EIC TIMES
                    </span>
                </a>

                {/* Hamburger */}
                <button
                    type="button"
                    className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden ${hoverBlue} focus:outline-none focus:ring-2 focus:ring-blue-300 transition`}
                    onClick={() => setOpen(!open)}
                >
                    <span className="sr-only">Toggle menu</span>

                    {open ? (
                        // กากบาท (ปิดเมนู)
                        <motion.svg
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </motion.svg>
                    ) : (
                        // แฮมเบอร์เกอร์ (เปิดเมนู)
                        <motion.svg
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </motion.svg>
                    )}
                </button>


                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <ul className="font-medium flex flex-row space-x-8">
                        {["GENERAL", "SPORTS", "TECHNOLOGY", "FOOD", "EVENTS"].map(
                            (item, i) => (
                                <li key={i}>
                                    <a
                                        href={`/${item.toLowerCase() === "general" ? "" : item.toLowerCase()}`}
                                        className="block py-2 px-3 text-white md:p-0 hover:text-[#ff2e63] transition-colors duration-200"
                                    >
                                        {item}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={`absolute top-full left-0 w-full ${mainBlue} border-t border-[#23305a] shadow-lg md:hidden z-10 backdrop-blur-sm`}
                        >
                            <ul className="flex flex-col font-medium p-4 space-y-2">
                                {["GENERAL", "SPORTS", "TECHNOLOGY", "FOOD", "EVENTS"].map(
                                    (item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <a
                                                href={`/${item.toLowerCase() === "general" ? "" : item.toLowerCase()}`}
                                                className="block py-2 px-3 text-white rounded hover:text-[#ff2e63] transition-colors duration-200"
                                                onClick={() => setOpen(false)}
                                            >
                                                {item}
                                            </a>
                                        </motion.li>
                                    )
                                )}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
