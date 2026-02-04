"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config";
import { FaWeibo, FaTelegram, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaSpotify } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function HomeClient() {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

    const socialIcons: { [key: string]: any } = {
        weibo: FaWeibo,
        telegram: FaTelegram,
        twitter: FaTwitter,
        instagram: FaInstagram,
        linkedin: FaLinkedin,
        github: FaGithub,
        spotify: FaSpotify,
        email: MdEmail
    };

    const isAnyHovered = isHovered || hoveredSocial !== null;

    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center overflow-hidden bg-gray-950 font-outfit">
            {/* Fullscreen Background Image - Brighter adjustments */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{
                    scale: 1,
                    opacity: isAnyHovered ? 0.7 : 0.6,
                    filter: isAnyHovered ? "blur(30px) grayscale(0%) brightness(0.8)" : "blur(2px) grayscale(20%) brightness(0.9)"
                }}
                transition={{
                    opacity: { duration: 1 },
                    filter: { duration: 1.2, ease: "easeInOut" },
                    scale: { duration: 3, ease: "easeOut" }
                }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
            />

            {/* Immersive Overlay - Lightened */}
            <motion.div
                animate={{
                    backgroundColor: isAnyHovered ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.3)"
                }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 z-0 pointer-events-none"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-0" />

            {/* Centered Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 text-center px-6 w-full max-w-4xl h-full flex flex-col justify-center items-center"
            >
                <div className="space-y-4 mb-20 md:mb-28 flex flex-col items-center w-full">
                    <motion.p
                        animate={{ opacity: isAnyHovered ? 0.7 : 1 }}
                        className="text-lg sm:text-xl md:text-2xl text-white font-light leading-relaxed tracking-tight transition-opacity duration-1000 max-w-2xl md:max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    >
                        Innovating at the intersection of <span className="text-white font-normal underline decoration-white/20 underline-offset-[10px]">networks</span> and <span className="text-white font-normal underline decoration-white/20 underline-offset-[10px]">distributed systems</span>.
                    </motion.p>
                    <motion.p
                        animate={{ opacity: isAnyHovered ? 0.3 : 0.5 }}
                        className="text-[9px] md:text-[11px] text-gray-300 font-bold tracking-[0.5em] uppercase transition-opacity duration-1000 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                    >
                        Pursuing Truth & Freedom
                    </motion.p>
                </div>

                {/* Main Navigation */}
                <nav
                    className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-20 md:gap-32 mb-24 sm:mb-28"
                >
                    <motion.a
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        href={siteConfig.links.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-6 py-4 flex flex-col items-center"
                    >
                        <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.5em] text-white transition-all drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] duration-500">
                            BLOG
                        </span>
                        <span className="mt-2 text-[9px] sm:text-[10px] font-bold tracking-[0.5em] text-white/40 uppercase group-hover:text-white/70 duration-500 drop-shadow-md">
                            Insights
                        </span>
                        <div className="absolute -bottom-4 w-0 h-px bg-white/40 transition-all duration-500 group-hover:w-12" />
                    </motion.a>

                    <div className={`hidden sm:block w-px h-10 bg-white/20 transition-opacity duration-700 ${isAnyHovered ? 'opacity-0' : 'opacity-100'}`} />

                    <motion.a
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        href={siteConfig.links.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-6 py-4 flex flex-col items-center"
                    >
                        <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.5em] text-white transition-all drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] duration-500">
                            CV
                        </span>
                        <span className="mt-2 text-[9px] sm:text-[10px] font-bold tracking-[0.5em] text-white/40 uppercase group-hover:text-white/70 duration-500 drop-shadow-md">
                            Vitæ
                        </span>
                        <div className="absolute -bottom-4 w-0 h-px bg-white/40 transition-all duration-500 group-hover:w-12" />
                    </motion.a>
                </nav>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
                    {Object.entries(siteConfig.author.social).map(([platform, username]) => {
                        if (!username) return null;
                        const Icon = socialIcons[platform];
                        if (!Icon) return null;

                        let href = "";
                        switch (platform) {
                            case 'github': href = `https://github.com/${username}`; break;
                            case 'twitter': href = `https://twitter.com/${username}`; break;
                            case 'instagram': href = `https://instagram.com/${username}`; break;
                            case 'linkedin': href = `https://linkedin.com/in/${username}`; break;
                            case 'telegram': href = `https://t.me/${username}`; break;
                            case 'weibo': href = `https://weibo.com/${username}`; break;
                            case 'spotify': href = `https://open.spotify.com/user/${username}`; break;
                            default: href = "#";
                        }

                        return (
                            <motion.a
                                key={platform}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setHoveredSocial(platform)}
                                onMouseLeave={() => setHoveredSocial(null)}
                                whileHover={{ scale: 1.25, y: -4 }}
                                className="relative p-2 transition-all duration-300 group"
                            >
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-full blur-xl transition-opacity duration-500" />

                                <Icon
                                    size={16}
                                    className={`relative z-10 transition-all duration-300 drop-shadow-lg ${hoveredSocial === platform ? 'text-white' : 'text-white/50'}`}
                                />
                            </motion.a>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
