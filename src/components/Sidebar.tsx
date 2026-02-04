"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config";
import { motion } from "framer-motion";

const Sidebar = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <header className="fixed top-0 left-0 w-full z-50 p-8 md:p-12 flex justify-between items-center pointer-events-none">
            {/* Top Left: Avatar & Dr. Title */}
            <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex items-center gap-5 pointer-events-auto group"
            >
                <Link href="/" className="relative w-12 h-12 md:w-14 md:h-14 rounded-3xl overflow-hidden border-2 border-white/10 dark:border-white/5 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-primary/40">
                    <Image
                        src={siteConfig.author.image}
                        alt={siteConfig.author.name}
                        fill
                        className="object-cover"
                    />
                </Link>
                <div className="">
                    <h2 className="text-sm font-black tracking-[0.1em] text-white uppercase drop-shadow-sm">
                        {siteConfig.title}
                    </h2>
                    <p className="text-[10px] text-gray-500 font-bold tracking-[0.3em] uppercase">Researcher</p>
                </div>
            </motion.div>

            {/* Top Right: (Empty or Reserved for later) */}
            <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-6 pointer-events-auto"
            >
                {/* Theme toggle removed as requested */}
            </motion.div>
        </header>
    );
};

export default Sidebar;
