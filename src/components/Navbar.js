import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#22294d] p-4 overflow-hidden"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-full md:w-auto text-center md:text-left">
          <h1 className="text-white text-3xl font-bold">Art Gallery</h1>
        </div>

        <ul className="text-white hidden md:flex space-x-6">
          <li className="hover:text-red-300 transition duration-200 cursor-pointer"><a href="#">Home</a></li>
          <li className="hover:text-red-300 transition duration-200 cursor-pointer"><a href="#gallery">Gallery</a></li>
          <li className="hover:text-red-300 transition duration-200 cursor-pointer"><a href="#hall-of-fame">Hall of Fame</a></li>
          <li className="hover:text-red-300 transition duration-200 cursor-pointer"><a href="#connect">Connect</a></li>
        </ul>
      </div>
    </motion.nav>
  );
}