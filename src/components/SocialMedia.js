import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const platforms = [
  {
    icon: <FaYoutube className="text-red-600" />,
    name: 'YouTube',
    handle: '@saumya.creations',
    followers: '3.4k+ subscribers',
    link: 'https://youtube.com/@saumya.creations',
  },
  {
    icon: <FaInstagram className="text-pink-500" />,
    name: 'Instagram',
    handle: '@saumya.creations',
    followers: '300+ followers',
    link: 'https://instagram.com/saumya.creations',
  },
  {
    icon: <FaPinterest className="text-rose-500" />,
    name: 'Pinterest',
    handle: '@saumya_creations',
    followers: '15.8k+ monthly views',
    link: 'https://pinterest.com/saumya_creations',
  },
];

export default function SocialMedia() {
  return (
    <section className="py-12 px-4 text-center" id="connect">
      <h2 className="md:text-5xl text-3xl font-bold mb-6 text-gray-800">Let's Connect </h2>
      <p className="text-gray-600 mb-10 max-w-xl mx-auto">
        Follow me on your favorite platform to see more behind-the-scenes, timelapses, and new artworks!
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {platforms.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-indigo-100 bg-opacity-40 shadow-md rounded-xl p-3 md:p-6 w-full md:w-80 hover:bg-opacity-70 transition duration-200"
          >
            <div className="text-3xl md:text-5xl md:mb-3">{item.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold">{item.name}</h3>
            <p className="text-lg md:text-xl text-gray-500">{item.handle}</p>
            <p className="text-md text-gray-600 mt-1">{item.followers}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 mb-1 text-sm md:text-md text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-full"
            >
              Visit {item.name}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
