import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.020,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Gallery({ artworks }) {
  // empty state: if no artworks are uploaded
  if (artworks.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg mt-10">
        No artworks found in this category.
      </div>
    );
  }

  return (
    <motion.div
      key={artworks.length} // key to re-render when artworks change
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto py-8 px-4"
    >
      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4 ">
        {artworks.map((art) => (
          <motion.div
            key={art.id}
            variants={childVariants}
            className="break-inside-avoid rounded-lg shadow-md overflow-hidden bg-white "
          >
            <img
              src={art.image}
              alt={art.title}
              loading="lazy"
              className="w-full h-auto transition-transform transform hover:scale-105 duration-300 hover:cursor-pointer"
            />
            <div className="p-3">
              <h2 className="text-sm md:text-md lg:text-lg font-semibold select-none">{art.title}</h2>
              {art.link && (
                <a
                  href={art.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2f42a2] hover:font-bold text-xs sm:text-sm inline-block mt-1 hover:cursor-pointer"
                >
                  View Artwork ↗
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}