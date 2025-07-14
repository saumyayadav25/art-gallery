import { motion } from "framer-motion";

const Filter = ({ filterData, category, setCategory }) => {
  const handleFilterChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <motion.div
      id="gallery"
      className="w-11/12 flex flex-wrap max-w-max space-x-2 sm:space-x-4 mx-auto gap-y-2 py-2 sm:py-4 justify-center mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {filterData.map((data) => (
        <button
          className={`text-sm md:text-lg px-2 py-1 sm:px-4 sm:py-2 rounded-md font-medium text-white bg-[#0a1343] border-2 hover:bg-opacity-50 transition-all duration-200
            ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}
          `}
          key={data.id}
          onClick={() => handleFilterChange(data.title)}
        >
          {data.title}
        </button>
      ))}
    </motion.div>
  );
};

export default Filter;