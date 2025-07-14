import { motion } from "framer-motion";
import { SlSocialYoutube } from "react-icons/sl";
import { GrInstagram } from "react-icons/gr";
import { ImPinterest2 } from "react-icons/im";

export default function Footer() {
    return (
        <footer className="bg-[#343d68] text-white pt-10 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-10">

                    {/* Logo */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl font-bold">Art Gallery</h1>
                        <p className="text-xl md:text-4xl text-[#535c87] mt-1 font-semibold">Saumya Creations</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex-1 text-center">
                        <h2 className="font-bold text-lg mb-3">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-red-300 transition duration-200"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#gallery"
                                    className="hover:text-red-300 transition duration-200"
                                >
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#hall-of-fame"
                                    className="hover:text-red-300 transition duration-200"
                                >
                                    Hall of Fame
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#connect"
                                    className="hover:text-red-300 transition duration-200"
                                >
                                    Connect
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div className="flex-1 flex justify-center items-center">
                        <div className="flex space-x-6 text-2xl">
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://youtube.com/@saumya.creations"
                                target="_blank"
                                className="hover:text-red-500 transition"
                            >
                                <SlSocialYoutube />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://instagram.com/saumya.creations"
                                target="_blank"
                                className="hover:text-pink-400 transition"
                            >
                                <GrInstagram />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://pinterest.com/saumya_creations"
                                target="_blank"
                                className="hover:text-red-300 transition"
                            >
                                <ImPinterest2 />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-300">
                    &copy; {new Date().getFullYear()} Art Gallery | Saumya Creations. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
